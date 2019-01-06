import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Radio } from 'react-bootstrap'
import { handleAnswerQuestion } from '../actions/questions'

class QuestionAnswer extends Component {
  state = {
    answer: 'optionOne',
  }
  handleChange = (e) => {
    const answer = e.target.value

    this.setState(() => ({
      answer
    }))
  }
  handleAnswer = (e) => {
    e.preventDefault()

    const { answer } = this.state
    const { dispatch, authedUser, question } = this.props
  
    dispatch(handleAnswerQuestion({
      authedUser,
      qid: question.id,
      answer
    }))
  }

  render() {
    const { question } = this.props;
    return (
      <div className='question-answer'>
        <div className='question-answer__question-title'>
          Would you rather...
        </div>
        <form onSubmit={this.handleAnswer}>
          <div className='question-answer__options'>
            <Radio name='pollOption' value='optionOne' defaultChecked onChange={this.handleChange}>
              {question.optionOne.text}
            </Radio>
            <Radio name='pollOption' value='optionTwo' onChange={this.handleChange}>
              {question.optionTwo.text}
            </Radio>
          </div>
          <div className='question-answer__submit'>
            <button type='submit' className='btn btn-success'>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  } 
}

function mapStateToProps ({ authedUser }) {
 return {
   authedUser
 }
}

export default connect(mapStateToProps)(QuestionAnswer)