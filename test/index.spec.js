import {fromES51922} from '../src/index.js';
import {take} from 'rxjs/operators';

describe('fromES51922', function() {
  it('should output stuff', function() {
    fromES51922().pipe(take(1));
  });
});
