import PropTypes from "prop-types";
import React from "react";
import FeedbackItem from "../components/FeedbackItem";
export function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>no feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map(({ ...e }, i) => (
        <FeedbackItem key={i} {...e} />
      ))}
    </div>
  );
}
FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
export default FeedbackList;
