import React, { useState } from "react";
import { useDispatch } from "react-redux";
import IconButton from "../../components/IconButton";
import { actions } from "../../store/channels";
import "./styles.scss";

const AddChannelContainer = () => {
  const dispatch = useDispatch();

  const [buttonState] = useState({
    text: "Add channel",
    icon: "/images/plus.svg",
  });

  const [channelUrl, setChannelUrl] = useState("");

  const onChange = (e) => {
    const { value } = e.target;
    setChannelUrl(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.addChannel(channelUrl));
  };

  return (
    <section className="add-channel-container">
      <h2>Add a Channel</h2>
      <form className="add-channel-container__input" onSubmit={onSubmit}>
        <input
          required
          type="url"
          value={channelUrl}
          onChange={onChange}
          placeholder="Enter a YouTube Channel URL..."
          pattern="http(s?)(:\/\/)((www.)?)(([^.]+)\.)?(youtube.com)\/(user|channel)\/([a-zA-z0-9\-_]+)?"
        />
        <IconButton
          type="submit"
          text={buttonState.text}
          icon={buttonState.icon}
        />
      </form>
    </section>
  );
};

export default AddChannelContainer;
