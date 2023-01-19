import React from 'react'
import './Contacts.css'

const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <h2 className="contacts__title">Контакты</h2>
      <p className="contacts__subtitle">Смело пишите и звоните нам. Мы очень любим общаться с нашими клиентами.</p>

      <div className="contacts__wrapper">

        <div className="contacts__info">
          <a className="contacts__phone link" href="tel:+7 (914) 615-71-99">+7 (914) 615-71-99</a>
          <a className="contacts__email link" href="mailto:ecofarm@mail.ru">ecofarm@mail.ru</a>
          <address className="contacts__address">Благовещенск,  ул. Амурская 24</address>
        </div>

        <form className="contacts__form">
          <div className="contacts__form-div">
            <input
              className="contacts__form-input"
              type="text"
              name="name"
              placeholder="Ваше имя" />
          </div>
          <div className="contacts__form-div">
            <input
              className="contacts__form-input"
              type="email"
              name="email"
              placeholder="Ваш email" />
          </div>
          <div className="contacts__form-div contacts__form-area">
            <textarea
              className="contacts__form-input"
              name="message"
              rows="5"
              placeholder="Ваше сообщение">
            </textarea>
          </div>
          <button type="submit" className="contacts__form-button button">Отправить</button>
        </form>

      </div>
    </section>
  )
}

export default Contacts