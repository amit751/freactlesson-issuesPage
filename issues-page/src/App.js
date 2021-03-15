import logo from './logo.svg';
import './App.css';
import ListItem from "./components/ListItem.js";

const seriallNum = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10];
const allissues = seriallNum.map((item ,index)=>{
  return <ListItem key={index} serial={item} />
});
        

function App() {
  return (
    <ul>
     {allissues}
    </ul>
  );
}

export default App;
