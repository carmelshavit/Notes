import { ACTIONS } from "../App"

function arrReducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_NOTE:
            return [action.data, ...state]
        case ACTIONS.SET_NOTES:
            return action.data
        case ACTIONS.DELETE_NOTE:
            return state.filter((note) => note.id !== action.data)
        case ACTIONS.EDIT_NOTE:
            const editedNote = action.data
            const NoteIndex = state.findIndex(note => note.id === editedNote.id)
            const copyNotes = [...state]
            copyNotes[NoteIndex] = editedNote
            return copyNotes
        default:
            throw new Error()
    }
}
export default arrReducer