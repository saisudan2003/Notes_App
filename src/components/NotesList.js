// import React from 'react'
// import Note from './Note'
// import AddNote from './AddNote';

// const NotesList = ({notes,handleAddNote,handleDeleteNote}) => {
//   return (
//     <div className='notes-list'>
//         {notes.map((note)=>(
//             <Note key={note.id} id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
//         ))}
//         <AddNote handleAddNote={handleAddNote} />
//     </div>
//   )
// };

// export default NotesList

import React from 'react';
import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
  notes,
  handleDeleteNote,
  handleAddNote,
  handleEditNote,
  selectedNote,
  handleUpdateNote,
}) => {
  return (
    <div className='notes-list'>
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
          handleEditNote={handleEditNote}
          selectedNote={selectedNote}
          handleUpdateNote={handleUpdateNote}
        />
        
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
