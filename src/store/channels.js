import { fetchChannel } from "../services/apiService";

export const actionType = {
  APPEND_CHANNEL: "APPEND_CHANNEL",
  REMOVE_CHANNEL: "REMOVE_CHANNEL",
};

export const actions = {
  addChannel: (channelUrl) => async (dispatch, getState) => {
    try {
      const channel = await fetchChannel(channelUrl, dispatch);
      dispatch({ type: actionType.APPEND_CHANNEL, data: channel });
    } catch {}
  },

  removeChannel: (channel) => ({
    type: actionType.REMOVE_CHANNEL,
    data: channel,
  }),
};

export default (state = [], action = {}) => {
  switch (action.type) {
    case actionType.APPEND_CHANNEL:
      const channels = [...state];
      channels.push(action.data);
      return channels;
    case actionType.REMOVE_CHANNEL:
      const index = state.indexOf((c) => c.channelId === action.data.channelId);
      return state.slice(index, 1);
    default:
      return state;
  }
};
