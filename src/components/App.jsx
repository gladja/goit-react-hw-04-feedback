import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (e) => {
    const item = e.target.name;
    this.setState((prev) => ({
      [item]: prev[item] + 1,
    }));
    // this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    // this.setState((prev) => ({
    //   ...prev.state,
    //   total: prev.good + prev.neutral + prev.bad,
    // }));
    //? console.log(this.state);
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return Math.round((good * 100) / total);
  };

  render() {
    //? console.log(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title={'Statistics'}>
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message='There is no feedback' />
          )}
        </Section>
      </>
    );
  };
}
