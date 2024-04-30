import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

/* NavBar component 

* Links to Home / Questions component "/" and AllCostumes component "/costumes"

*/

const NavBar = () => {
    return (
      <div>
        <Navbar expand="md">
          <NavItem>
          <NavLink exact to="/" > Home</NavLink>
          </NavItem>
          <Nav>
            <NavLink to="/costumes">Browse all costumes</NavLink>
          </Nav>
        </Navbar>
      </div>
    )
};

export default NavBar;