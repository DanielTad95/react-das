import React from 'react';
import { Button } from 'reactstrap'
import './Header.css';
import { NavLink} from 'react-router-dom'
function Header(props) {
    return (
        <>
            <nav className="nav">
                <ul>
                    <li><NavLink to="/home">home</NavLink></li>
                    <li><NavLink to="/about">about</NavLink></li>
                    <li><NavLink to="/settings">settings</NavLink></li>
                    <li><NavLink to="/contact">contact</NavLink></li>
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