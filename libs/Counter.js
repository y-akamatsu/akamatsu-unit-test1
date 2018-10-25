class Counter {
  constructor() {
    this.count = 0;
  }
  countUp() {
    this.count++;
  }

  countDown() {
    this.count--;
  }
};

const counter = new Counter();

module.exports = counter;
