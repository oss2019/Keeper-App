import React from "react";

function Note(props){
    const [notes, setNotes] = React.useState([]);
    const deleteNote = () => {
        props.setNotes(props.notes.filter(note => note.title!==props.title))
    }

    return (<div className="note">  
    <h1> {props.title} </h1>
      <p>
          {props.content}
      </p>
      <button onClick={deleteNote}>Delete Note</button>

      </div>);
}

export default Note;
