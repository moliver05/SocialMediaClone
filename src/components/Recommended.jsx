import React from "react";
import RecommendedPerson from "./RecommendedPerson";
var image = require("../img/humanIcon.png");


function Recommended(){
  var styles = {
      border: "1px solid lightgray",
      marginLeft: "25px",
      marginTop: "15px",
      width: "300px",
      height: "300px",
      paddingLeft: "20px",
      paddingTop: "10px"
  }


   
  
  return (
    <div style={styles}>
        Lorem ipsums
        <RecommendedPerson image={image}/>
        <RecommendedPerson image={image}/>
        <RecommendedPerson image={image}/>
      </div>
  );
}



export default Recommended;
