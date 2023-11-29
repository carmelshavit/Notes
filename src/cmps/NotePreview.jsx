const NotePreview = (note) => {
    const { date, text } = note

    return (
        <div className="notePreview">
            <h2>{date}</h2>
            <p>{text}</p>
        </div>
    )
}
export default NotePreview