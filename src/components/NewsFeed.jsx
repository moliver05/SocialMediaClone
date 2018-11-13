import React from "react";


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
        marginTop: "20px"
    }

    var BlockStyle = {
        padding: "7px",
        backgroundColor: "#800020",
        zIndex: "2",
        position: "absolute",
        top: "130px",
        left: "365px",
    }

  return (
    <div style={FeedStyle}>
    <span style={BlockStyle}>Me</span>
    <input style={InputStyle} type="text" placeholder=" What's Happening?" />
    </div>
  );
}


export default NewsFeed;
