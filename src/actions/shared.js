import { getInitialData } from '../utils/api'
import { setAuthedUser } from '../actions/authedUser'
import { receiveUsers } from '../actions/users'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData (authedId) {
  return (dispatch) => {
  	dispatch(showLoading())
    return getInitialData()
      .then(({ users }) => {
        dispatch(receiveUsers(users))
        dispatch(setAuthedUser(authedId))
        dispatch(hideLoading())
      })
  }
}