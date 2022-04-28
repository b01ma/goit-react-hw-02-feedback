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

  event = () => {
    console.log('work');
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
    return (
      
      <div className={css.App}>
        <Statistics />
        <FeedbackOptions /> 

        <h1>Please leave feadback</h1>
        <ul className={css.buttonList}>
          <li>
            <button name='good' onClick={this.handleClick}>Good</button>
          </li>
          <li>
            <button name='neutral' onClick={this.handleClick}>Neutral</button>
          </li>
          <li>
            <button name='bad' onClick={this.handleClick}>Bad</button>
          </li>
        </ul>

        <h2>Statistics</h2>

        {this.countTotalFeedback()
          ? (
              <ul>
                <li>
                  <p>Good: {this.state.good}</p>
                </li>
                <li>
                  <p>Neutral: {this.state.neutral}</p>
                </li>
                <li>
                  <p>Bad: {this.state.bad}</p>
                </li>
                <li>
                  <p>Total: {this.countTotalFeedback()}</p>
                </li>
                <li>
                  <p>Positive feedback: {this.countPositiveFeedbackPercentage().toFixed()}%</p>
                </li>
              </ul>
          ) : (
            <p>No relusts</p> 
          )
      }
      </div>
    )
  }
}

