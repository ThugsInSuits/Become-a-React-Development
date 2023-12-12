class Movie{
  constructor(title,movieLength){
    this.title = title;
    this.movieLength = movieLength;
  }

  toString(){
    return `${this.title} (${this.movieLength})`
  }
}

const rush123 = Reflect.apply(
  Movie.prototype.toString,{title:'Rush',movieLength:'123'},[]
)

let myBuilding = (function() {
  class Building{
    constructor(address){
      this.address = address;
    }
  
  }

  class ResidentBuilding extends Building {
    constructor(address,capacity) {
      super(address);
      this.capacity = capacity;
    }
  }

  let myBuilding = new ResidentBuilding('Java Street 3',16);
  
})();

let toString = function(){
  return  `Address:${this.address}`;
}

let myBuildingProto = Reflect.getPrototypeOf(myBuilding);
let Building = Reflect.getPrototypeOf(myBuildingProto.constructor);

Building.prototype.toString = toString;


class Person{
  constructor(name) {
    this.name = name;
  }

  set name(name) {
    let [first,last] = name.split(' ');
    this.first = first;
    this.last = last;
  }
}

let person = new Person('Julius Caesar');
let newContext = {name: 'Marcus Aurelius'};

Reflect.set(
  person,
  'name',
  'Alexander Severus',
  newContext
);