import React from "react";

function Note(props){
    const [notes, setNotes] = React.useState([]);
   const deleteNote = () => {
        console.log(typeof(props.notes));
        var n = props.notes.filter(element => element.content!=props.content);
        props.setNotes(n);
          
    }
    
    return (<div className="note">  
    <h1> {props.title} </h1>
      <p>
          {props.content}
      </p>
      <button onClick={() => deleteNote()}>Delete Note</button>

      </div>);
}

export default Note;