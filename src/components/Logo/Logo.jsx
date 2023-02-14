import React from 'react'
import './Logo.css'
import { Link } from 'react-router-dom'

const Logo = ({ withText=true }) => {
  return (
    <Link to="/" className="logo link">
      <div className="logo__image"></div>
      {withText &&
        <div className="logo__container">
          <p className="logo__title">EcoFarm</p>
          <p className="logo_subtitle">Микрозелень</p>
        </div>
      }
    </Link>
  )
}

export default Logo