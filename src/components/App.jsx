import React, { Component } from 'react';
import css from './App.module.css';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = (event) => {

    this.setState(
      (prevState) => ({
        [event.target.name]: prevState[event.target.name] + 1
      })
    )
  }

  countTotalFeedback = ()  => (
    this.state.good + this.state.neutral + this.state.bad
    )

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.state.good;
    
    return (positiveFeedback/total*100) || 0
  }

  render() {
    const options = Object.keys(this.state);
    

    return (
      
      <div className={css.App}>

        <h1>Please leave feadback</h1>

        <FeedbackOptions
          options={options}
          onLeaveFeedback={ this.handleClick }/>

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage().toFixed()}
        />

      </div>
    )
  }
}

