import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
//import notes_data from '../notes';
import CreateArea from './Create_area';

function App() {
  const [notes, setNotes] = useState([]);
  function deleteNote(id)
  {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  function addNote(newNote)
  {
    setNotes((prevValue) => {
      return [...prevValue,newNote];
    });
  }
  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}
      />
      {notes.map((notesitem,index)=>
        (<Note
        key={index}
        id={index}
          title={notesitem.title}
        content={notesitem.content}
        onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
