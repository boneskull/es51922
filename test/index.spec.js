'use strict';

import SerialPort from 'serialport';
import MockBinding from '@serialport/binding-mock';
import {Observable, bindNodeCallback} from 'rxjs';
import {mergeMap, mapTo} from 'rxjs/operators';

describe('es51922', function() {
  let subject;
  let sandbox;
  let stubs;

  before(function() {
    SerialPort.Binding = MockBinding;
  });

  beforeEach(function() {
    sandbox = sinon.createSandbox();
    sandbox.spy(MockBinding.prototype, 'open');
    sandbox.spy(MockBinding.prototype, 'close');
    stubs = {
      dotenv: {
        config: sandbox.stub()
      }
    };
    subject = rewiremock.proxy(() => require('../src/index.js'), {
      dotenv: stubs.dotenv
    });
    MockBinding.createPort(subject.DEFAULT_PORT);
  });

  afterEach(function() {
    sandbox.restore();
    MockBinding.reset();
  });

  describe('fromSerialPort()', function() {
    describe('when subscribed to', function() {
      it('should emit and open a single SerialPort which closes upon unsubscribe', function() {
        return expect(
          subject.fromSerialPort(),
          'when complete',
          expect
            .it('to have length', 1)
            .and(
              'to have an item satisfying',
              expect
                .it('to be a', SerialPort)
                .and('to have property', 'isOpen', false)
            )
        );
      });

      describe('when the serial port is already closed', function() {
        it('should not attempt to close the port', async function() {
          await subject
            .fromSerialPort()
            .pipe(
              mergeMap(serialPort =>
                bindNodeCallback(serialPort.close.bind(serialPort))().pipe(
                  mapTo(serialPort)
                )
              )
            )
            .toPromise();
          expect(MockBinding.prototype.close, 'was called once');
        });
      });
    });

    describe('when called but not susbcribed to', function() {
      describe('when called with no port (using default)', function() {
        it('should return an Observable', function() {
          expect(subject.fromSerialPort(), 'to be an', Observable);
        });

        it('should not open the port', function() {
          subject.fromSerialPort();
          expect(MockBinding.prototype.open, 'was not called');
        });
      });

      describe('when called with no port (using environment)', function() {
        beforeEach(function() {
          process.env.ES51922_PORT = '/dev/ttyUSB1';
        });

        it('should not open the port', function() {
          subject.fromSerialPort();
          expect(MockBinding.prototype.open, 'was not called');
        });
      });
    });
  });

  describe('fromES51922()', function() {
    describe('when passed a string', function() {
      it('should open as a port');
    });

    describe('when passed a SerialPort instance', function() {
      describe('when the port is not already open', function() {
        it('should open the port');
      });

      describe('when the port is open', function() {
        it('should not attempt to open the port');
      });
    });

    it('should parse the SerialPort data');
  });

  describe('readES51922Stream()', function() {
    it('should delegate to fromES51922()');
    it('should create a ReadableStream in object mode');
  });
});
