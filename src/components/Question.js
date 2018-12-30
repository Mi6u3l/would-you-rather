import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    const { question, users } = this.props;
    const user = users.find((user) => question.author === user.id)
    return (
      <div className='question'>
        <div className='question__author'>
          { user.name } asks:
        </div>
        <div className='question__details'>
          <div className='question__avatar'>
            <img src={require(`../avatars/${user.avatarURL}`)} alt='avatar' />
          </div>
          <div className='question__poll'>
            hello
          </div>
        </div>
      </div>
    )
  } 
}

function mapStateToProps ({ users }) {
 return {
   users: Object.keys(users).map((userId) => users[userId])
 }
}

export default connect(mapStateToProps)(Question) 
