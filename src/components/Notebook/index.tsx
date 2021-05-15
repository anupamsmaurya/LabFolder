import { useState } from "react"
import { appendNotes, getNotes, clearNotes } from '../../utilities/notes'
import styles from './index.style'

type Props = {
    addNotesCallback: (text: string) => void
}

const NoteBook: React.FC<Props> = ({addNotesCallback}) => {
    const [notes, setNotes] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNotes(e.target.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === 'Enter') {
            handleAddNotes()
        }
    }

    const handleAddNotes = () => {
        if(notes.length) {
            appendNotes(notes)
            addNotesCallback(getNotes())
            setNotes('')
        }
    }

    const handleClearNotes = () => {
        clearNotes()
        addNotesCallback('')
    }

    return (
        <div style={styles.root}>
            <label>Add your notes:</label>
            <textarea
                style={styles.textarea}
                value={notes}
                rows={10}
                cols={100}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <div>
                <input style={styles.buttons} type='button' value='Add Notes' onClick={handleAddNotes} />
                <input style={styles.buttons} type='button' value='Clear All Notes' onClick={handleClearNotes} />
            </div>
            
        </div>
    )
}

export default NoteBook