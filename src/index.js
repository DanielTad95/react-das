import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import './index.css';
import Home from './Home';
import App from './App';



ReactDOM.render(
    <Router>
        <Switch>
            <Route exact component={App} path="/" />
            <Route component={Home} path="/home" />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>,
    document.getElementById('root')
);
