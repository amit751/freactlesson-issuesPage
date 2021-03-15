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
        <svg class=" head" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>

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
