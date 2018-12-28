import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Welcome extends Component {
  logout = () => {
    const { dispatch } = this.props

    dispatch(setAuthedUser(null))
  }
  render() {
    const { currentUser } = this.props

    return (
      <div className='welcome'>
        <div className='welcome__paragraph'>
          Welcome {currentUser.name}
        </div>
        <img className='welcome__avatar' src={require(`../avatars/${currentUser.avatarURL}`)} alt='avatar' />
        <span className='welcome__logout' onClick={this.logout}>Logout</span>
      </div>
    )
  }
}

export default connect()(Welcome)