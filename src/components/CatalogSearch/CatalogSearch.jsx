import React from 'react'
import './CatalogSearch.css'
import { MdOutlineClose } from 'react-icons/md'

const CatalogSearch = ({ searchValue, setSearchValue }) => {

    const handleChange = (e) => {
        // console.log(e.target.value);
        setSearchValue(e.target.value);
    };

    const handleClearInput = () => {
        setSearchValue('');
    }

    return (
        <div className="search">
            <div className="search__container">
                <input
                    className="search__input"
                    value={searchValue}
                    onChange={handleChange}
                    placeholder="Поиск по каталогу"
                />

                {searchValue &&
                    <button
                        className="search__button search__button_clear button"
                        aria-label="Очистить"
                        onClick={handleClearInput}>
                        <MdOutlineClose className="search__icon" />
                    </button>
                }
            </div>
        </div>
    )
}

export default CatalogSearch