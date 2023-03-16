import { useState } from 'react';

import LeaveFeedback from './leave-feedback/LeaveFeedback';
import Statistics from './statistics/Statistics';
import Section from './section/Section';
import Notification from './notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementFeedback = e => {
    const target = e.target.dataset.btn;
    if (target === 'good') {
      setGood(prev => prev + 1);
    } else if (target === 'neutral') {
      setNeutral(prev => prev + 1);
    } else if (target === 'bad') {
      setBad(prev => prev + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div style={{ margin: '15px 0 0 15px' }}>
      <Section title="Please leave feedback">
        <LeaveFeedback
          incrementFeedback={incrementFeedback}
          options={['good', 'neutral', 'bad']}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
