import React, { Component } from "react";
import { BtnFeedback } from './BtnFeedback';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = (type) => {
    this.setState(pState => ({
      [type]: pState[type] + 1
    }))
  };

  render() {
    const { good, neutral, bad } = this.state;
    const feedbackTypes = ['good', 'neutral', 'bad'];

    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = (good / countTotalFeedback) * 100 || 0;

    return (
      <>
        <Section title={'Please leave feedback'}>
          <BtnFeedback
            feedbackTypes={feedbackTypes}
            handleFeedback={this.handleFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          {countTotalFeedback > 0 ? (
            <Statistics
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage.toFixed(2)}
              feedbackTypes={feedbackTypes}
              feedbackValues={this.state}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}