import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (e) => {
    const item = e.target.name;
    switch (item) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
    }
    // item === 'good' && setGood(good + 1);
    // item === 'neutral' && setNeutral(neutral + 1);
    // item === 'bad' && setBad(bad + 1);
  };

  const countPositiveFeedbackPercentage = () => {
    const sum = good + neutral + bad;
    return Math.round((good * 100) / sum);
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />
      </Section>

      <Section title={'Statistics'}>
        {(good + neutral + bad) ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message='There is no feedback' />
        )}
      </Section>
    </>
  );
};


