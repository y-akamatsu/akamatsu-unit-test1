class Person {
  constructor(firstName, lastName, age, gender, height, weight) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
  }

  get getFullName() {
    return "私の名前は" + this.fullName + "です。";
  }

  get fullName() {
    return this.firstName + this.lastName;
  }

  calculationBMI() {
    const bmi = this.weight / (this.height * this.height);
    return Math.floor(bmi);
  }
};

module.exports = Person;