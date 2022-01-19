import React from "react";
import PropTypes from "prop-types";
export function Card({ children, reverse }) {
  return <div className={`card ${reverse && "reverse"}`}> {children}</div>;
}
Card.defaultProps = {
  reverse: false,
};
Card.propType = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
export default Card;
