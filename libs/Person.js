class Person {
  constructor(firstName, lastName, age, gender, height, weight) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
  }

  say() {
    return "私の名前は" + this.getFullName() + "です。";
  }

  getFullName() {
    return this.firstName + this.lastName;
  }

  getBMI() {
    const y = this.weight / (this.height * this.height);
    return Math.floor(y);
  }
};

module.exports = Person;