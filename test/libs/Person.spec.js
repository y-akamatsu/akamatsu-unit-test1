const assert = require('power-assert');
const Person = require('../../libs/Person');

describe('Personオブジェクトに実装されているメソッドのテスト', () => {
  const person1 = new Person('赤松', '由崇', 33, '男', 1.74, 67);
  it('私の名前は赤松由崇です。', () => {
    assert.equal(person1.introduceMyself(), '私の名前は赤松由崇です。');
  });

  it('赤松由崇', () => {
    assert.equal(person1.fullName, '赤松由崇');
  });

  it('赤松さんのBMIは22です。', () => {
    assert.equal(person1.calculateBMI(), 22);
  });

  const person2 = new Person('孫', '悟空', 737, '男', 1.75, 62);
  it('私の名前は孫悟空です。', () => {
    assert.equal(person2.introduceMyself(), '私の名前は孫悟空です。');
  });

  it('孫悟空', () => {
    assert.equal(person2.fullName, '孫悟空');
  });

  it('孫さんのBMIは20です。', () => {
    assert.equal(person2.calculateBMI(), 20);
  });

  const person3 = new Person('山田', '花子', 20, '女', 1.68, 54);
  it('私の名前は山田花子です。', () => {
    assert.equal(person3.introduceMyself(), '私の名前は山田花子です。');
  });

  it('山田花子', () => {
    assert.equal(person3.fullName, '山田花子');
  });

  it('山田さんのBMIは19です。', () => {
    assert.equal(person3.calculateBMI(), 19);
  });
});

