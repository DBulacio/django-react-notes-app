import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = () => {
  const { id } = useParams()
  const navigate = useNavigate();
  let [note, setNote] = useState(null)

  useEffect(() => {
    getNote()
  }, [id])
  
  let getNote = async () => {
    if(id == 'new')  return
    let res = await fetch(`/api/notes/${id}`)
    let data = await res.json()

    setNote(data)
  }

  let createNote = async () => {
    fetch(`/api/notes/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }
  
  let updateNote = async () => {
    fetch(`/api/notes/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }

  let deleteNote = async () => {
    fetch(`/api/notes/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  let handleSubmit = () => {
    if(id !== 'new' && note.body === ''){
      deleteNote()
    } else if (id !== 'new') {
      updateNote()
    } else if (id === 'new' && note.body !== null) {
      createNote()
    }

    navigate(-1)
  }

  let handleChange = (value) => {
    setNote(note => ({...note, 'body':value}))
  }

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        {id !== 'new' ? (
          <button onClick={handleSubmit}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <textarea
        onChange={(e) => { handleChange(e.target.value) }}
        value={note?.body}>
      </textarea>
    </div>
  )
}

export default NotePage