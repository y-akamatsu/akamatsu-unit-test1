class Counter {
  constructor() {
    this.count = 0;
    return this.count;
  }
  countUp() {
    return this.count++;
  }

  countDown() {
    return this.count--;
  }
};

module.exports = Counter;
