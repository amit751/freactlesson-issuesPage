import React , {Component} from "react" ;
import Tag from "./Tag.js";

export default class ListItem extends Component{
    
    render(){
        return(
           <li className="issue">
               <p className="title">{this.props.text}</p>
               <p className="details">#{this.props.serial} opened {this.props.time} ago by {this.props.user}</p>
               <div className="tags">
                {this.props.tags.map((tag , index)=>{
                  return <Tag color={tag.color} text={tag.text} key={"#"+this.key+index}/>
                })}
               </div>
               <span className="comments">{this.props.comments}</span> 
               
           </li> 
        );

    }
}

ListItem.defaultProps = {
    text: "isshue this and tath......................banana" ,
    user: "shalom" , 
    comments: Math.floor(Math.random()*30) ,
    time: "2 DAYS",
    tags:[{text:"very good" , color: "red"},{text:"needs triage" , color:"blue"}]

}


