import React from "react";
//import PropTypes from "prop-types";
import TopNav from "./TopNav";
import Profile from "./Profile";
import NewsFeed from "./NewsFeed";

function App(){
  var styles = {
  }
  var layout = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  }
  return (
    <div style={styles}>
      <TopNav />
      <div style={layout}>
        <Profile />
        <NewsFeed />
      </div>

      social-media-clone
    </div>
  );
}

//App.propTypes = {
//};

export default App;
