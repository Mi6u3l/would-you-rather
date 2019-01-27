import React from "react";
import { connect } from "react-redux";
import { DropdownButton, MenuItem } from "react-bootstrap";
import { setAuthedUser } from "../actions/authedUser";

const Login = ({ logIn, users }) => (
  <div className="text-center">
    <h3>Please Login</h3>
    <DropdownButton
      title="Select user"
      id="usersList"
      onSelect={authedId => logIn(authedId)}
    >
      {users.map(user => (
        <MenuItem eventKey={user.id} key={user.id}>
          {user.name}
        </MenuItem>
      ))}
    </DropdownButton>
  </div>
);

const mapDispatchToProps = dispatch => ({
  logIn: authedId => dispatch(setAuthedUser(authedId))
});

const mapStateToProps = ({ users }) => ({
  users: Object.keys(users).map(userId => users[userId])
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
