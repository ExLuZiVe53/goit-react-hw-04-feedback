import { useState } from 'react';

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import styles from './App.module.css';

export const App = () => {
  // Робимо деструкторизацію з масиву тобто:
  // good(наш key) - елемент
  // setGood(наш value) - функція для зміни state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        throw new Error('Invalid option');
    }
  };

  const Total = good + neutral + bad;
  const options = ['good', 'neutral', 'bad'];

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / Total) * 100);
  };

  const GoodPercentFeedback = countPositiveFeedbackPercentage();

  return (
    <div className={styles.Wrapper}>
      <h2>Please leave feedback</h2>
      <FeedbackOptions options={options} handleClick={handleClick} />
      <h2>Statistics</h2>
      {Total ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={Total}
          positivePercentage={GoodPercentFeedback}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
