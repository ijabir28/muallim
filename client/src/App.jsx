import './App.css';
import {Route, Router, Switch} from "react-router-dom";

import {Nav} from "./components/Nav";
import { history } from './helpers';
import { Home } from './home';
import { Packages } from './packages';
import { Guide } from './guide';
import { Virtual_tour } from './virtual_tour';
import { Notices } from './notices';
import { Support } from './support';

function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/packages" component={Packages} />
                    <Route path="/hajj_n_umrah_guide" component={Guide} />
                    <Route path="/virtual_tour" component={Virtual_tour} />
                    <Route path="/notices" component={Notices} />
                    <Route path="/support" component={Support} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
