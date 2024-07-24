export const noteService = {
    saveToStorage,
    getNotes,
    getNewNote
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

async function getNotes() {
    try {
        const response = await fetch("http://localhost:3001/notes");
        if (!response.ok) {
            throw new Error(`Failed to fetch notes. Status: ${response.status}`);
        }

        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error while loading notes:", error);
        
    }
}



function getNewNote(text, title) {
    return {
        date: new Date(),
        title,
        text,
        id: makeId()
    }
}


function makeId() {
    return Math.random().toString(36).substring(2, 10)
}
