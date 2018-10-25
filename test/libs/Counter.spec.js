const assert = require('power-assert');
const Counter = require('../../libs/Counter');
const counter = new Counter();

describe('countプロパティはCounterクラスのインスタンスです', () => {
  it('countプロパティ値は０である', () => {
    assert.equal(counter instanceof Counter);
  });

  it('countプロパティの値は１である', () => {
    
    assert.equal(counter.countUp(0), 1);
  });

  it('countプロパティの値は0である', () => {
    assert.equal(counter.countDown(1), 0);
  });
});