import moment from 'moment'

const NotePreview = ({ note }) => {

    const formattedDate = moment(note.date).format('MMM Do h:mm A')
    return (
        <div className="note-preview" >
            <div className="note-header">
                <h5>{formattedDate}</h5>
            </div>
            <h4>{note.title}</h4>
            <p>{note.text}</p>

        </div>
    )
}
export default NotePreview