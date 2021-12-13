import { useContext, useEffect, useState } from "react";
import FeedbackContext from "../context/FeedbackContext";

export default function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);
  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setSelected(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const ratingNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function handleChange(event) {
    setSelected(+event.currentTarget.value);
    select(+event.currentTarget.value);
  }

  const InputItem = ratingNumberArray.map((digit, i) => (
    <li key={i}>
      <input
        type="radio"
        name="rating"
        id={`num${digit}`}
        value={digit}
        onChange={handleChange}
        checked={selected === digit}
      />
      <label htmlFor={`num${digit}`}>{digit}</label>
    </li>
  ));
  return <ul className="rating">{InputItem}</ul>;
}
