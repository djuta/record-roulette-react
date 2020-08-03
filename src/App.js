import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/GlobalHeader";

import "./App.scss";
import AddChannelContainer from "./containers/AddChannelContainer";
import ChannelContainer from "./containers/ChannelContainer";
import UpNextVideoContainer from "./containers/UpNextVideoContainer";
import VideoContainer from "./containers/VideoContainer";
import GlobalMessageContainer from "./containers/GlobalMessageContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App" id="app">
        <Header />
        <div className="content-wrapper">
          <div className="content-wrapper__channels">
            <AddChannelContainer />
            <ChannelContainer />
          </div>
          <div className="content-wrapper__main">
            <VideoContainer />
            <UpNextVideoContainer />
          </div>
          <GlobalMessageContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
