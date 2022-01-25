import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import { Card } from "./shared/Card";
import FeedbackUseContext from "../context/FeedbackContext";
import { useContext } from "react";
function FeedbackItem(item) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackUseContext);
  const handleEdit = () => {
    editFeedback(item);
  };
  const handleDelete = () => {
    deleteFeedback(item.id);
  };

  return (
    <Card reverse>
      <div className="num-display">{item.rating}</div>
      <button onClick={handleDelete} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={handleEdit} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
FeedbackItem.propTypes = {
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default FeedbackItem;
