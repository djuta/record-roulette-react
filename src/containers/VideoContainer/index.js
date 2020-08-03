import React, { useState } from "react";
import { useSelector } from "react-redux";
import YouTube from "react-youtube";
import Description from "../../components/Description";
import "./styles.scss";

const VideoContainer = () => {
  const currentVideo = useSelector(({ videos }) => videos[0]);
  const [autoplay, setAutoplay] = useState(false);
  const toggleAutoplay = () => setAutoplay(!autoplay);

  const youtubeOptions = {
    playerVars: {
      autoplay: autoplay ? 1 : 0,
    },
  };
  return (
    <section className="video-container">
      <div className="video-container__title">
        {!currentVideo && <h2>Getting Started</h2>}
        {currentVideo && <h2>{currentVideo.title}</h2>}
        <div className="video-container__title__autoplay">
          <label for="autoplay">Autoplay</label>
          <input
            id="autoplay"
            value={autoplay}
            onChange={toggleAutoplay}
            type="checkbox"
          />
        </div>
      </div>
      <div className="video-container__video">
        {currentVideo && (
          <YouTube videoId={currentVideo.videoId} opts={youtubeOptions} />
        )}
        {!currentVideo && (
          <div className="video-container__video__instructions">
            <Description />
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoContainer;
