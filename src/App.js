import React from 'react';
import NotesList from './components/NotesList';
import { useState, useEffect  } from 'react';
import { nanoid } from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';


const App = () => {
  const [notes,setNotes]=useState([
    {
      id: nanoid(),
      text: "this is my first note",
      date: '12/12/12',
    },
    {
      id: nanoid(),
      text: "this is my second note",
      date: '12/12/12',
    },
    {
      id: nanoid(),
      text: "this is my third note",
      date: '12/12/12',
    },
]);
  const [searchText,setSearchText] = useState('');
  const [darkMode,setDarkMode] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes));
  },[notes]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if(savedNotes){
      setNotes(savedNotes);
    }
  },[]);

  const handleEditNote = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);
    setSelectedNote(noteToEdit);
  };

  const handleUpdateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
    setSelectedNote(null); // Reset selected note after update
  };
  
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes,newNote];
    setNotes(newNotes);
  };

  const deleteNote= (id) =>{
    const newNotes2 = notes.filter((note) => note.id!==id);
    setNotes(newNotes2);
  }


  // return (
  // <div className={`${darkMode && 'dark-mode'}`}>
  //   <div className='container'>
  //     <Header handleToggleDarkMode={setDarkMode}/>
  //     <Search handleSearchNote={setSearchText}/>
  //     <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
  //   </div>

  // </div>
  // );

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleEditNote={handleEditNote}
          selectedNote={selectedNote}
          handleUpdateNote={handleUpdateNote}
        />
      </div>
    </div>
  );
};


   
export default App;
