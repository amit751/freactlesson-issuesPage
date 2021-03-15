import logo from './logo.svg';
import './App.css';
import ListItem from "./components/ListItem.js";

const seriallNum = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10];
const allissues = seriallNum.map((item ,index)=>{
  return <ListItem key={index} serial={item} />
});
        

function App() {
  return (
    <>
    <div id="issue-div-header">
        <div className="issue-div-datas">
          <span className="issue-div-data">492 open</span>
          <span className="issue-div-data">5443 closed</span>
        </div>
        <div className="issue-div-links">
          <span className="issue-div-link">Author</span>
          <span className="issue-div-link">Tags</span>
          <span className="issue-div-link">Project</span>
          <span className="issue-div-link">Milestones</span>
          <span className="issue-div-link">Assignee</span>
          <span className="issue-div-link">Sort</span>
        </div>
      </div>

    <ul>
     {allissues}
    </ul>
    </>
  );
}

export default App;
