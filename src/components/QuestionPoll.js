import React, { Component } from "react";

class QuestionPoll extends Component {
  render() {
    const { question, authedUser } = this.props;
    const totalVotes =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    const answerOnePercentage = Math.floor(
      (question.optionOne.votes.length / totalVotes) * 100
    );
    const answerTwoPercentage = Math.floor(
      (question.optionTwo.votes.length / totalVotes) * 100
    );
    return (
      <div className="question-poll">
        <div className="question-poll__title">Results:</div>
        <div>
          {question.optionOne.text}?
          <div className="question-poll__result">
            {question.optionOne.votes.length} out of 3 votes (
            {answerOnePercentage}%)
            {question.optionOne.votes.includes(authedUser) && " ✅"}
          </div>
        </div>
        <div>
          {question.optionTwo.text}?
          <div className="question-poll__result">
            {question.optionTwo.votes.length} out of 3 votes (
            {answerTwoPercentage}%)
            {question.optionTwo.votes.includes(authedUser) && " ✅"}
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionPoll;