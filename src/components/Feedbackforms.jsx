import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import { Button } from "./shared/Button";
import { RatingSelect } from "./RatingSelect";
import FeedbackUseContext from "../context/FeedbackContext";
export function Feedbackforms() {
  const { addFeedback, feedbackEdit, updateFeedback, setFeedbackEdit } =
    useContext(FeedbackUseContext);
  useEffect(() => {
    //in any change on feedbackedit
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]); //[[empy only in mountain][filled in every changed at state]
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleText = (e) => {
    if (/[^\w!.,\s]/.test(e.target.value)) return;

    if (text.replaceAll(" ", "").length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 character");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.replaceAll(" ", "").length > 9 && rating > 0) {
      const newFeedback = {
        text: text,
        rating: rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText("");
      setRating(0);
      setFeedbackEdit({ edit: false });
    }
  };

  const handleSelect = (n) => setRating(n); //this handle update state rating with the onchange of ratings select

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your services with us</h2>
        <RatingSelect handleSelect={handleSelect} range={10} rating={rating} />
        <div className="input-group">
          <input
            onChange={handleText}
            type="text"
            placeholder="write a review"
            value={text}
          />
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>
            send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default Feedbackforms;
