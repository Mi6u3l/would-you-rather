import React from "react";

const Avatar = ({ user: { avatarURL } }) => (
  <div className="question__avatar">
    <img src={require(`../avatars/${avatarURL}`)} alt="avatar" />
  </div>
);

export default Avatar;
