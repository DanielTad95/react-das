import React from 'react';
import { Button } from 'reactstrap'
import './Header.css';
function Header(props) {
    return (
        <>
            <nav className="nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div>
                <Button 
                    onClick={props.onToggleHandler}
                    type="button" 
                    color="primary">
                        burger
                </Button>
            </div>
        </>
    )
}
export default Header;