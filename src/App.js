import React from 'react';

import Web from './versions/Web';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import './App.css';
import Register from './pages/Register'
import withMobileSize from './withMobileSize';


class App extends React.Component {
    state = {
        isVisible: false
    };
    constructor(props) {
        super(props);
        this.handleOnToggle = this.handleOnToggle.bind(this);
    }

    handleOnToggle() {
        this.setState({ isVisible: !this.state.isVisible })
    }

    render() {
        return localStorage.getItem('user') ? (
            <Router>
                {
                    this.props.width >= 992 && (
                        <Web
                            handleOnToggle={this.handleOnToggle}
                            isVisible={this.state.isVisible}
                        />
                    )
                }
                {
                    this.props.width < 992 && this.props.width >= 515 && (
                        <div>
                            tablet version
                        </div>
                    )
                }
            </Router>
        ) : (
            <Register /> 
        )
    }
}
export default withMobileSize(App);