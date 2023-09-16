import React, { useState } from "react";
import "./gallery.css";

function Gallery(props) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((nextIndex) => (nextIndex + 1) % props.img.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + props.img.length) % props.img.length
    );
  };

  let numberOfGallery = currentImage + 1;

  const ifOneImage = props.img.length > 1;

    return (
      <div id="gallery-container">
        <img src={props.img[currentImage]} alt={props.alt}></img>
        {ifOneImage && (
          <div id="gallery-container__arrow">
            <i
              id="arrow__right"
              className="fa-solid fa-chevron-right"
              onClick={nextImage}
            ></i>
            <i
              id="arrow__left"
              className="fa-solid fa-chevron-left"
              onClick={prevImage}
            ></i>
            <div id="number-of-gallery">
              {numberOfGallery}/{props.img.length}
            </div>
          </div>
        )}
      </div>
    );
  }

export default Gallery;
