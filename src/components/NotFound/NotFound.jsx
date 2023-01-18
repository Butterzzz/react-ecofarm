import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1)

  return (
    <>
      <div>NotFound</div>
      <button onClick={goBack}>Назад</button>
    </>
  )
}

export default NotFound