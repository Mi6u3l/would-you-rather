import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from "./Avatar";

class LeaderBoard extends Component {
  render() {
    const { usersList } = this.props;
    return (
      <div className="leaderboard">
         <ul>
          {usersList
            .map(user => (
            <li key={user.id}>
              <div className="leaderboard__wrapper">
                <Avatar user={user} />
                <div className="leaderboard__details">
                  <span className="leaderboard__name">{user.name}</span>
                  <div className="leaderboard__results">
                    <div>Answered questions: {Object.keys(user.answers).length}</div>
                    <div>Created questions: {Object.keys(user.questions).length}</div>
                    <div className="leaderboard__total">
                      Total: {Object.keys(user.answers).length + Object.keys(user.questions).length}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
          </ul>  
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const usersList = Object.keys(users).map((key) => {
    return users[key]
  }).sort((a, b) => {
    return (Object.keys(b.questions).length + Object.keys(b.answers).length) - 
    (Object.keys(a.questions).length + Object.keys(a.answers).length)
  })
  return {
    usersList
  };
}

export default connect(mapStateToProps)(LeaderBoard);
