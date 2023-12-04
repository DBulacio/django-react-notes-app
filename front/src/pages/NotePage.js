import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const NotePage = () => {
  const { id } = useParams()
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

  return (
    <div>
      <h1>{note?.body}</h1>
    </div>
  )
}

export default NotePage