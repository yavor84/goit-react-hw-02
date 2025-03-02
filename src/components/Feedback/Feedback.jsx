import styles from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul className={styles.feedbackList}>
        <li className={styles.feedbackItem}>
          <h2>
            Good: <span className={styles.feedbackValue}>{feedback.good}</span>
          </h2>
        </li>
        <li className={styles.feedbackItem}>
          <h2>
            Neutral:{' '}
            <span className={styles.feedbackValue}>{feedback.neutral}</span>
          </h2>
        </li>
        <li className={styles.feedbackItem}>
          <h2>
            Bad: <span className={styles.feedbackValue}>{feedback.bad}</span>
          </h2>
        </li>
        <li className={styles.feedbackItem}>
          <h2>
            Total: <span className={styles.feedbackValue}>{totalFeedback}</span>
          </h2>
        </li>
        <li className={styles.feedbackItem}>
          {totalFeedback > 0 && (
            <h2>
              Positive:{' '}
              <span className={styles.feedbackValue}>{positiveFeedback}%</span>
            </h2>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
