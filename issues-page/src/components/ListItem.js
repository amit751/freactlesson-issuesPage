import React , {Component} from "react" ;
import Tag from "./Tag.js";
import "../styles/ListItem.css";

export default class ListItem extends Component{
    
    render(){
        return(
           <li className="issue">
               <div className="row">
                    <p className="title">
                    <svg class="octicon octicon-issue-opened open" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>
                    {this.props.text}</p>
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


