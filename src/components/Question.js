import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import QuestionPeek from "./QuestionPeek";
import QuestionAnswer from "./QuestionAnswer";
import QuestionPoll from "./QuestionPoll";
import Avatar from "./Avatar";

class Question extends Component {
  render() {
    const { questions, users, showPeekQuestion, id, authedUser } = this.props;
    return (
      <div className="question">
        {questions[id] ? (
          <Fragment>
            <div className="question__author">
              {users[questions[id].author].name} asks:
            </div>
            <div className="question__details">
              <Avatar user={users[questions[id].author]} />
              <div className="question__view">
                {showPeekQuestion ? (
                  <QuestionPeek question={questions[id]} />
                ) : questions[id].optionOne.votes.includes(authedUser) ||
                  questions[id].optionTwo.votes.includes(authedUser) ? (
                  <QuestionPoll
                    question={questions[id]}
                    authedUser={authedUser}
                  />
                ) : (
                  <QuestionAnswer
                    question={questions[id]}
                    authedUser={authedUser}
                  />
                )}
              </div>
            </div>
          </Fragment>
        ) : (
          "Question does not exist"
        )}
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    users,
    questions,
    authedUser
  };
}

export default connect(mapStateToProps)(Question);
