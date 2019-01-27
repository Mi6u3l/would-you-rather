import { getInitialData } from "../utils/api";
import { setAuthedUser } from "../actions/authedUser";
import { receiveUsers } from "../actions/users";
import { receiveQuestions } from "../actions/questions";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(null));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
