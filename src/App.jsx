import React,{useState} from "react";
import Notes from "./notes";
import "./styles.css";


function App(){

const [anjita, setAnjita] = useState({
  title:"",
  content:""
});

const [keshav, setKeshav]=useState([]);




function changeHandler(event){
  const {name, value}=event.target;

  setAnjita(prevValue => {
    return{
      ...prevValue,
      [name]:value
    }
  });

}

function clickHandler(event){
  setKeshav(prevValue=>{
    return[...prevValue,anjita]
  });
  event.preventDefault();
  setAnjita("");
}

function deleteItem(id){
  setKeshav(prevView =>{
    return prevView.filter((todolist,index)=>{
      return index !==id
    })
  })
}


  return(
    <div className="container">

    <h1>bishal keeper app</h1>
<form className="hello">
    <input
    name="title"
    type="text"
     placeholder=" please put title on it"
     value={anjita.title}
     onChange={changeHandler}
      required/>

    <textarea
    name="content"
    type="text"
     placeholder="write something interesting"
     value={anjita.content}
     onChange={changeHandler}
     required></textarea>

    <button

    onClick={clickHandler}
    >Add</button></form>

<ul>
{keshav.map((todolist,index)=>{
  return (
    <Notes
    text={todolist.title}
    content={todolist.content}
    deletes={deleteItem}
    key={index}
    id={index}
    />)})
}


</ul>
    </div>
  )
}




export default App;
