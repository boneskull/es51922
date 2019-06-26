import {concatMapTo, map, take, tap} from 'rxjs/operators';
import {fromEvent, using} from 'rxjs';
import {rxToStream, streamToRx} from 'rxjs-stream';

import ByteLength from '@serialport/parser-byte-length';
import ES51922 from '../vendor/es51922.js';
import {KaitaiStream} from 'kaitai-struct';
import SerialPort from 'serialport';
import {config as dotenv} from 'dotenv';

dotenv();

const fromEventOnce = (...args) => fromEvent(...args).pipe(take(1));

const parse = () => observable =>
  observable.pipe(
    map(
      buf =>
        new Proxy(new ES51922(new KaitaiStream(buf)), {
          get: (target, prop, receiver) =>
            prop === 'value'
              ? parseFloat(
                  Reflect.get(target, prop, receiver).toFixed(
                    target.range.precision
                  )
                )
              : Reflect.get(target, prop, receiver)
        })
    )
  );

export const fromES51922 = (port = process.env.ES51922_PORT) =>
  using(
    () =>
      new Proxy(
        new SerialPort(port, {
          baudRate: 19200,
          dataBits: 7,
          parity: 'odd'
        }),
        {
          get: (target, prop, receiver) =>
            prop === 'unsubscribe'
              ? target.close.bind(target)
              : Reflect.get(target, prop, receiver)
        }
      ),
    stream =>
      fromEventOnce(stream, 'open').pipe(
        tap(() => {
          stream.set({rts: false});
        }),
        concatMapTo(streamToRx(stream.pipe(new ByteLength({length: 14})))),
        parse()
      )
  );

export const readES51922Stream = (...args) =>
  rxToStream(fromES51922(...args), {objectMode: true});
