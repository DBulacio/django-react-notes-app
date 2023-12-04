import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom'

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
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to="/">
            <ArrowLeft />
          </Link>
        </h3>
      </div>
      <textarea defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage