import React from "react";
import { useSelector } from "react-redux";
import GlobalMessage from "../../components/GlobalMessage";
import "./styles.scss";

const GlobalMessageContainer = () => {
  const currentMessage = useSelector(({ globalMessage }) => globalMessage);
  if (!currentMessage) {
    return null;
  }
  const { type, message } = currentMessage;
  return <GlobalMessage type={type} message={message} />;
};

export default GlobalMessageContainer;
