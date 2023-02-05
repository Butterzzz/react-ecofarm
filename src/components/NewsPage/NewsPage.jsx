import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './NewsPage.css'

const NewsPage = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);
    const navigate = useNavigate();
    const goBack = () => navigate(-1)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setNews(data))
    }, [id])


    return (
        <div>
            {news && (
                <>
                    <h1>{news.title}</h1>
                    <p>{news.body}</p>
                    <button onClick={goBack}>Назад</button>
                </>
            )}
        </div>
    )
}

export default NewsPage