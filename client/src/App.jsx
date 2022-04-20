import './App.css';
import {Route, Router, Switch} from "react-router-dom";

import {Nav} from "./components/Nav";
import { Agency } from './agency';


function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Nav />
                <Switch>
                <Route path="/agency" component={Agency} />
                <Route path="/blog" component={blog} />
                  
                </Switch>
            </Router>
        </div>
    );
}

export default App;
