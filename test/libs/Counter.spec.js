const assert = require('power-assert');
const Counter = require('../../libs/Counter');

const counter = new Counter();
describe('countプロパティはCounterクラスのインスタンスです', () => {
  it('countプロパティのデフォルト値は0である', () => {
    assert.equal(counter instanceof Counter, true);
    assert.equal(counter.count, 0);
  });

  it('countプロパティの値は１である', () => {
    counter.countUp();
    assert.equal(counter.count, 1);
  });

  it('countプロパティの値は0である', () => {
    counter.countDown();
    assert.equal(counter.count, 0);
  });
});