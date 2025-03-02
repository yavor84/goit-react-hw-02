const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul>
        <li>
          <h2>Good: {feedback.good}</h2>
        </li>
        <li>
          <h2>Neutral: {feedback.neutral}</h2>
        </li>
        <li>
          <h2>Bad: {feedback.bad}</h2>
        </li>
        <li>
          <h2>Total: {totalFeedback}</h2>
        </li>
        <li>{totalFeedback > 0 && <h2>Positive: {positiveFeedback}%</h2>}</li>
      </ul>
    </div>
  );
};

export default Feedback;
