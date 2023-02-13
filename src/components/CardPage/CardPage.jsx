import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import './CardPage.css'
import axios from 'axios';

const CardPage = ({ setOrder, setIsVisibleToast }) => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [discount, setDiscount] = useState(null);

  const navigate = useNavigate();
  const goBack = () => navigate(-1)

  const handleBuy = () => {
    // onBuy(card);

    setOrder({
      id: card._id,
      image: card.image,
      title: card.title,
      price: discount,
    })
    setIsVisibleToast(true);
    setTimeout(() => {
        setIsVisibleToast(false);
    }, 3000);
};

  // useEffect(() => {
  //   fetch(`http://localhost:3003/catalog/cards/${id}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((resCard) => {
  //       setCard(resCard);
  //       // console.log(resCard)
  //       setDiscount(resCard.price * (1 - resCard.discount));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }, [id]);

  useEffect(() => {
    axios.get(`http://localhost:3003/catalog/cards/${id}`)
      .then((resCard) => {
        setCard(resCard.data);
        // console.log(resCard.data);
        setDiscount(resCard.data.price * (1 - resCard.data.discount));
      })
      .catch((err) => {
        console.log(err);
      })
  }, [id]);

  return (
    <div>
      {card && (
        <>
          <ol className="breadcrumb-list">
            <li className="breadcrumb-list__item">
              <Link to="/catalog/" className="breadcrumb-list__link" >
                <span>Каталог</span>
              </Link>
            </li>
            <li className="breadcrumb-list__item">
              <span>{card.title}</span>
            </li>
          </ol>

          <button onClick={goBack}>Назад</button>

          <h1>{card.title}</h1>
          <img src={card.image} alt={card.title} />
          <p>{card.about}</p>
          <p>{card.price}</p>
          <p>{discount}</p>

          <button className="card__button button card__button_type_buy" onClick={handleBuy}>
            Купить
          </button>
        </>
      )}
    </div>
  )
}

export default CardPage