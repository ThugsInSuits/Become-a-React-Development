import React from 'react';
const useSemiPersistencState = (key, initaState) => {
  const [value, setValue] = React.useState(localStorage.getItem(key) || initaState);

  React.useEffect(() => {
    localStorage.setItem(key,value)
  },[value,key])

  return [value,setValue];
}

const App = () => {
  const stories = [
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

  const [searchTerm,setSearchTerm] = useSemiPersistencState(
    'search','React'
  )


  React.useEffect(() => {
    localStorage.setItem('search',searchTerm)
  }, [searchTerm]);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }

  const searchStories = stories.filter(story => 
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <InputWithLabel id="search"  value={searchTerm} onInputChange={handleSearch} >
        <strong>Search:</strong>
      </InputWithLabel>
      <hr />
      <List list={searchStories} />
    </div>
  );
}

const InputWithLabel = ({id,
  type='text',
  value,
  onInputChange,
  children}) => (
  <>
    <lable htmlFor={id}>{children}</lable>
    &nbsp;
    <input
      id={id}
      type={type}
      vlaue={value}
      onchange={onInputChange}
      />
  </>
)


const List = ({ list }) => list.map(item => <Item key={item.objectID} item={item} />)

const Item = ({ item }) => (
  <div>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </div>
);


export default App;