import React from 'react'
import './Gallery.css';

import Book from '../gallery/Book';
import Rings from '../gallery/Rings';
import Clock from '../gallery/Clock';
import Loading from '../gallery/Loading';
import Face from '../gallery/Face';
import Teacup from '../gallery/Teacup';


function Gallery() {
  return (
    <section id="gallery">
        <div className="projects__content">
            <h1 className="gallery__title">Here is my animation <span className="text--blue">gallery</span></h1>
            <div className="gallery__list">
              <div className="gallery__item" data-aos="fade-up"><Book></Book></div>
              <div className="gallery__item" data-aos="fade-up"><Clock></Clock></div>
              <div className="gallery__item" data-aos="fade-up"><Rings></Rings></div>
              <div className="gallery__item" data-aos="fade-up"><Loading></Loading></div>
              <div className="gallery__item" data-aos="fade-up"><Face></Face></div>
              
              <div className="gallery__item" data-aos="fade-up">
                <div className='teacup__background'>
                  <div className="teacup__sizing">
                    <Teacup></Teacup>
                  </div>
                </div>
              </div>
              
            </div>
        </div>
    </section>
  )
}

export default Gallery;