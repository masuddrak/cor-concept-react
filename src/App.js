import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Countries  name=' Sakibal hassan' nationality=' Bangladesh'country=' Bangladesh'></Countries>
    </div>
  );
  };


function Countries(props) {
  return (
    <div>
      <h3>Name:{props.name}</h3>
      <p>Country:{props.country}</p>
      <p>Nationality:{props.nationality}</p>
    </div>
  );
  };








export default App;
