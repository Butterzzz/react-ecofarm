import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer__title">EcoFarm | Экоферма по выращиванию микрозелени в Благовещенске</h3>
      <div className="footer__content">
        <p className="footer__copyright">&copy; Сергей Гринченко. 2023</p>
        <ul className="footer__list">
          <li className="footer__list-item"><a href="https://www.instagram.com/" className="footer__link link" target="_blank" rel="noopener noreferrer">Инстаграм</a></li>
          <li className="footer__list-item"><a href="https://vk.com/" className="footer__link link" target="_blank" rel="noopener noreferrer">VK</a></li>
          <li className="footer__list-item"><a href="https://web.telegram.org/" className="footer__link link" target="_blank" rel="noopener noreferrer">Telegram</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer