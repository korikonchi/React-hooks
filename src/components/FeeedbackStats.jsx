import React from "react";
import PropTypes from "prop-types";
export function FeeedbackStats({ feedback }) {
  let average =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/m, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}
FeeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};
export default FeeedbackStats;