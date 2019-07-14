import {concatMap, map, mapTo, take, tap} from 'rxjs/operators';
import {fromEvent, using, of, iif} from 'rxjs';
import {rxToStream, streamToRx} from 'rxjs-stream';

import ByteLength from '@serialport/parser-byte-length';
import ES51922 from '../vendor/es51922.js';
import {KaitaiStream} from 'kaitai-struct';
import SerialPort from 'serialport';
import {config as dotenvConfig} from 'dotenv';
import createDebugger from 'debug';

dotenvConfig();

const debug = createDebugger('es51922');

export const DEFAULT_PORT = '/dev/ttyUSB0';

const fromEventOnce = (...args) => fromEvent(...args).pipe(take(1));

const createProtocolStream = buf => new ES51922(new KaitaiStream(buf));

const createFixedPrecisionProxy = protocolStream =>
  new Proxy(protocolStream, {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);
      return prop === 'value'
        ? parseFloat(value.toFixed(target.range.precision))
        : value;
    }
  });

const parse = () => observable =>
  observable.pipe(
    tap(buf => debug(`received Buffer`, buf)),
    map(buf => createFixedPrecisionProxy(createProtocolStream(buf)))
  );

const createSerialPortSubscriber = serialPort => {
  const unsubscribe = () => {
    debug(`request received to close port at ${serialPort.path}`);
    if (serialPort.isOpen) {
      serialPort.close();
    } else {
      debug(`port at ${serialPort.path} was already closed`);
    }
  };
  return new Proxy(serialPort, {
    get: (target, prop, receiver) => {
      return prop === 'unsubscribe'
        ? unsubscribe
        : Reflect.get(target, prop, receiver);
    }
  });
};

export const fromSerialPort = (
  port = process.env.ES51922_PORT || DEFAULT_PORT,
  opts = {}
) =>
  using(
    () => {
      const serialPort = createSerialPortSubscriber(
        new SerialPort(port, {
          baudRate: 19200,
          dataBits: 7,
          parity: 'odd',
          ...opts,
          autoOpen: false
        })
      );
      debug(`instantiated SerialPort at path ${port}`);
      return serialPort;
    },
    serialPort => {
      debug(`opening port at path ${port}`);
      serialPort.open();
      return fromEventOnce(serialPort, 'open').pipe(
        tap(() => {
          debug(`port at ${serialPort.path} open`);
          serialPort.set({rts: false});
        }),
        mapTo(serialPort)
      );
    }
  );

export const fromES51922 = (port = process.env.ES51922_PORT || DEFAULT_PORT) =>
  iif(() => typeof port === 'string', fromSerialPort(port), of(port)).pipe(
    concatMap(serialPort =>
      streamToRx(serialPort.pipe(new ByteLength({length: 14})))
    ),
    parse()
  );

export const readES51922Stream = (...args) =>
  rxToStream(fromES51922(...args), {objectMode: true});
