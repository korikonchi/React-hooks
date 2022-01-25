import { motion, AnimatePresence } from "framer-motion";
// import PropTypes from "prop-types";
import React from "react";
import FeedbackItem from "../components/FeedbackItem";
import { useContext } from "react";
import FeedbackUseContext from "../context/FeedbackContext";
//
export function FeedbackList() {
  const { feedback } = useContext(FeedbackUseContext);
  if (!feedback || feedback.length === 0) {
    return <p>no feedback yet</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item, i) => (
          <motion.div
            key={i + 1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={i + 1}
              {...item} //pass all element as arguments
              // rating={e.rating}
              // id={e.id}
              // text={e.text}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
  // return (
  //   <div className="feedback-list">
  //     {feedback.map(({ e }, i) => (
  //       <FeedbackItem key={i + 1} {...e} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // );
}
// FeedbackList.displayName = "FeedbackList";
// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };
export default FeedbackList;
