import React, { Component } from "react";

class Avatar extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className="question__avatar">
        <img src={require(`../avatars/${user.avatarURL}`)} alt="avatar" />
      </div>
    );
  }
}

export default Avatar;
