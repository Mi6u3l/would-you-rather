import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Menu from './Menu'
import Login from './Login'
import QuestionsList from './QuestionsList'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
      	<Fragment>
        	<LoadingBar className='loading-bar' />
          <Menu />
          {this.props.authedUser ?
            <div className='text-center'>
              <Route exact path='/' component={QuestionsList} />
              <Route path='/add' component={NewQuestion} />
              <Route path='/questions/:id' component={QuestionPage} />
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