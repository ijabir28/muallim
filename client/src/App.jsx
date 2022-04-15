import './App.css';
import {Nav} from "./components/Nav";
import {Router} from "react-router-dom";
import { history } from './helpers';


function App() {
  return (
    <div className="App">
        <Router history={history}>
            <Nav/>
        </Router>
        <img src='resources/makkah_banner.jpg' alt="Makkah_Banner"/>
    </div>
  );
}

export default App;
