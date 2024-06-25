import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../style';
import {gallery2,gallery3,temple} from '../assets'

const galleryImages = [
  { src: temple, alt: 'Temple event 1' },
  { src: gallery2, alt: 'Temple event 2' },
  { src: gallery3, alt: 'Temple event 3' },
  { src: temple, alt: 'Temple event 4' },
  { src: temple, alt: 'Temple event 5' },
  { src: temple, alt: 'Temple event 6' },
  // Add more images as needed
];
console.log(galleryImages)
const GalleryCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="gallery" className={`${styles.paddingY} ${styles.flexCenter} flex-col`}>
      <h2 className={`${styles.heading2} text-center`}>Gallery</h2>
      <p className={`${styles.paragraph} text-center`}>
        Explore the beauty and serenity of our temple through these images.
      </p>
      <div className="w-full mt-8">
        <Slider {...settings}>
          {galleryImages.map((image, index) => (
            <div key={index} className="p-4">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default GalleryCarousel;
