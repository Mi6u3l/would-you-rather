import { RECEIVE_USERS, ADD_USER_ANSWER, ADD_USER_QUESTION } from "./actionTypes";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function addUserAnswer({ authedUser, qid, answer }) {
  return {
    type: ADD_USER_ANSWER,
    authedUser,
    qid,
    answer
  };
}

export function addUserQuestion(question, authedUser) {
  return {
    type: ADD_USER_QUESTION,
    authedUser,
    question
  };
}
