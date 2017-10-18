// Class patterns
var peapleFactory = function (name,age) {
  var temp = {};
  temp.name = name;
  temp.age = age;

  temp.printInfo = function(){
    console.log(temp.name, temp.age);
  }
  return temp
}
var person1 = peapleFactory('alice',23);
var person2 = peapleFactory('bob',24);
person1.printInfo();
person2.printInfo();

////////////////////////////////////////////


var peaplePrototype = function(){

}

peaplePrototype.prototype.name = "";
peaplePrototype.prototype.age = 0;

peaplePrototype.prototype.printInfo = function(){
  console.log(this.name, this.age);
}
var person1 = new peaplePrototype();
with(person1) {
  name = 'alice';
  age = 23;
  printInfo();
}


var person2 = new peaplePrototype();
person2.name = 'bob';
person2.age = 25;
person2.printInfo();

/////////////////////////////////////////////

var abc = function(a){
  this.aaa = a;

  if (typeof this.print !== 'function') {
    console.log('abc');
    abc.prototype.print = function(){
      console.log(this.aaa);
    }
  }
}

var a1 = new abc(33);
var a2 = new abc(44);
var a3 = new abc(55);

a1.print();
a2.print();
a3.print();

////////////////////////////////////////////////
class personClass {

  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  printInfo(){
    console.log(this.name, this.age)
  }
}
var person1 = new personClass('alice', 31);
var person2 = new personClass('bob', 33);

person1.printInfo();
person2.printInfo();

/////////////////////////////////////////////////

personObject = {
  name :'',
  age : 0.,
  printInfo : function(){
    console.log(this.name, this.age);
  }
};

var person1 = personObject;

person1.name = 'alice' ;
person1.age = 22;
person1.printInfo();

var person2 = personObject;
person2.name = 'pejman' ;
person2.age = 35;
person2.printInfo();

////////////////////////////////////////////
var myLibrary = myLibrary || {};

myLibrary.aVariable = 'aaa';

myLibrary.aFunction = function(){
  console.log('Hello!!!');
}
myLibrary.aFunction();