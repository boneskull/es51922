# es51922

> Streaming Cyrustek ES51922 DMM data protocol implementation over serial

The Cyrustek ES51922 is an IC found in several multimeters with "data-out" capability, including the UNI-T UT61E and Wintex TD2200 (source: [sigrok.org](https://sigrok.org/wiki/Multimeter_ICs)).

The `es51922` module provides both Observable ([RxJS](https://rxjs.dev)) and object-mode [Readable Stream](https://nodejs.org/api/stream.html#stream_readable_streams) APIs.

## Install

```shell
$ npm install es51922
```

## Usage

### Observable API

```js
import {fromES51922} from 'es51922';

fromES51922('/dev/ttyUSB0').subscribe(data => {
  console.log(`${data.value} ${data.range.unit}`);
});
```

Example output:

```plain
3.269 V
3.209 V
3.268 V
3.268 V
3.267 V
```

### Node.js Stream API

This is _equivalent_ to the above:

```js
import {readES51922Stream} from 'es51922';

readES51922Stream('/dev/ttyUSB0').on('data', data => {
  console.log(`${data.value} ${data.range.unit}`);
});
```

### Data Format

TODO (describe shape of object)

### Environment

Define the `ES51922_PORT` environment variable to avoid needing to pass it directly to the API. This module also accepts an `.env` file (for [dotenv](https://npm.im/dotenv)).

## Development

`src/es51922.ksy.yml` contains a [Kaitai Struct](https://kaitai.io/) format description of the data protocol. The Kaitai Struct compiler generates the parser, which lives in `vendor/es51922.js`.

The _reference_ Kaitai Struct compiler is implemented in Scala, so it would be a hassle to compile as part of a build step. The Kaitai Struct team publishes a [pure-JS implementation](https://npm.im/kaitai-struct-compiler) to npm, but it has not kept pace with the Scala implementation; it fails to parse our format description file.

Until the JS implementation ready for use, you can [install the Kaitai Struct compiler from kaitai.io](http://kaitai.io/#download), and execute `npm run compile-posix` (Windows users may need to tweak the run script). This (should) update `vendor/es51922.js`.

## Notes

- Temperature and ADP modes are unimplemented (and will likely remain so).
- The Python [ut61e](https://github.com/pklaus/ut61e_python) package helped immensely w/ understanding the protocol.
- This module won't work with Hoitek HE2325U or WCH CH9325 USB/HID adapter cables.
- I'm using a FTDI FT232R-based RS232-to-USB converter. YMMV.
- AFAIK there's no graphical viewer which supports this format available on macOS.
- My ultimate goal is to use this module in a nice graphical interface with real-time interactive charts and shit.

## See Also

- [ES51922 Datasheet](http://www.cyrustek.com.tw/spec/ES51922.pdf)
- [ut61e](https://npm.im/ut61e) - A Node.js package which wraps the ut61e Python package

## Contributing

PR's welcome! Please use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) specification.

## License

Copyright © 2019 Christopher Hiller. Licensed Apache-2.0
