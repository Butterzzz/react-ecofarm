import React, { useState } from 'react';
import './Gallery.css';

const categories = [
    { id: '1', name: 'Виды микрозелени', about: 'Фотографии различных видов микрозелени', },
    { id: '2', name: 'Упаковка', about: 'Фотографии упаковок микрозелени разного размера и типа, включая картонные коробки, пакеты и пластиковые контейнеры', },
    { id: '3', name: 'Урожай', about: 'Фотографии готовой микрозелени в момент сбора и упаковки', },
    { id: '4', name: 'Рецепты', about: ' Изображения блюд, в которые можно добавить микрозелень', },
    { id: '5', name: 'Производство', about: 'Изображения гидропонных установок для выращивания микрозелени в условиях ограниченного пространства', },
];

const images = [
    { id: '1', title: 'Image 1', category: 'Виды микрозелени', url: 'https://source.unsplash.com/random/600x400' },
    { id: '2', title: 'Image 2', category: 'Упаковка', url: 'https://source.unsplash.com/random/600x400' },
    { id: '3', title: 'Image 3', category: 'Урожай', url: 'https://source.unsplash.com/random/600x400' },
    { id: '4', title: 'Image 4', category: 'Виды микрозелени', url: 'https://source.unsplash.com/random/600x400' },
    { id: '5', title: 'Image 5', category: 'Упаковка', url: 'https://source.unsplash.com/random/600x400' },
    { id: '6', title: 'Image 6', category: 'Урожай', url: 'https://source.unsplash.com/random/600x400' },
    { id: '7', title: 'Image 7', category: 'Рецепты', url: 'https://source.unsplash.com/random/600x400' },
    { id: '8', title: 'Image 8', category: 'Рецепты', url: 'https://source.unsplash.com/random/600x400' },
    { id: '9', title: 'Image 9', category: 'Производство', url: 'https://source.unsplash.com/random/600x400' },
];

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedCategoryAbout, setSelectedCategoryAbout] = useState('');

    const handleCategorySelect = (name, about) => {
        setSelectedCategory(name);
        setSelectedCategoryAbout(about);
    };

    const filteredImages = selectedCategory === 'All' ? images : images.filter((image) => image.category === selectedCategory);

    return (
        <section className="gallery">
            <h2 className="reviews__title section-title">Галерея изображений</h2>

            <div className="gallery__container">
                <div className="categories">
                    <div className="categories__container">
                        <button className={selectedCategory === 'All' ? 'active' : ''} onClick={() => handleCategorySelect('All')}>
                            Все
                        </button>

                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={selectedCategory === category.name ? 'active' : ''}
                                onClick={() => handleCategorySelect(category.name, category.about)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {selectedCategory !== 'All' && (
                        <div className="category-about">
                            <p className="category-about__text">{selectedCategoryAbout}</p>
                        </div>
                    )}
                </div>

                <div className="image-list">
                    {filteredImages.map((image) => (
                        <div key={image.id} className="image-wrapper">
                            <img src={image.url} alt={image.title} className="image" />
                            <div className="image-overlay">
                                <h3 className="image-title">{image.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;