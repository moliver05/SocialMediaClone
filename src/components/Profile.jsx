import React from "react";
var humanIcon = require("../img/humanIcon.png");

function Profile(){
  var topStyles = {
    border: "2px solid lightgray",
    width: "300px",
    marginTop: "15px",
    height: "150px",
    backgroundColor: "#38A1F3",
    zIndex: "1",
  }

  var pictureStyles = {
    zIndex: "2",
    width: "100px",
    height: "100px",
    backgroundColor: "#38A1F3",
    backgroundImage: "url("+humanIcon+")",
    backgroundSize: "contain",
    border: "2px solid white",
    position: "absolute",
    top: "200px",
    left: "20px",
  }

  var bottomStyles = {
    border: "2px solid lightgray",
    width: "300px",
    height: "100px",
    zIndex: "1",
  }
  var nameStyles = {
      textAlign: "right",
      marginRight: "20px",
      marginTop: "15px",
      marginBottom: "15px",
      fontSize: "20px",
      fontWeight: "bold",
      
  }
  var linkStyles = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      fontSize: '13px',
  }
  return (
    <div>
       <div style={topStyles}></div>
       <div style={pictureStyles}></div>
       <div style={bottomStyles}>
            <div style={nameStyles}>Kellie A. Corrigan</div>
            <div style={linkStyles}><span>TWEETS</span> <span>FOLLOWING</span> <span>FOLLOWERS</span></div>
        </div>
    </div>
    
  );
}


export default Profile;
