import assert from 'assert';
import filter from './';

let isOdd = (x) => x & 1;

it('fj-filter', () => {
  assert.deepEqual(filter(isOdd, [1,2,3]),[1,3]);
  let getOdds = filter(isOdd);
  assert.deepEqual(getOdds([1,2,3]),[1,3]);
});
