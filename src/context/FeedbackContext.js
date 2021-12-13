import { createContext, useState } from "react";
import { feedbackData } from "../data/feedbackData";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [feedback, setFeedback] = useState(feedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  // Add feedback
  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  }

  // Delete feedback
  function deleteFeeback(id) {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  // Set feedback for update
  function editFeedback(item) {
    setFeedbackEdit({ item, edit: true });
  }

  // Update feedback
  function updateFeedback(id, itemUpdates) {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...itemUpdates } : item
      )
    );
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeeback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;
