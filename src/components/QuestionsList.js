import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class QuestionsList extends Component {
  state = {
    showAnswered: false
  };
  toggleTab = (e, tab) => {
    const showAnswered = tab === "answered" ? true : false;
    this.setState(() => ({
      showAnswered
    }));
  };
  render() {
    const { answeredQuestionIds, unAnsweredQuestionIds } = this.props;
    return (
      <div className="questions-list">
        <div className="questions-list__tabs">
          <button
            className={
              !this.state.showAnswered ? "questions-list__tabs--active" : ""
            }
            onClick={e => this.toggleTab(e, "notAnswered")}
          >
            Unanswered
          </button>
          <button
            className={
              this.state.showAnswered ? "questions-list__tabs--active" : ""
            }
            onClick={e => this.toggleTab(e, "answered")}
          >
            Answered
          </button>
        </div>
        {this.state.showAnswered ? (
          <div className="questions-list__tabs-content">
            {answeredQuestionIds.length > 0 ? (
              <ul>
                {answeredQuestionIds.map(id => (
                  <li key={id}>
                    <Question showPeekQuestion={true} id={id} />
                  </li>
                ))}
              </ul>
            ) : (
              "No question has been answered yet"
            )}
          </div>
        ) : (
          <div className="questions-list__tabs-content">
            {unAnsweredQuestionIds.length > 0 ? (
              <ul>
                {unAnsweredQuestionIds.map(id => (
                  <li key={id}>
                    <Question showPeekQuestion={true} id={id} />
                  </li>
                ))}
              </ul>
            ) : (
              "Every question has been answered"
            )}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }) {
  const orderedQuestionsIds = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );

  const answeredQuestionIds = orderedQuestionsIds.filter(
    id =>
      questions[id].optionOne.votes.includes(authedUser) ||
      questions[id].optionTwo.votes.includes(authedUser)
  );

  const unAnsweredQuestionIds = orderedQuestionsIds.filter(
    id =>
      !questions[id].optionOne.votes.includes(authedUser) &&
      !questions[id].optionTwo.votes.includes(authedUser)
  );

  return {
    answeredQuestionIds,
    unAnsweredQuestionIds
  };
}

export default connect(mapStateToProps)(QuestionsList);
