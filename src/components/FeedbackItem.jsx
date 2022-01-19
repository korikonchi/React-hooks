import PropTypes from "prop-types";
import { Card } from "./shared/Card";
function FeedbackItem({ rating, text }) {
  return (
    <Card reverse>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </Card>
  );
}
FeedbackItem.propTypes = {
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
export default FeedbackItem;
