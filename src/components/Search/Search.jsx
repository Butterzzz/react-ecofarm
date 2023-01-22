import React from 'react'
import './Search.css'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
    return (
        <section className="search">
            <form className="search__form">
                <input
                    className="search-form__input"
                    type="text"
                    name="search"
                    placeholder="Поиск по каталогу" />
                <button
                    className="search-form__button button"
                    type="submit"
                    aria-label="Поиск">
                    <BiSearch className='search-form__icon' />
                </button>
            </form>
        </section>
    )
}

export default Search