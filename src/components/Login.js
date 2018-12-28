import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { setAuthedUser } from '../actions/authedUser'


class Login extends Component {
	state = {
  	toHome: false,
	}
	handleSelect = (authedId) => {
	 	const { dispatch } = this.props

   	dispatch(setAuthedUser(authedId))
  }
	render() {
	  return (
	  	<div className='text-center'>
		  	<h3>
		    	Please Login
		    </h3>
		  	<DropdownButton
	      	title='Select user'
	      	id='usersList'
	      	onSelect={this.handleSelect}
	      >
	      	{this.props.users.map((user) => (
          	<MenuItem eventKey={user.id} key={user.id}>{user.name}</MenuItem>
         	))} 		   	
	    	</DropdownButton>
    	</div>
	  )
	}
}

function mapStateToProps ({ users }) {
 return {
   users: Object.keys(users).map((userId) => users[userId])
 }
}

export default connect(mapStateToProps)(Login) 