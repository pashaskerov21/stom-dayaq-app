import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { MainContext } from '../context/MainContextProvider';
Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

function GallerySection() {
    const language = useSelector(state => state.language.language)
    const text = require(`../lang/${language}.json`)

    const {galleryCategories, galleryImages,} = useContext(MainContext);

    const [images, setImages] = useState([])
    const [categoryName, setCategoryName] = useState('all')

    const handleGalleryButton = (category) => {
        setCategoryName(category)
    }

    useEffect(() => {
        let filteredImages = []
        if (categoryName === 'all') {
            filteredImages = galleryImages.slice();
        } else if (categoryName === 'projects') {
            filteredImages = galleryImages.filter(image => image.category === 'projects')
        } else if (categoryName === 'actions') {
            filteredImages = galleryImages.filter(image => image.category === 'actions')
        } else if (categoryName === 'emotions') {
            filteredImages = galleryImages.filter(image => image.category === 'emotions')
        } else {
            filteredImages = galleryImages
        }
        setImages(filteredImages)
    }, [categoryName, galleryImages])

    return (
        <section className="gallery-section" id='gallery'>
            <div className="container" data-aos="fade-up">
                <h2 className="section-title white">{text['gallery']}</h2>
                <div className="gallery-buttons">
                    {
                        galleryCategories.map((category, index) => (
                            <button data-aos="zoom-in" className={categoryName === category ? 'active' : null} onClick={() => handleGalleryButton(category)} key={index}>{text[`${category}`]}</button>
                        ))
                    }
                </div>
                <div className="row">
                    {
                        images.length > 0 ? (
                            images.map(image => (
                                <div className="col-12 col-sm-6 col-lg-4 col-xl-3" data-aos="zoom-in" key={image.id}>
                                    <div className="g_item">
                                        <div className="image">
                                            <img src={image.url} alt="gallery-img" />
                                        </div>
                                        <div className="hover-div">
                                            <a href={image.url} data-fancybox="">
                                                <i className="fa-solid fa-search"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : null
                    }
                </div>
            </div>
        </section>
    )
}

export default GallerySection
