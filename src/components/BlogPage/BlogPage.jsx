import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './BlogPage.css'

const BlogPage = () => {
  return (
    <div className="container">
      <h2>BlogPage</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum laboriosam, eaque impedit repellat eligendi culpa laudantium eos ea, quos distinctio officia qui error ab adipisci, blanditiis repudiandae delectus dolorum placeat.</p>
      <ul>
        <li><Link to="recipes">Рецепты</Link></li>
        <li><Link to="news">Новости</Link></li>
      </ul>
      <Outlet />
    </div>
  )
}

export default BlogPage