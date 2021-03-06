import { saveQuestionAnswer, saveQuestion } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";
import { addUserAnswer, addUserQuestion } from "./users";
import { RECEIVE_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION } from "./actionTypes";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then(question => dispatch(addQuestion(question)))
      .then(question => dispatch(addUserQuestion(question, authedUser)))
      .then(() => dispatch(hideLoading()));
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  };
}

export function handleAnswerQuestion(info) {
  return dispatch => {
    dispatch(answerQuestion(info));
    dispatch(addUserAnswer(info));

    return saveQuestionAnswer(info).catch(e => {
      console.warn("Error in saving answer: ", e);
      dispatch(answerQuestion(info));
      alert("The was an error saving the answer. Try again.");
    });
  };
}
