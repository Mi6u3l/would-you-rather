import { RECEIVE_QUESTIONS, ANSWER_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
	switch(action.type) {
  	case RECEIVE_QUESTIONS :
    	return {
      	...state,
       	...action.questions
     	}
    case ANSWER_QUESTION :
    console.log('statey', state)
    	return {
    		...state
    	}
   	default :
    	return state
 }
}