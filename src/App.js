import logo from './logo.svg';
import './App.css';
import TrafficLight from './component/TrafficLight';

function App() {
  return (
    <div className="App">
      <TrafficLight initialIndex={0}/>
    </div>
  );
}

export default App;
