import React from 'react';

const welcome = {
  greeting:"Hey",
  title:"React"
}


function App() {
  return (
    <div>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text"></input>
    </div>
  );
}

export default App;
