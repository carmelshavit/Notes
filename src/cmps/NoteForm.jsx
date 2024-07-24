import React, { useState, useRef, useContext } from "react";
import NoteContext from '../context/NoteContext';
import { noteService } from "../services/note.service";
import { ACTIONS } from "../App";


const NoteForm = ({ onNewNote, note, onEditNote, closeModal, isEdit = false }) => {
  const scrollHeightRef = useRef(null);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const { dispatchNotes } = useContext(NoteContext);

  const onSubmitNewWithAviad = () => {
    if (!onEditNote) {
      // new note because no function for edit
      const newNote = noteService.getNewNote(text, title)
      dispatchNotes({
        type: ACTIONS.ADD_NOTE,
        data: newNote
      });
    } else {
      // editing note
      const newNote = noteService.getNewNote(text, title)
      dispatchNotes({
        type: ACTIONS.EDIT_NOTE,
        data: newNote
      });
    }

  }

  const onSubmitNewWithAviadV2 = () => {
    const note = noteService.getNewNote(text, title)
    dispatchNotes({
      data: note,
      type: isEdit ? ACTIONS.EDIT_NOTE : ACTIONS.ADD_NOTE
    })
  }

  const emitText = () => {
    if (onNewNote) {
      dispatchNotes({
        type: "ADD_ITEM",
        data: onNewNote(text, title)
      });
      // if (onSave !== null) {
      //   onNewNote(text, title)

    } else {
      //closeModal
      onEditNote({ ...note, text: text, title: title })
      closeModal()

      //decunstruction
    }
  };


  if (note !== undefined && note !== null) {
    setText(note.text)
    setTitle(note.title)
  }

  let buttonText;
  if (onNewNote !== null) {
    buttonText = 'Add'
  } else {
    buttonText = 'Edit'
  }

  const handleInput = () => {
    if (scrollHeightRef.current) {
      scrollHeightRef.current.style.height = "auto";
      scrollHeightRef.current.style.height = `${scrollHeightRef.current.scrollHeight}px`;
    }
  };


  return (
    <div className="note-form">
      <input
        value={title}
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        ref={scrollHeightRef}
        rows={1}
        onInput={handleInput}
        value={text}
        placeholder="your note..."
        name="postContent"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={emitText} disabled={!text} value={buttonText}>

      </button>
    </div>
  );
};

export default NoteForm;

// פורם שולח טקסט וכותרת לאינדקס.
// אינדקס מייצר פתק דוחף אותו למערך
// אינדקס מעביר את המערך של הפתקים כפרופ לליסט
// הליסט מרנדר על כל פתק נוטפריוויו
// לחיצה על נוט פריוויו מרנדרת עוד עותק של הפורם במרכז המסך ושולחת לו את הפתק שלחצו עליו
// הפורם במרכז המסך יציג באינפוטים את המידע של הפתק הנבחר ויאפשר עריכה שלהם.
// בלחיצה על הכפתור הוא ישלח את הטקסט והכותרת יחד עם האיידי של הפתק לאינדקס.
// האינדקס ימצא את הפתק הרולוונטי במערך, ישנה לו את הטקסט והכותרת במה שהתקבל מהפורם.
