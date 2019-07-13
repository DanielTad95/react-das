import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { Container, Row, Col} from 'reactstrap'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';
import SideBar from '../components/SideBar';
import Home from '../Home';
import About from '../About';
import Settings from '../Settings';
import Contact from '../Contact';
import Register from '../pages/Register';

function Web(props) {
    return (
        <>
            <Container fluid>
                <Header onToggleHandler={props.handleOnToggle} />
                <Row>
                    {
                        props.isVisible && (  
                            <Col md="3">
                                <SideBar />
                            </Col> 
                        )     
                    }
                    <Col md={props.isVisible ? 9 : 12}>
                        <Switch>
                            <Content>
                                <Route exact component={Content} path="/" />
                                <Route component={About} path="/about" />
                                <Route component={Home} path="/home" />
                                <Route component={Settings} path="/settings" />
                                <Route component={Contact} path="/contact" />
                            </Content>
                        </Switch>
                    <Footer />       
                    </Col>
                </Row>
        </Container>
    </>
    )
}
export default Web;
