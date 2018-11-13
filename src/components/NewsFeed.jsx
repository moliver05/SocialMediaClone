import React from "react";
import TweetPost from "./TweetPost";
var image = require("../img/humanIcon.png");

function NewsFeed(){
  var FeedStyle = {
        width: "400px",
        height: "650px",
        border: "2px solid lightgray",
        marginTop: "15px",
        marginLeft: "25px",
        lineHeight: "23px",
        zIndex: "1",
        backgroundColor: "lightblue"
    }
    var InputStyle = {
        width: "300px",
        height: "35px",
        marginLeft: "80px",
        border: "1px solid #38A1F3",
        marginTop: "20px",
        marginBottom: "20px",
    }

    var BlockStyle = {
        padding: "7px",
        backgroundColor: "#800020",
        zIndex: "2",
        position: "fixed",
        top: "auto",
        left: "auto",
        marginTop: "20px",
        marginLeft: "25px"
    }

  return (
    <div>
        <div style={FeedStyle}>
            <span style={BlockStyle}>Me</span>
            <input style={InputStyle} type="text" placeholder=" What's Happening?" />
            <TweetPost image={image} name="Lorem Ipsum" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <TweetPost image={image} name="Lorem Ipsum2" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." likes="Lorem Ipsum" />
            <TweetPost image={image} name="Lorem Ipsum3" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </div>

    </div>

  );
}


export default NewsFeed;
