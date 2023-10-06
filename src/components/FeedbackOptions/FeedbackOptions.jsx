import React from 'react';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ handleClick, options }) => {
  return (
    <div className={styles.ContainerButtons}>
      {options.map(option => (
        <button
          className={styles.ButtonOption}
          key={option}
          onClick={() => handleClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
