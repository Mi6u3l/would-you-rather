import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Welcome from './Welcome'

class Menu extends Component {
  render() {
    const { users, authedUser } = this.props
    const currentUser = users.find((user) => user.id === authedUser)
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Would you rather
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem componentClass={Link} href='/' to='/'>Home</NavItem>
          <NavItem componentClass={Link} href='/add' to='/add'>New Question</NavItem>
        </Nav>
        {currentUser ? <Welcome currentUser={currentUser} /> : ''}    
      </Navbar>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
 return {
   users: Object.keys(users).map((userId) => users[userId]),
   authedUser
 }
}

export default connect(mapStateToProps)(Menu) 