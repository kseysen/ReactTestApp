import React, { Component } from 'react';
import './NavbarFeatures.css';
import { Navbar, Nav, NavbarBrand, NavbarNav, NavDropdown, MenuItem, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Router>
                <Navbar inverse collapseOnSelect>
                    <NavbarBrand href="/">
                        <strong>Navbar</strong>
                    </NavbarBrand>  
                    <Nav>
                        <NavItem eventKey={1} href="#">
                        Link
                        </NavItem>     
                        <NavItem eventKey={2} href="#">
                        Link
                        </NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>            
                </Navbar>
            </Router>
        );
    }
}

export default NavbarFeatures;
