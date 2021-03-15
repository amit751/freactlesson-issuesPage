import React , {Component} from "react" ;
import Tag from "./Tag.js";
import "../styles/ListItem.css";

export default class ListItem extends Component{
    
    render(){
        return(
           <li className="issue">
               <div className="row">
                    <p className="title">{this.props.text}</p>
                    <span className="tags">
                        {this.props.tags.map((tag , index)=>{
                            return <Tag color={tag.color} text={tag.text} key={"#"+this.key+index}/>
                        })}
                    </span>
                    <span className="comments">{this.props.comments}</span> 
                </div>
                <p className="details">#{this.props.serial} opened {this.props.time} ago by {this.props.user}</p>
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


