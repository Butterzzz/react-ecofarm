import React from 'react'
import './CatalogSearch.css'
import { MdOutlineClose } from 'react-icons/md'

const CatalogSearch = ({ searchTerm, setSearchTerm }) => {
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    function handleClearInput() {
        setSearchTerm('');
    }

    return (
        <div className="search">
            <div className="search__container">
                <input
                    className="search__input"
                    // type="search"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Поиск по каталогу"
                />

                {searchTerm &&
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