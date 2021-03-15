import React ,{Component} from "react";
import "../styles/Tag.css"

const Tag= function (props){
    
    return(
     <span className = {`tag ${props.color}`}>{props.text}</span>   
    );
}

export default Tag
