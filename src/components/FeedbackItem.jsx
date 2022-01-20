import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import { Card } from "./shared/Card";
function FeedbackItem({ rating, text, handleDelete, id }) {
  console.log(id); //is a function in props

  const handleClick = () => {
    handleDelete(id);
  };

  return (
    <Card reverse>
      <div className="num-display">{rating}</div>
      <button onClick={handleClick} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}
FeedbackItem.propTypes = {
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default FeedbackItem;
