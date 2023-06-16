import React, { useState, useEffect } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad, total]);

  const feedback = (name) => {
    if (name === 'good') {
      setGood(good + 1)
    }
    else if (name === 'neutral') {
      setNeutral(neutral + 1);
    }
    else if (name === 'bad') {
      setBad(bad + 1);
    }
  };

  const positivePercentage = Math.round((good / total) * 100);
  const feedbackOptions = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section title="please leave feedback">
        <FeedbackOptions options={feedbackOptions} onLeaveFeedback={feedback} />
      </Section>
      <Section title="statistics">
        {total === 0 ? (<Notification message="There is no feedback" />) : (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />)}
      </Section>
    </>
  );
};

export default App