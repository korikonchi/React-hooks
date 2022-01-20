import React from "react";
import PropTypes from "prop-types";
export function Card({ children, reverse }) {
  return <div className={`card ${reverse && "reverse"}`}> {children}</div>;
}

Card.displayName = "Card";
Card.propType = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool.isRequired,
};
Card.defaultProps = {
  reverse: false,
};
export default Card;
