import React, { useState, useRef } from "react";

const NoteForm = ({ onNewNote, note }) => {
  const ref = useRef(null);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const emitText = () => {
    onNewNote(text, title);
  };

  const handleInput = () => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = `${ref.current.scrollHeight}px`;
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
        ref={ref}
        rows={1}
        onInput={handleInput}
        value={text}
        placeholder="your note..."
        name="postContent"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={emitText} disabled={!text}>
        Add
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
