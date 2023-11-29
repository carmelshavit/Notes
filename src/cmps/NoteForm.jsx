

const NoteForm = ({ onNewNote }) => {
  const emitText = () => {
    const text = document.querySelector('.noteTextArea').value;
    onNewNote(text);
  };

  return (
    <div>
      <textarea className="noteTextArea" placeholder="your note..." name="postContent" rows={4} cols={40} />
      <button onClick={emitText}>Add</button>
    </div>
  );
};

export default NoteForm;
