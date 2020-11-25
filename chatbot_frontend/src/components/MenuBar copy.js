import React, { Component } from 'react'
import { Button, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default class MenuBar1 extends Component {

    handleSelect() { }
    render() {
        return (
            <Nav variant="pills" activeKey="1" onSelect={this.handleSelect}>
                <Nav.Item>
                    <Nav.Link eventKey="1" href="#/home">
                        NavLink 1 content
        </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2" title="Item">
                        NavLink 2 content
        </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="3" disabled>
                        NavLink 3 content
        </Nav.Link>
                </Nav.Item>
                <NavDropdown  variant='none' style={{ color: 'white' }} title="Dropdown" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        )
    }
}
