import React, { useState, useEffect } from 'react'
import './Gallery.css'
import axios from 'axios'

const Gallery = () => {
    const [galleryImages, setGalleryImages] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedCategoryAbout, setSelectedCategoryAbout] = useState('');

    const handleCategorySelect = (name, about) => {
        setSelectedCategory(name);
        setSelectedCategoryAbout(about);
    };

    function loadingGallery() {
        axios.get('http://localhost:3003/gallery')
            .then((resGallery) => {
                setGalleryImages(resGallery.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function loadingCategories() {
        axios.get('http://localhost:3003/gallery/categories')
            .then((resCategories) => {
                setCategories(resCategories.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        loadingGallery();
        loadingCategories();
    }, []);

    const filteredImages = selectedCategory === 'All' ? galleryImages : galleryImages.filter((image) => image.category === selectedCategory);

    return (
        <section className="gallery">
            <h2 className="gallery__title section-title">Галерея изображений</h2>

            <div className="gallery__container container">

                <div className="gallery__categories categories">
                    <div className="categories__container">
                        <button
                            className={`categories__button button ${selectedCategory === 'All' ? 'active' : ''}`}
                            onClick={() => handleCategorySelect('All')}
                        >
                            Все
                        </button>

                        {categories.map((category) => (
                            <button
                                key={category._id}
                                className={`categories__button button ${selectedCategory === category.name ? 'active' : ''}`}
                                onClick={() => handleCategorySelect(category.name, category.about)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    <div className="categories__about">
                        <p className="categories__about-text">{selectedCategoryAbout}</p>
                    </div>
                </div>

                <div className="gallery__grid gallery-grid">
                    {filteredImages.map((image) => (
                        <div key={image._id} className="gallery-grid__image-wrapper">
                            <img className="gallery-grid__image" src={image.url} alt={image.title} />
                            <div className="gallery-grid__image-overlay">
                                <h3 className="gallery-grid__image-title">{image.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Gallery;