import React, { useState, useEffect } from 'react'
import './Search.css'
import { BiSearch } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'
import { useFormWithValidation } from '../../hooks/useFormWithValidation'

const Search = ({ handleSearchMovies, onClear }) => {
    const { values, handleChange, isValid, resetForm } = useFormWithValidation();
    const [errorMessage, setErrorMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        isValid ? (
            handleSearchMovies(values.search)
        ) : (
            setErrorMessage('Нужно ввести ключевое слово')
        )
    }

    function handleClearForm() {
        resetForm();
        onClear();
    }

    useEffect(() => {
        setErrorMessage('');
    }, [values.search]);

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
                {isValid &&
                    <button
                        className="search-form__button search-form__button_clear button"
                        type="button"
                        aria-label="Очистить"
                        onClick={handleClearForm} >
                        <MdOutlineClose className="search-form__icon" />
                    </button>
                }

                <button
                    className="search-form__button search-form__button_search button"
                    type="submit"
                    aria-label="Поиск">
                    <BiSearch className='search-form__icon' />
                </button>
            </form>
            <p className="search__error-message">{errorMessage}</p>
        </section>
    )
}

export default Search