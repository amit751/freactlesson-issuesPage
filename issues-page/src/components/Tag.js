import React ,{Component} from "react";

const Tag= function (props){
    
    return(
     <span className = {`tag ${props.color}`}>{props.text}</span>   
    );
}

export default Tag
