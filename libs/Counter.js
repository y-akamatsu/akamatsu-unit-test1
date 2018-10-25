class Counter {
 constructor(a){
   
   this.count = a;
 }
 countUp(){
   this.count++;
 }

 countDown(){
   this.count--;
 }
};

const counter = new Counter(0);
module.exports = counter;
