import React from "react";
import PropTypes from "prop-types";

export function InputRating({ label, ...rest }) {
  return (
    <li>
      <input
        type="radio"
        id={`num${label}`}
        name={`rating ${label}`}
        {...rest}
      />
      <label htmlFor={`num${label}`}>{label}</label>
    </li>
  );
}

InputRating.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default InputRating;
