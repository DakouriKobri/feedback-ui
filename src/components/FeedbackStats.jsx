import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  // Calculate average ratings
  let totalRating = feedback.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.rating;
  }, 0);

  let average = totalRating / feedback.length;
  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}