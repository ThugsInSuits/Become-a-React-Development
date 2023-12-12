import React from 'react';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class Developer{
  constructor(firstName,secondName){
    this.firstName = firstName;
    this.secondName = secondName;
  }

  getName(){
    return this.firstName + this.secondName;
  }
}

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <hr />
      <List />
      <List />
    </div>
  );
}

function List() {
  const robin = new Developer('Robin','Wierch');
  const dennis = new Developer('Dennis','Wierch');

  return (
    <div>
      {robin.getName()}
      {dennis.getName()}
    </div>
  );
}

export default App;