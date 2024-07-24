import moment from 'moment'
import { useContext } from 'react'
import NoteContext from '../context/NoteContext'
import { ACTIONS } from '../App'

const NotePreview = ({ note }) => {
    const { dispatchNotes } = useContext(NoteContext)
    const onDelete = () => {
        dispatchNotes({
            type: ACTIONS.DELETE_NOTE,
            data: note.id
        })
    }
    const formattedDate = moment(note.date).format('MMM Do h:mm A')
    return (
        <div className="note-preview" >
            <div className="note-header">
                <h5>{formattedDate}</h5>
            </div>
            <h4>{note.title}</h4>
            <p>{note.text}</p>
            <button onClick={onDelete}>DELETE</button>
        </div>
    )
}
export default NotePreview