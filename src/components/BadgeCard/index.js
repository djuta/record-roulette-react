import React from "react";
import PropTypes from "prop-types";
import IconButton from "../IconButton";
import { createBackgroundImageStyle } from "../../utils/styleUtils";
import "./styles.scss";

const BadgeCard = ({
  image,
  title,
  onButtonClick,
  buttonIcon,
  buttonText,
  buttonType,
}) => (
  <div className="badge-card">
    {image && (
      <div
        className="badge-card__image"
        style={createBackgroundImageStyle(image)}
      ></div>
    )}
    <div className="badge-card__title">{title}</div>
    {onButtonClick && (
      <IconButton
        type={buttonType}
        icon={buttonIcon}
        text={buttonText}
        onClick={onButtonClick}
      />
    )}
  </div>
);

BadgeCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  onButtonClick: PropTypes.func,
  buttonIcon: PropTypes.string,
  buttonText: PropTypes.string,
  buttonType: PropTypes.string,
};

export default BadgeCard;
