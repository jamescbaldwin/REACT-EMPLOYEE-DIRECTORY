 import logo from './logo.svg';
import './App.css';
import Employees from "./components/Employees";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
        <img src={logo} className="App-logo" alt="logo" />
    <Employees />
         <p>
           Edit <code>src/App.js</code> and save to reload.
        </p>
       <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
    </div>
  );
}

export default App;
