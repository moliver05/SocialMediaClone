import React from "react";
var humanIcon = require("../img/humanIcon.png");

function Profile(){
  var topStyles = {
    position: "relative",
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
    position: "fixed",
    top: "auto",
    left: "auto",
    marginTop: "-50px",
    marginLeft: "14px",
    borderRadius: "20px",
  }

  var bottomStyles = {
    border: "2px solid lightgray",
    width: "300px",
    height: "100px",
    zIndex: "1",
    position: "relative",
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
  var profileTextStyles = {
      width: "260px",
      height: "300px",
      padding: "20px",
      border: "2px solid lightgray",
      marginTop: "20px",
      lineHeight: "23px",
  }
  return (
    <div>
       <div style={topStyles}></div>
       <div style={pictureStyles}></div>
       <div style={bottomStyles}>
            <div style={nameStyles}>Kellie A. Corrigan</div>
            <div style={linkStyles}><span>TWEETS</span> <span>FOLLOWING</span> <span>FOLLOWERS</span></div>
        </div>
        <div style={profileTextStyles}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </div>
    </div>
    
  );
}


export default Profile;
