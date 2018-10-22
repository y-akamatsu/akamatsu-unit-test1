const assert = require('power-assert');
const Counter = require('../../libs/Counter');

describe('countプロパティはCounterクラスのインスタンスです', () => {
  it('countプロパティ値は０である', () => {
    assert.equal(count instanceof Counter);
  });

  it('countプロパティの値は１である', () => {
    assert.equal(Counter.countup(), 1);
  });

  it('countプロパティの値は0である', () => {
    assert.equal(Counter.countdown(), 0);

  });
});