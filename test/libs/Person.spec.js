const assert = require('power-assert');
const Person = require('../../libs/Person');

describe('Personオブジェクトに実装されているメソッドのテスト', () => {
  const person1 = new Person('赤松', '由崇', 33, '男', 1.74, 67);
  it('私の名前は赤松由崇です。', () => {
    person1.say();
    assert.equal(person1.say(), '私の名前は赤松由崇です。');
  });

  it('赤松由崇', () => {
    person1.fullName();
    assert.equal(person1.fullName(), '赤松由崇');
  });

  it('赤松さんのBMIは22.12973972783723です。', () => {
    person1.BMI();
    assert.equal(person1.BMI(), 22.12973972783723);
  });

  const person2 = new Person('孫', '悟空', 737, '男', 1.75, 62);
  it('私の名前は孫悟空です。', () => {
    person1.say();
    assert.equal(person2.say(), '私の名前は孫悟空です。');
  });

  it('孫悟空', () => {
    person1.fullName();
    assert.equal(person2.fullName(), '孫悟空');
  });

  it('孫さんのBMIは20.244897959183675です。', () => {
    person1.BMI();
    assert.equal(person2.BMI(), 20.244897959183675);
  });

  const person3 = new Person('山田', '花子', 20, '女', 1.68, 54);
  it('私の名前は山田花子です。', () => {
    person3.say();
    assert.equal(person3.say(), '私の名前は山田花子です。');
  });

  it('山田花子', () => {
    person3.fullName();
    assert.equal(person3.fullName(), '山田花子');
  });

  it('山田さんのBMIは19.13265306122449です。', () => {
    person3.BMI();
    assert.equal(person3.BMI(), 19.13265306122449);
  });
});

