import React from "react";


function TweetPost(props){
    var postStyle = {
        border: "2px solid lightgrey",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white"
        
    }
    var profileImageStyle = {
        width: "50px",
        height: "50px",
        backgroundColor: "grey",
        backgroundImage: "url("+props.image+")",
        backgroundSize: "contain",
        marginTop: "10px",
        marginLeft: "10px",
    }
    var textStyle = {
        width: "300px",
        paddingTop: "10px",
        paddingLeft: "20px",
        overflowWrap: "break-word",
    }
    var nameStyle = {
        fontWeight: "bold",
        marginTop: "5px",
        marginBottom: "5px",
    }
    var contentStyle = {
        width: "100%",
    }
    var likesStyle = {
        borderTop: "1px solid lightgrey",
        marginTop: "10px",
        paddingTop: "10px",
        fontWeight: "bold",
        
    }
    if (props.likes) {
        return (
            <div style={postStyle}>
                <div style={profileImageStyle}></div>
                <div style={textStyle}>
                    <div style={nameStyle}>{props.name}</div>
                    <div>{props.content}</div>
                    <div style={likesStyle}>{props.likes}</div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div style={postStyle}>
                <div style={profileImageStyle}></div>
                <div style={textStyle}>
                    <div style={nameStyle}>{props.name}</div>
                    <div style={contentStyle}>{props.content}</div>
                </div>
            </div>
        );
    }
}


export default TweetPost;
