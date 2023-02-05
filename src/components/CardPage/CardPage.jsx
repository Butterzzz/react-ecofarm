import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import './CardPage.css'


const CardPage = ({ handleClick }) => {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  const navigate = useNavigate();
  const goBack = () => navigate(-1)

  useEffect(() => {
    fetch(`https://63d92eb9baa0f79e09b6c7dd.mockapi.io/catalog/cards/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((resCard) => {
        setCard(resCard);
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
          <button className="card__button button card__button_type_add" type='button' onClick={handleClick}>Купить</button>
        </>
      )}
    </div>
  )
}

export default CardPage