import React from 'react'
import './Search.css'

const Search = () => {
    return (
        <div className="search">
            <span className="search__icon"></span>
            <input
                className="search__input"
                type="text"
                name="search"
                placeholder="Поиск..." />
        </div>
    )
}

export default Search