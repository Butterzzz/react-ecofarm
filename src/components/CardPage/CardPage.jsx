import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import './CardPage.css'


const CardPage = ({ setOrder }) => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [discount, setDiscount] = useState(null);

  const navigate = useNavigate();
  const goBack = () => navigate(-1)

  useEffect(() => {
    fetch(`https://63d92eb9baa0f79e09b6c7dd.mockapi.io/catalog/cards/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((resCard) => {
        setCard(resCard);
        setDiscount(resCard.price * (1 - resCard.discount)).toFixed(0);
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

          <button className="card__button button card__button_type_buy" onClick={() => setOrder({
            id: card.id,
            image: card.image,
            title: card.title,
            price: discount,
          })}
          >Купить</button>
        </>
      )}
    </div>
  )
}

export default CardPage