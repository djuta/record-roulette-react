import React from "react";
import { useSelector } from "react-redux";
import BadgeCard from "../../components/BadgeCard";
import "./styles.scss";

const UpNextVideoContainer = () => {
  const videos = useSelector(({ videos }) => videos);
  return (
    <section className="up-next-video-container">
      {videos.length > 0 && <h3>Up Next</h3>}
      <ul className="up-next-video-container__playlist">
        {videos.map(({ videoId, image, title }) => (
          <li key={videoId}>
            <BadgeCard image={image} title={title} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UpNextVideoContainer;
