import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
  	let authedID = 'tylermcginnis'
    this.props.dispatch(handleInitialData(authedID))
  }
  render() {
    return (
    	<Fragment>
      	<LoadingBar />
      	<div>
      		Hello
      	</div>
      </Fragment>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)