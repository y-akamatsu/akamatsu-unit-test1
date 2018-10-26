//Counterクラスを作る(ファイル名はCounter.jsとする)
//Counterクラスには次のプロパティ(インスタンス変数を持つ)
//countプロパティ : 現在のカウント値を保持する(デフォルト値は0)
class Counter {
  constructor() {
    this.count = 0;
  }
//countUpメソッド : countプロパティ(インスタンス変数)の値をインクリメントする(1増やす)
  countUp() {
    this.count++;
    return this.count;
  }
//countDownメソッド : countプロパティ(インスタンス変数)の値をインクリメントする(1減らす)
  countDown() {
    this.count--;
    return this.count;
  }
};

module.exports = Counter;
