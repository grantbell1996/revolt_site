import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Homepage></Homepage>
    </div>
  );
}

export default App;
