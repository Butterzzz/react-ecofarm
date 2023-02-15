import React from 'react'
import './LoadMoreButton.css'

const LoadMoreButton = ({ onLoadMore }) => {

    return (
        <div className="load-more">
            <button
                className="load-more__button button"
                onClick={onLoadMore}
            >
                Еще
            </button>
        </div>
    )
}

export default LoadMoreButton