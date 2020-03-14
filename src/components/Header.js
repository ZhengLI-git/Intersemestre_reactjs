import React from 'react'
import {Link} from 'react-router-dom'

import { Component } from 'react'; 
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default class Header extends Component {
	handleClick1 = (e) => {
			this.props.changeBackground(true)
	} 
	handleClick2 = (e) => {
			this.props.changeBackground(false)
	} 
    render() { 
	    return (
	        <Navbar fixed="right" collapseOnSelect expand="md" bg="dark" variant="dark">
			      <div className="navbar-brand" to="/">SMART HOME : Enjoy your happy life :)</div>
			      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
			      <Navbar.Collapse id="responsive-navbar-nav">
			      <Nav className="mr-auto">
			        <button onClick={this.handleClick1} className="nadove" >
			        Day
			        </button>
			        <button onClick={this.handleClick2} className="nadove" >
			        Night
			        </button>
			     
			      </Nav>
			      </Navbar.Collapse>
	        </Navbar>
 		)
	}
}

