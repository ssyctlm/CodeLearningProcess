//*  -Create a Basic JavaScript Object
let dog = {
  name: "Spot",
  numLegs: 4
};
//* Use Dot Notation to Access the Properties of an Object
console.log(dog.name);
console.log(dog.numLegs);

//* Create a Method on an Object
dog.sayLegs = function() {
  return "This dog has " + this.numLegs + " legs.";
};

dog.sayLegs();

//* Make Code More Reusable with the this Keyword

//* Define a Constructor Function
function Dog() {
  this.name = "Spot";
  this.color = "brown";
  this.numLegs = 4;
}

//* Use a Constructor to Create Object
let hound = new Dog();

//* Extend Constructors to Receive ArgumentsPassed
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("pipi", "black");

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(5);
myHouse instanceof House;

//* understand Own properties ( Iterate)
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

//* Use Prototype Properties to Reduce Duplicate CodePassed
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");

//*Iterate Over All Properties
let ownProps1 = [];
let prototypeProps = [];

for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps1.push(property);
  } else {
    prototypeProps.push(property);
  }
}

//* Understand the Constructor Property
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog ? true : false;
}

//* Change the Prototype to a New ObjectPassed
// Dog.prototype.numLegs = 4
Dog.prototype = {
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//* Remember to Set the Constructor Property when Changing the Prototype

Dog.prototype = {
  constructor: Dog, //To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//* Understand Where an Object’s Prototype Comes From
Dog.prototype.isPrototypeOf(beagle); //return false, because the prototype of Dog had been overwritten.

//* Understand the Prototype Chain
Object.prototype.isPrototypeOf(Dog.prototype);

//* Use Inheritance So You Don't Repeat Yourself
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

//*Inherit Behaviors from a Supertype
let duck = Object.create(Animal.prototype);
let beagle1 = Object.create(Animal.prototype);

duck.eat();
beagle1.eat();

//*Set the Child's Prototype to an Instance of the Parent
function Dog1() {}

Dog1.prototype = Object.create(Animal.prototype);
let beagle2 = new Dog1();
beagle2.eat();

//*Reset an Inherited Constructor Property
Dog1.prototype.constructor = Dog1;

//*Add Methods After Inheritance
Dog1.prototype.bark = function() {
  console.log("woof!");
};
let beagle3 = new Dog1("papa");
beagle3.bark();
beagle3.eat();

//*Override Inherited Methods
Bird.prototype.fly = function() {
  return "I am flying";
};
function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
};

let penguin = new Penguin();
console.log(penguin.fly());

//* Use a Mixin to Add Common Behavior Between Unrelated Objects
let glideMixin = function(obj) {
  obj.glide = function() {
    console.log(obj.name + " can glide!");
  };
};

let bird = { name: "Donald", numLegs: 2 };
let boat = { name: "Warrior", type: "race -boat" };

glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();

//*Use Closure to Protect Properties Within an Object from Being Modified ExternallyPassed

function Bird1() {
  let weight = 15;
  this.getWeight = function() {
    return weight;
  };
}

//*Understand the Immediately Invoked Function Expression (IIFE)
function makeNest() {
  console.log("A cozy nest is ready");
}

(function() {
  console.log("A cozy nest is ready");
})();

//*Use an IIFE to Create a Module
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};

let funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  };
})();
funModule.singMixin(beagle);
funModule.isCuteMixin(beagle);
beagle.sing();
beagle.isCute();
