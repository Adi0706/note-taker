import React, { useEffect, useState } from 'react'
import NoteList from './components/NoteList';
import {nanoid} from 'nanoid' ; 
import Search from './components/Search'



const App=()=>{
const[notes,setNotes] = useState([
  {
  id: nanoid() ,
  text:"FIRST NOTE",
  date:"13/6/23"
  },
  {
    id: nanoid() ,
    text:"SECOND NOTE",
    date:"13/6/23"
    },
    {
      id: nanoid() ,
      text:"THIRD NOTE",
      date:"13/6/23"
      }
]);

const [searchText,setsearchText] = useState('') ;

useEffect(()=>{
   const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
   
   if(savedNotes){
    setNotes(savedNotes) ; 
  }
},[])

useEffect(()=> {
  localStorage.setItem('react-notes-app-data',JSON.stringify(notes))

},[notes])

const addNote=(text)=>{
  const date = new Date() ; 
  const newNote = {
    id:nanoid() , 
    text:text,
    date: date.toLocaleDateString(),
  } ; 
  const newNotes = [...notes,newNote] ; 
  setNotes(newNotes) ;
}

const deleteNote=(id)=>{
  const newNotes = notes.filter((note)=>note.id !==id)
  setNotes(newNotes)
}
  return(
       <div className='main-body'>
        <h1>NOTES</h1>
       <Search handleSearchNote={setsearchText}/>
      <NoteList 
      notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote={addNote}
      handleDeleteNote = {deleteNote}
      />
       </div>
  );

}

export default App