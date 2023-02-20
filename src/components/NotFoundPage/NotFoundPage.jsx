import React from 'react'
import './NotFoundPage.css'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  // const navigate = useNavigate();
  // const goBack = () => navigate(-1)

  return (
    <section className="notFound container">

      <div className="notFound__logo-container">
        <div className="notFound__logo"></div>
        <p className="notFound__logo-title">EcoFarm</p>
      </div>

      <div className="notFound__text-container">
        <h2 className="notFound__title">Страница не найдена...</h2>
        <p className="notFound__subtitle">Возможно, был введен неверный адрес либо страница была удалена</p>
      </div>

      <div className="notFound__button-container">
        <Link to="/" className="notFound__button notFound__button_primary button">Вернуться на главную</Link>
        <Link to="/catalog" className="notFound__button notFound__button_secondary button">Перейти в каталог</Link>
      </div>

      <p className="notFound__footer">© 2023 EcoFarm | Экоферма по выращиванию микрозелени в Благовещенске</p>
      {/* <button onClick={goBack}>Назад</button> */}
    </section>
  )
}

export default NotFoundPage