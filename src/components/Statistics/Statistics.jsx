import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
      className="wrapper"
    >
      <p className="feed-back">
        Good:<span className="number-feedback">{good}</span>
      </p>
      <p className="feed-back">
        Neutral:<span className="number-feedback">{neutral}</span>
      </p>
      <p className="feed-back">
        Bad:<span className="number-feedback">{bad}</span>
      </p>
      <p className="feed-back-total">
        Total:<span className="number-total">{total}</span>
      </p>
      <p className="feed-back-positive">
        Positive Feedback:
        <span className="percent-positive">{positivePercentage}%</span>
      </p>
      {/* <h2 className="title-feedback">Please leave feedback</h2>
      <button onClick={this.onLeaveFeedback} type="button" className="btn-good">
        Good
      </button>
      <button
        onClick={this.onLeaveFeedback}
        type="button"
        className="btn-neutral"
      >
        Neutral
      </button>
      <button onClick={this.onLeaveFeedback} type="button" className="btn-bad">
        Bad
      </button>
      <h2 className="title-statistics">Statistics</h2>
      <p className="good">
        Good:
        <span className="number-good">{this.state.good}</span>
      </p>
      <p className="neutral">
        Neutral:
        <span className="number-neutral">{this.state.neutral}</span>
      </p>
      <p className="bad">
        Bad:
        <span className="number-bad">{this.state.bad}</span>
      </p>
      <p className="total">
        Total:<span className="total-number">{Total}</span>
      </p>
      <p className="positive-feedback">
        Positive feedback:
        <span className="positive-feedback-persent">
          {GoodPercentFeedback}%
        </span>
      </p> */}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
