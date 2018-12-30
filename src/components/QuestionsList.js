import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionsList extends Component {
	state = {
    showAnswered: false
  }
  toggleTab = (e, tab) => {
  	const showAnswered = tab === 'answered' ? true : false
    this.setState(() => ({
      showAnswered
    }))
  }
  render() {
  	const { answeredQuestions, notAnsweredQuestions } = this.props
  	return (
    	<div className='questions-list'>
    	  <div className='questions-list__tabs'>
    	  	<button className={!this.state.showAnswered ? 'questions-list__tabs--active' : ''} onClick={(e) => this.toggleTab(e, 'notAnswered')}>
  					Unanswered
  				</button>
  				<button className={this.state.showAnswered ? 'questions-list__tabs--active' : ''} onClick={(e) => this.toggleTab(e, 'answered')}>
  					Answered
  				</button>
				</div>
				{ this.state.showAnswered ?
					<div className='questions-list__tabs-content'>
				  	{answeredQuestions.length > 0 ?
							<ul>
	         			{answeredQuestions.map((question) => (
	           			<li key={question.id}>
	             			<Question question={question} />
	           			</li>
	         			))}
	       			</ul>
	       		: 'No question has been answered yet'}
					</div>
					:
					<div className='questions-list__tabs-content'>
				  	{notAnsweredQuestions.length > 0 ?
					  	<ul>
	         			{notAnsweredQuestions.map((question) => (
	           			<li key={question.id}>
	             			<Question question={question} />
	           			</li>
	         			))}
	       			</ul>
       			: 'Every question has been answered'}
					</div>
				}
     	</div>
   	)
 	}
}

function mapStateToProps ({ authedUser, questions }) {
 const questionsList = Object.keys(questions)
   		.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
   		.map((id) => questions[id])

 return {
 	answeredQuestions: questionsList.filter((question) => question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)),
 	notAnsweredQuestions: questionsList.filter((question) => !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser)),

 }
}

export default connect(mapStateToProps)(QuestionsList) 