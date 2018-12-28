import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Menu from './Menu'
import Login from './Login'
import Questions from './Questions'
import NewPoll from './NewPoll'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
      	<Fragment>
        	<LoadingBar />
          <Menu />
          {this.props.authedUser ?
            <div className='text-center'>
              <Route exact path='/' component={Questions} />
              <Route path='/add' component={NewPoll} />
            </div>
            : <Login />
          }
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)