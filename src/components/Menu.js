import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Welcome from "./Welcome";

class Menu extends Component {
  render() {
    const { users, authedUser } = this.props;
    const currentUser = users.find(user => user.id === authedUser);
    const navLinks = () => {
      const links = [
        ["/", "Home"],
        ["/add", "New Question"],
        ["/leaderboard", "Leaderboard"]
      ];
      return links.map(link => (
        <NavItem
          componentClass={Link}
          key={link[1]}
          href={link[0]}
          to={link[0]}
        >
          {link[1]}
        </NavItem>
      ));
    };

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>Would you rather</Navbar.Brand>
        </Navbar.Header>
        <Nav>{navLinks()}</Nav>
        {currentUser ? <Welcome currentUser={currentUser} /> : ""}
      </Navbar>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users: Object.keys(users).map(userId => users[userId]),
    authedUser
  };
}

export default connect(mapStateToProps)(Menu);
