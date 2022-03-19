import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Countries  name=' Sakibal hassan' nationality=' Bangladesh'country=' Bangladesh'></Countries>
    </div>
  );
  };


function Countries(props) {
  const [count,setCount]=useState(0);
  const Counting=()=>{
    const newCount=count+1;
   setCount(newCount)
  }

  return (
    <div>
      <h3>Name:{props.name}</h3>
      <p>Country:{props.country}</p>
      <p>Nationality:{props.nationality}</p>
      <p>Count:{count}</p>
      <button onClick={Counting}>Count</button>
    </div>
  );
  };








export default App;
