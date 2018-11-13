import React from "react";


function RecommendedPerson (props){
    var styles = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingTop: 13
    }
  var recommendImageStyles = {
    width: "70px",
    height: "70px",
    backgroundColor: "grey",
    backgroundImage: "url("+props.image+")",
    backgroundRepeat: "no repeat",
    backgroundSize: "contain",
    marginTop: "10px",
    marginLeft: "10px",
    
    
    
  }
  var buttonStyles = {
      backgroundColor: "#3B5998",
      color: "white",
      marginTop: "15px",
      padding: "10px",
      textAlign: "center",
      width: "100px"
      

  }
  
  return (
    <div style={styles}>
        <div style={recommendImageStyles}>
        </div>
        <div>
            <div>Person Name</div>
            <button style={buttonStyles}type="button">Button</button>
        </div>
    </div>

  );
}



export default RecommendedPerson;
