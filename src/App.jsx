import { useState, useEffect } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

const App = () => {
  // Ініціалізація стану feedback
  const [feedback, setFeedback] = useState(() => {
    try {
      const savedFeedbackData = localStorage.getItem('feedbackData');
      if (savedFeedbackData !== null) {
        return JSON.parse(savedFeedbackData);
      }
    } catch (error) {
      console.log(error);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  // Оновлення стану feedback
  const updateFeedback = feedbackType => {
    setFeedback(feedback => ({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    }));
  };

  // Запис до локального сховища
  useEffect(() => {
    try {
      localStorage.setItem('feedbackData', JSON.stringify(feedback));
    } catch (error) {
      console.log(error);
    }
  }, [feedback]);

  //Обнулення стану feedback
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  //Створення лічильників
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  // Рендеринг
  return (
    <div className="appContainer">
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
