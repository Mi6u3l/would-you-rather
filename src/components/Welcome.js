import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
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
      <Fragment>
        Welcome {currentUser.name}
        &nbsp;<a href='#' onClick={this.logout}>Logout</a>
      </Fragment>
    )
  }
}

export default connect()(Welcome)