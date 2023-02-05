import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './News.css'

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    return (
        <section className="news">
            <h2 className="news__title">Новости магазина</h2>
            <ul>
                {news.map(item => (
                    <li>
                        <Link key={item.id} to={`/blog/news/${item.id}`}>{item.title}</Link>
                    </li>
                ))
                }
            </ul>
        </section>
    )
}

export default News