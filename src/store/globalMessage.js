const CLEAR_TIMEOUT = 5000;

export const actionType = {
  SET_CURRENT_MESSAGE: "SET_CURRENT_MESSAGE",
  CLEAR_CURRENT_MESSAGE: "CLEAR_CURRENT_MESSAGE",
};

export const actions = {
  setCurrentMessage: (message) => async (dispatch, getState) => {
    dispatch({ type: actionType.SET_CURRENT_MESSAGE, data: message });
    setTimeout(
      () => dispatch({ type: actionType.CLEAR_CURRENT_MESSAGE }),
      CLEAR_TIMEOUT
    );
  },
};

export default (state = null, action = {}) => {
  switch (action.type) {
    case actionType.SET_CURRENT_MESSAGE:
      return action.data;
    case actionType.CLEAR_CURRENT_MESSAGE:
      return null;
    default:
      return state;
  }
};
