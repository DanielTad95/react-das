import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import SideBar from './components/SideBar';
import Footer from './components/Footer';

import './App.css';



class App extends React.Component {
    state = {
        country: "Armenia"
    }
    constructor(props) {
        super(props);
        this.handleOnChengeCoutry = this.handleOnChengeCoutry.bind(this);
    }

    handleOnChengeCoutry() {
        this.setState({ country: "USA" });
    }

    render() {
        return (
            <>
                <Header />
                <SideBar />
                <Content />
                <Footer />
            </>
        )
    }
}
export default App;