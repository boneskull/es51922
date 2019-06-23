import {concatMapTo, map, take, tap} from 'rxjs/operators';

import ByteLength from '@serialport/parser-byte-length';
import {KaitaiStream} from 'kaitai-struct';
import SerialPort from 'serialport';
import UT61E from '../vendor/Ut61e.js';
import {fromEvent} from 'rxjs';
import {streamToRx} from 'rxjs-stream';

const fromEventOnce = (...args) => fromEvent(...args).pipe(take(1));

export const read = (port = '/dev/tty.usbserial-AK05W80T') => {
  const stream = new SerialPort(port, {
    baudRate: 19200,
    dataBits: 7,
    parity: 'odd'
  });

  fromEventOnce(stream, 'open')
    .pipe(
      tap(() => {
        stream.set({rts: false});
      }),
      concatMapTo(streamToRx(stream.pipe(new ByteLength({length: 14})))),
      map(buf => new UT61E(new KaitaiStream(buf.slice(0, 12)))),
      take(1)
    )
    .subscribe(result => {
      stream.close();
      console.log(result);
    });
};

read();
