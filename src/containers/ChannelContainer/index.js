import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import BadgeCard from "../../components/BadgeCard";
import { actions as videosActions } from "../../store/videos";
import { actions as channelsActions } from "../../store/channels";
import BigButton from "../../components/BigButton";

const ChannelContainer = () => {
  const dispatch = useDispatch();
  const channels = useSelector((state) => {
    const channels = [...state.channels];
    const backfillNumber = 5 - channels.length;
    for (let i = 0; i < backfillNumber; i += 1) {
      channels.push({ channelId: `channel${i}` });
    }
    return channels;
  });
  const [isLoading, setIsLoading] = useState(false);
  const removeChannel = (channelId) => {
    dispatch(channelsActions.removeChannel(channelId));
  };

  const nextVideo = () => dispatch(videosActions.nextVideo());

  const getVideos = async () => {
    setIsLoading(true);
    await dispatch(videosActions.fetchVideos());
    setIsLoading(false);
  };

  return (
    <section className="channel-container">
      <h2>Channels</h2>
      <ul className="channel-container__selected">
        {channels.map(({ channelId, title, image }) => (
          <li key={channelId}>
            <BadgeCard
              title={title}
              image={image}
              onButtonClick={title && (() => removeChannel(channelId))}
              buttonText={`Remove ${title}`}
              buttonIcon="/images/minus.svg"
            />
          </li>
        ))}
      </ul>
      <BigButton
        text={isLoading ? "Loading..." : "Get Videos"}
        onClick={getVideos}
      />
      <BigButton text="Next Video ❯" onClick={nextVideo} />
    </section>
  );
};

export default ChannelContainer;
