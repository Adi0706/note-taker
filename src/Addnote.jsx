import { useState } from "react";
import {IoIosAdd} from 'react-icons/io'

const AddNote = ({handleAddNote}) =>
{

const [noteText,setNoteText] = useState('')

const handleChange = (event) =>{
     setNoteText(event.target.value) ; 
}

    function handleSaveClick() {
        if(noteText.trim().length >0 ) 
        {
        handleAddNote(noteText);
        setNoteText('')
        }

    }

    return(
        <div className="note new">
            <textarea rows="8" cols="10" placeholder="TITLE"
            value={noteText}
            onChange={handleChange}
            >
            </textarea>
            <textarea rows="8" cols="10" placeholder="DESCRIPTION"
            value={noteText}
            onChange={handleChange}
            >
            </textarea>

            <div className="note-footer">
                <small>200 Remaining</small>
                <button className="sve-btn" onClick={handleSaveClick}><IoIosAdd/></button>
            </div>


        </div>
    ); 

}

export default AddNote ; 