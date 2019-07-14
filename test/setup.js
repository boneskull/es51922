import expect from 'unexpected';
import sinon from 'sinon';
import unexpectedSinon from 'unexpected-sinon';
import unexpectedRxjs from 'unexpected-rxjs';
import rewiremock, {overrideEntryPoint} from 'rewiremock';

overrideEntryPoint(module);

global.sinon = sinon;
global.rewiremock = rewiremock;
global.expect = expect
  .clone()
  .use(unexpectedSinon)
  .use(unexpectedRxjs);
