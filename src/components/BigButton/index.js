import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const BigButton = ({ type, style, text, onClick }) => (
  <button
    className={`big-button big-button--${style}`}
    onClick={onClick}
    type={type}
  >
    {text}
  </button>
);

BigButton.propTypes = {
  type: PropTypes.string,
  style: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

BigButton.defaultProps = {
  style: "go",
};

export default BigButton;
