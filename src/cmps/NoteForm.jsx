import React, { useState, useRef } from "react";

const NoteForm = ({ onNewNote }) => {
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
