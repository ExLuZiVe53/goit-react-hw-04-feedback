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

  const onLeaveFeedbackGood = good => {
    setGood(good + 1);
  };

  const onLeaveFeedbackNeutral = neutral => {
    setNeutral(neutral + 1);
  };

  const onLeaveFeedbackBad = bad => {
    setBad(bad + 1);
  };

  const countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  return (
    <div className={styles.Wrapper}>
      <h2>Please leave feedback</h2>
      <FeedbackOptions
        options={Object.keys(good, neutral, bad)}
        onLeaveFeedback={onLeaveFeedback}
      />
      <h2>Statistics</h2>
      {Total ? (
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={Total}
          positivePercentage={GoodPercentFeedback}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = options => {
//     this.setState(prevState => {
//       return { [options]: prevState[options] + 1 };
//     });
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce(
//       (accumulator, currentValue) => accumulator + currentValue,
//       0
//     );
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     const Total = this.countTotalFeedback();
//     const GoodPercentFeedback = this.countPositiveFeedbackPercentage();

//     return (
{
  /* <div className={styles.Wrapper}>
          <h2>Please leave feedback</h2>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          <h2>Statistics</h2>
          {Total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={Total}
              positivePercentage={GoodPercentFeedback}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
      </div>; */
}
//     );
//   }
// }

// export default App;
