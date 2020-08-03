import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import channels from "./channels";
import videos from "./videos";
import globalMessage from "./globalMessage";

const rootReducer = combineReducers({
  channels,
  videos,
  globalMessage,
});

export default createStore(rootReducer, {}, applyMiddleware(thunk));
