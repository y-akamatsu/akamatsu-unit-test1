class Person {
  constructor(surname, name, age, gender, height, weight) {
    this.surname = surname;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
  }

  say(surname, name) {
    return "私の名前は" + this.surname + this.name + "です。";
  }
  
  fullName() {
    return this.surname + this.name;
  }


  BMI() {
    return this.weight / (this.height * this.height);
  }
};

module.exports = Person;