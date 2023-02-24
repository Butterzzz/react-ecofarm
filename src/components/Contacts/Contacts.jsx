import React, { useRef, useState, useEffect } from 'react'
import './Contacts.css'
import emailjs from '@emailjs/browser'
import { GrFormClose } from 'react-icons/gr'
import { BsWhatsapp } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'
import { RiMailSendLine } from 'react-icons/ri'
import { FiPhoneForwarded } from 'react-icons/fi'

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
      .then(() => {
        e.target.reset()
        setIsSuccess(true);
      })
      .catch((err) => {
        // console.log(err);
        setIsSuccess(false);
      })
      .finally(() => {
        setIsShowError(true);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowError(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, [isShowError]);

  return (
    <section className="contacts container" id="contacts">
      <h2 className="contacts__title section-title">Контакты</h2>
      <p className="contacts__subtitle section-subtitle">Смело пишите и звоните нам. Мы очень любим общаться с нашими клиентами</p>

      <div className="contacts__wrapper">

        <div className="contacts__info">

          <a
            className="contacts__link contacts__link_phone"
            href="tel:+7 (777) 777-77-77"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Позвонить"
          >
            <FiPhoneForwarded className="contacts__link-icon contacts__link-icon_black" />
            <p>
              Позвонить<br /><span>+7 (777) 777-77-77</span>
            </p>
          </a>

          <a
            className="contacts__link contacts__link_email"
            href="mailto:ecofarm@mail.ru"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать Email"
          >
            <RiMailSendLine className="contacts__link-icon contacts__link-icon_black" />
            <p>
              Написать Email <br /><span>ecofarm@mail.ru</span>
            </p>
          </a>

          <a
            className="contacts__link contacts__link_whatsapp"
            href="https://wa.me/77777777777?text=Здравствуйте!%20Интересует%20ваша%20микрозелень"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в WhatsApp"
          >
            <BsWhatsapp className="contacts__link-icon" />
            Написать в WhatsApp
          </a>

          <a
            className="contacts__link contacts__link_telegram"
            href="https://t.me/777_7777777"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в Telegram"
          >
            <BsTelegram className="contacts__link-icon" />
            Написать в Telegram
          </a>

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

          <button
            type="submit"
            className="contacts__form-button button"
            disabled={isLoading}>{isLoading ? 'Отправляем...' : 'Отправить'}
          </button>

          <div className={`contacts__form-error ${isSuccess && 'contacts__form-error_green'} ${isShowError && 'contacts__form-error_show'}`}>
            <p className="contacts__form-error_text">{isSuccess ? 'Сообщение успешно отправлено' : 'Что-то пошло не так. Попробуйте еще раз'}</p>
            <GrFormClose
              className="contacts__form-error_close"
              onClick={handleHideError}
            />
          </div>

        </form>
      </div>
    </section>
  )
}

export default Contacts