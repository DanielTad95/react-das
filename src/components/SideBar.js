import React from 'react';
import './SideBar.css';
function SideBar(){
    return (
        <nav role="navigation">
  <div className="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul className="menu">
      <a href="#"><li>Home</li></a>
      <a href="#"><li>About</li></a>
      <a href="#"><li>Info</li></a>
      <a href="#"><li>Contact</li></a>
    </ul>
  </div>
</nav>
    )
}
export default SideBar;