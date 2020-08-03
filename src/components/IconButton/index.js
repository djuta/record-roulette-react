import React from "react";
import PropTypes from "prop-types";
import { createBackgroundImageStyle } from "../../utils/styleUtils";
import "./styles.scss";

const IconButton = ({ type, icon, text, onClick }) => (
  <button
    className="icon-button"
    onClick={onClick}
    type={type}
    style={createBackgroundImageStyle(icon)}
  >
    {text}
  </button>
);

IconButton.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default IconButton;
