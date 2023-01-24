import React, { useRef, useState } from 'react'
import './Contacts.css'
import emailjs from '@emailjs/browser'
import { GrFormClose } from 'react-icons/gr'

const Contacts = () => {

  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isShowError, setIsShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleHideError() {
    setIsShowError(false);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.sendForm(
      'service_cbnrrw8',
      'template_tailgcj', form.current,
      'l2YmhnffqhU2B23A0'
    )
      .then((result) => {
        e.target.reset()
        setIsSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setIsSuccess(false);
      })
      .finally(() => {
        setIsShowError(true);
        setIsLoading(false);
      });
  }

  return (
    <section className="contacts" id="contacts">
      <h2 className="contacts__title section-title">Контакты</h2>
      <p className="contacts__subtitle section-subtitle">Смело пишите и звоните нам. Мы очень любим общаться с нашими клиентами</p>

      <div className="contacts__wrapper">

        <div className="contacts__info">
          <a className="contacts__phone link" href="tel:+7 (914) 615-71-99">+7 (914) 615-71-99</a>
          <a className="contacts__email link" href="mailto:ecofarm@mail.ru">ecofarm@mail.ru</a>
          <address className="contacts__address">Благовещенск,  ул. Амурская 24</address>
        </div>

        <form className="contacts__form" ref={form} onSubmit={sendEmail}>
          <div className="contacts__form-div">
            <input
              className="contacts__form-input"
              type="text"
              name="name"
              placeholder="Ваше имя"
              minLength="2" maxLength="40"
              required />
          </div>
          <div className="contacts__form-div">
            <input
              className="contacts__form-input"
              type="email"
              name="email"
              placeholder="Ваш email"
              required />
          </div>
          <div className="contacts__form-div contacts__form-area">
            <textarea
              className="contacts__form-input"
              name="message"
              rows="5"
              placeholder="Ваше сообщение"
              minLength="2" maxLength="300"
              required >
            </textarea>
          </div>
          <button type="submit" className="contacts__form-button button" disabled={isLoading}>{isLoading ? 'Отправляем...' : 'Отправить'}</button>

          <div className={`contacts__form-error ${isSuccess && 'contacts__form-error_green'} ${isShowError && 'contacts__form-error_show'}`}>
            <p className="contacts__form-error_text">{isSuccess ? 'Сообщение успешно отправлено' : 'Что-то пошло не так. Попробуйте еще раз'}</p>
            <GrFormClose type="button" className="contacts__form-error_close" onClick={handleHideError} />
          </div>

        </form>
      </div>
    </section>
  )
}

export default Contacts