import './App.css';

const Task = (value) => {
  return (
    value.map((value) =><li>{value}</li>)
  );
}

function App() {
  return (
    Task(['JavaScript', 'CSS', 'Jest', 'React', 'JS Assíncrono'])
  );
}

export default App;
