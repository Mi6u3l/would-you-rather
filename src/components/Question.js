import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionPeek from './QuestionPeek'

class Question extends Component {
  render() {
    const { question, user } = this.props;
    return (
      <div className='question'>
        <div className='question__author'>
          { user.name } asks:
        </div>
        <div className='question__details'>
          <div className='question__avatar'>
            <img src={require(`../avatars/${user.avatarURL}`)} alt='avatar' />
          </div>
          <div className='question__poll'>
            <QuestionPeek question={question} />
          </div>
        </div>
      </div>
    )
  } 
}

function mapStateToProps ({ users, questions }, props) {
  const { id } = props

  return {
    user: Object.keys(users)
          .map((userId) => users[userId])
          .find((user) => user.id === questions[id].author),
    question: Object.keys(questions)
              .map((questionId) => questions[questionId])
              .find((question) => question.id === id),

  }
}

export default connect(mapStateToProps)(Question) 
