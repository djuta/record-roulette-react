import Channel from "../models/Channel";
import Video from "../models/Video";
import fetchService from "./fetchService";

const baseUrl = "https://api.recordrouletteapp.com/v1";

export const fetchVideos = async (channelIds, dispatch) => {
  const videos = await fetchService(
    `${baseUrl}/videos/random?channelIds=${channelIds.join(",")}`,
    dispatch
  );
  return videos.map((video) => new Video(video));
};

export const fetchChannel = async (channelUrl, dispatch) => {
  const channel = await fetchService(
    `${baseUrl}/channels?channelUrl=${channelUrl}`,
    dispatch
  );
  return new Channel(channel);
};
