const assert = require('power-assert');
const Counter = require('../../libs/Counter');

describe('countプロパティはCounterクラスのインスタンスです', () => {
  it('countプロパティ値は０である', () => {
    const counter = new Counter(0);
    assert.equal(counter instanceof Counter);
  });

  it('countプロパティの値は１である', () => {
    const counter = new Counter(0);
    assert.equal(counter.countUp(0), 1);
  });

  it('countプロパティの値は0である', () => {
    const counter = new Counter(0);
    assert.equal(counter.countDown(1), 0);
  });
});