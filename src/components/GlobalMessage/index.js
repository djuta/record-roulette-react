import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const label = {
  error: "Error",
};

const GlobalMessage = ({ message, type }) => (
  <div className={`global-message global-message--${type}`}>
    <h4>{label[type]}</h4>
    <p>{message}</p>
  </div>
);

GlobalMessage.propTypes = {
  type: PropTypes.oneOf(Object.keys(label)),
  message: PropTypes.string,
};

export default GlobalMessage;
