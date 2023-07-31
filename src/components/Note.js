// import React from 'react'
// import {RiEditBoxLine} from 'react-icons/ri'
// import { MdDeleteForever} from 'react-icons/md'

// const Note = ({id,text,date,handleDeleteNote}) => {
//   return (
//     <div className='note'>

//         <div className='note-header'>
//         <span className='txt'>{text}</span> 
//         <div className='edit-icon'><RiEditBoxLine /></div>
//         </div>
    
//         <div className='note-footer'>
//         <small>{date}</small>
//         <MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete-icon' size='1.3rem' />
//         </div>  

//     </div> 
//   )
// }

// export default Note

import React, { useState } from 'react';
import { RiEditBoxLine } from 'react-icons/ri';
import { MdDeleteForever} from 'react-icons/md'

const Note = ({
  id,
  text,
  date,
  handleDeleteNote,
  handleEditNote,
  selectedNote,
  handleUpdateNote,
}) => {
  const [editText, setEditText] = useState(text);

  const handleEdit = () => {
    handleEditNote(id);
  };

  const charLimit = 200;

  const handleChange2 = (e) => {
    if(charLimit-e.target.value.length  >= 0)
    setEditText(e.target.value);
  };

  const handleSave = () => {
    const datee = new Date();
    handleUpdateNote({
      id,
      text: editText,
      date: datee.toLocaleDateString(),
    });
  };

  return (
    <div>
      {selectedNote && selectedNote.id === id ? (
        <div className='note note-edit-form'>
          <textarea className='textarea-editnote' cols="10" rows="8" value={editText} onChange={handleChange2}></textarea>
          <small>{charLimit-editText.length} remaining</small>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className='note'>
          <div className='note-header'>
            <span className='txt'>{text}</span>
            <div className='edit-icon'>
              <RiEditBoxLine onClick={handleEdit} />
            </div>
          </div>
          <div className='note-footer'>
            <small>{date}</small>
            <MdDeleteForever
              onClick={() => handleDeleteNote(id)}
              className='delete-icon'
              size='1.3rem'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;


//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
