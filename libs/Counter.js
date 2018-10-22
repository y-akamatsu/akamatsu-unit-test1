class Counter {
  count() {
    count = 0;
  }

  countup() {
    return this.count++;
  }

  countdown() {
    return this.count--;
  }
};

module.exports = Counter;
