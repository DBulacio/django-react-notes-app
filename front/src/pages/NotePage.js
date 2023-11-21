import React from 'react'
import { useParams } from 'react-router-dom'

const NotePage = () => {
  console.log(useParams())
  const { id } = useParams()

  return (
    <div>
      <h1>Single note {id}</h1>
    </div>
  )
}

export default NotePage