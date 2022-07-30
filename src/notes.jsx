import React from "react"

function Notes(props){

function deletesimportant(){
  props.deletes(props.id);
}

  return(
    <div>
<li><h1>{props.text}</h1></li>
<li><p>{props.content}</p></li>
<button onClick={deletesimportant}>delete this list</button>

    </div>

  )
}

export default Notes;
