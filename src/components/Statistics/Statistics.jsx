// import PropTypes from 'prop-types';

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
        // height: '100vh',
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
    </div>
  );
};

// Statistics.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.number.isRequired,
// };
