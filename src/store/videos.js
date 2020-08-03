import { fetchVideos } from "../services/apiService";

const getChannelIdsFromState = ({ channels }) =>
  channels.map(({ channelId }) => channelId);

export const actionType = {
  APPEND_VIDEOS: "APPEND_VIDEOS",
  SET_NEXT_VIDEO: "SET_NEXT_VIDEO",
  POPULATE_VIDEOS: "POPULATE_VIDEOS",
};

export const actions = {
  fetchVideos: () => async (dispatch, getState) => {
    const channelIds = getChannelIdsFromState(getState());
    try {
      const videos = await fetchVideos(channelIds, dispatch);
      dispatch({ type: actionType.APPEND_VIDEOS, data: videos });
    } catch {}
  },

  nextVideo: () => (dispatch, getState) => {
    const { videos } = getState();
    if (videos.length < 3) {
      dispatch(actions.fetchVideos());
    }
    dispatch({ type: actionType.SET_NEXT_VIDEO });
  },

  refreshVideos: () => async (dispatch, getState) => {
    const channelIds = getChannelIdsFromState(getState());
    try {
      const videos = await fetchVideos(channelIds, dispatch);
      dispatch({ type: actionType.POPULATE_VIDEOS, data: videos });
    } catch {}
  },
};

export default (state = [], action = {}) => {
  switch (action.type) {
    case actionType.APPEND_VIDEOS:
      return state.concat(action.data);
    case actionType.SET_NEXT_VIDEO:
      state.shift();
      return state;
    case actionType.POPULATE_VIDEOS:
      return action.data;
    default:
      return state;
  }
};
