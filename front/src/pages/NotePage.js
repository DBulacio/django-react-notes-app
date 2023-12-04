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
    let res = await fetch(`/api/notes/${id}`)
    let data = await res.json()
    console.log('data', data)
    setNote(data)
  }

  let updateNote = async () => {
    fetch(`/api/notes/${id}/update`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }

  let handleSubmit = () => {
    updateNote()
    navigate(-1)
  }

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
      </div>
      <textarea
        onChange={(e) => {setNote({...note, 'body':e.target.value})}}
        defaultValue={note?.body}>
      </textarea>
    </div>
  )
}

export default NotePage