import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'

const NotesListPage = () => {
  // initial state of this components is an empty array, since we don't have any notes yet.
  let [notes, setNotes] = useState([]) // the useState returns the values (notes) and a way to update the state (setNotes)

  // hook that will fire off on load AND once the dependencies (values on last array) change
  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async () => {
    let res = await fetch('/api/notes/')
    let data = await res.json()
    console.log('DATA: ', data)
    setNotes(data)
  }

  return (
    <div>
      <div className='notes-list'>
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
          // <h3 key={index}>{note.body}</h3>
        ))}
      </div>
    </div>
  )
}

export default NotesListPage