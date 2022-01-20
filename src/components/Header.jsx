import react from "react";
import PropTypes from "prop-types";

function Header({ text, bgcolor, textColor }) {
  const styleHEader = { backgroundColor: bgcolor, color: textColor };
  return (
    <header style={styleHEader}>
      <div className="container">
        <h2>{text} </h2>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: "Feedback UI",
  bgcolor: "#1A3C61",

  textColor: "#F20746",
};

export default Header;
