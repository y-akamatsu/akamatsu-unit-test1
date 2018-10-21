const assert = require('power-assert');
const Math = require('../../libs/Math');

describe('Mathオブジェクトに実装されているメソッドのテスト', () => {
  describe('addメソッドのテスト', () => {
    it('addメソッドの型はfunctionである', () => {
      assert.equal(typeof Math.add, 'function');
    });

    it('正しく足し算ができる', () => {
      assert.equal(Math.add(1, 2), 3);
      assert.equal(Math.add(100, 2), 102);
      assert.equal(Math.add(-100, -100), -200);
      assert.equal(Math.add(1000, -2), 998);
    });

    it('数値以外がセットされたらエラーを返す', () => {
      const invalidValueList = ['a', {}, [], null, undefined];
      invalidValueList.forEach(invalidValue => {
        let error = null;
        try {
          Math.add(invalidValue, 2);
        } catch (err) {
          error = err;
        }
        assert.equal(error.message, '数値以外のものが引数に含められています');
      });
    });
  });

  describe('subメソッドのテスト', () => {
    it('subメソッドの型はfunctionである', () => {
      assert.equal(typeof Math.sub, 'function');
    });

    it('正しく引き算ができる', () => {
      assert.equal(Math.sub(2, 1), 1);
      assert.equal(Math.sub(-99, -99), 0);
      assert.equal(Math.sub(100, 1), 99);
      assert.equal(Math.sub(0, 1), -1);
    });

    it('数値以外がセットされたらエラーを返す', () => {
      const invalidValueList = ['a', {}, [], null, undefined];
      invalidValueList.forEach(invalidValue => {
        let error = null;
        try {
          Math.sub(invalidValue, 2);
        } catch (err) {
          error = err;
        }
        assert.equal(error.message, '数値以外のものが引数に含められています');
      });
    });
  });


  describe('mulメソッドのテスト', () => {
    it('mulメソッドの型はfunctionである', () => {
      assert.equal(typeof Math.mul, 'function');
    });

    it('正しく掛け算ができる', () => {
      assert.equal(Math.mul(2, 1), 2);
      assert.equal(Math.mul(99, 1), 99);
      assert.equal(Math.mul(100, 1), 100);
      assert.equal(Math.mul(2, -1), -2);
    });

    it('数値以外がセットされたらエラーを返す', () => {
      const invalidValueList = ['a', {}, [], null, undefined];
      invalidValueList.forEach(invalidValue => {
        let error = null;
        try {
          Math.mul(1, invalidValue);
        } catch (err) {
          error = err;
        }
        assert.equal(error.message, '数値以外のものが引数に含められています');
      });
    });
  });

  describe('divメソッドのテスト', () => {
    it('mulメソッドの型はfunctionである', () => {
      assert.equal(typeof Math.div, 'function');
    });

    it('正しく割り算ができる', () => {
      assert.equal(Math.div(2, 1), 2);
      assert.equal(Math.div(99, 1), 99);
      assert.equal(Math.div(1000, 1), 1000);
      assert.equal(Math.div(2, -1), -2);
    });

    it('数値以外がセットされたらエラーを返す', () => {
      const invalidValueList = ['a', {}, [], null, undefined];
      invalidValueList.forEach(invalidValue => {
        let error = null;
        try {
          Math.mul(invalidValue, 1);
        } catch (err) {
          error = err;
        }
        assert.equal(error.message, '数値以外のものが引数に含められています');
      });
    });
  });
});

