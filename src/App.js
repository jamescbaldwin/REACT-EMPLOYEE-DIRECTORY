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
    </div>
  );
}

export default App;
