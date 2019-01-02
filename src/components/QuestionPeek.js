import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class QuestionPeek extends Component {
  toQuestionDetail = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/questions/${id}`)
  }
  render() {
    const { question } = this.props
    return (
      <div>
        <div className='view-question-title'>
          Would you rather?
        </div>
        <div className='view-question-option'>
          ...{question.optionOne.text}...
        </div>
        <button className='btn btn-info' onClick={(e) => this.toQuestionDetail(e, question.id)}>
          View Poll
        </button>
      </div>
    )
  } 
}

export default withRouter(QuestionPeek)
