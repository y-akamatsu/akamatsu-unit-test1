const assert = require('power-assert');
const Person = require('../../libs/Person');

describe('Personオブジェクトに実装されているメソッドのテスト', () => {
  const person1 = new Person('赤松', '由崇', 33, '男', 1.74, 67);
  it('私の名前は赤松由崇です。', () => {
    assert.equal(person1.say(), '私の名前は赤松由崇です。');
  });

  it('赤松由崇', () => {
    assert.equal(person1.getFullName(), '赤松由崇');
  });

  it('赤松さんのBMIは22です。', () => {
    assert.equal(person1.getBMI(), 22);
  });

  const person2 = new Person('孫', '悟空', 737, '男', 1.75, 62);
  it('私の名前は孫悟空です。', () => {
    assert.equal(person2.say(), '私の名前は孫悟空です。');
  });

  it('孫悟空', () => {
    assert.equal(person2.getFullName(), '孫悟空');
  });

  it('孫さんのBMIは20です。', () => {
    assert.equal(person2.getBMI(), 20);
  });

  const person3 = new Person('山田', '花子', 20, '女', 1.68, 54);
  it('私の名前は山田花子です。', () => {
    assert.equal(person3.say(), '私の名前は山田花子です。');
  });

  it('山田花子', () => {
    assert.equal(person3.getFullName(), '山田花子');
  });

  it('山田さんのBMIは19です。', () => {
    assert.equal(person3.getBMI(), 19);
  });
});

