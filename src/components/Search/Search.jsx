import React, { useState } from 'react'
import './Search.css'
import { BiSearch } from 'react-icons/bi'
import { useFormWithValidation } from '../../hooks/useFormWithValidation'

const Search = ({ handleSearchMovies }) => {
    const { values, handleChange, isValid } = useFormWithValidation();
    const [errorMessage, setErrorMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        isValid ? (
            handleSearchMovies(values.search)
        ) : (
            setErrorMessage('Нужно ввести ключевое слово')
        )
    }

    return (
        <section className="search">
            <form
                className="search__form"
                onSubmit={handleSubmit}
            >
                <input
                    className="search-form__input"
                    type="text"
                    name="search"
                    value={values.search || ""}
                    onChange={handleChange}
                    placeholder="Поиск по каталогу"
                />
                <button
                    className="search-form__button button"
                    type="submit"
                    aria-label="Поиск">
                    <BiSearch className='search-form__icon' />
                </button>
            </form>
            <p>{errorMessage}</p>
        </section>
    )
}

export default Search