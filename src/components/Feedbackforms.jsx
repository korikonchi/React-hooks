import { useState } from "react";
import Card from "./shared/Card";
import { Button } from "./shared/Button";
export function Feedbackforms() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
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
  return (
    <Card>
      <form>
        <h2>How would you rate your services with us</h2>
        {/* @todo - rating select component */}
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
