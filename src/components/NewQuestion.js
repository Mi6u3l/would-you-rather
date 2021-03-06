import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";

class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: ""
  };
  handleChange = e => {
    const { value, name } = e.target;

    this.setState(() => ({
      [name]: value
    }));
  };
  handleSubmit = e => {
    e.preventDefault();

    const { optionOneText, optionTwoText } = this.state;
    const { dispatch, history } = this.props;
    dispatch(handleAddQuestion(optionOneText, optionTwoText));

    history.push("/");
  };
  render() {
    const { optionOneText, optionTwoText } = this.state;

    return (
      <div className="question-add">
        <span className="question-add__header">Create new Question</span>
        <div>
          Would you rather...
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type="text"
                value={optionOneText}
                name={'optionOneText'}
                placeholder="Enter option one text here"
                onChange={this.handleChange}
              />
            </div>
            <div>OR</div>
            <div>
              <input
                type="text"
                value={optionTwoText}
                name={'optionTwoText'}
                placeholder="Enter option two text here"
                onChange={this.handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-success"
              disabled={optionOneText === "" || optionTwoText === ""}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(NewQuestion);
