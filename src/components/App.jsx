import React, { Component } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedback = (name) => {
    this.setState(state => ({ [name]: state[name] + 1 }));
  };

  countTotalFeedback = () => Object.values(this.state).reduce((acc, state) => acc + state, 0);

  countPositiveFeedbackPercentage = () => Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.feedback} />
        </Section>
        <Section title="statistics">
          {total === 0 ? (<Notification message="There is no feedback" />) : (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />)}
        </Section>
      </>
    );
  };
}

export default App