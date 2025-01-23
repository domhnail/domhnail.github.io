import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const ImageCarousel = ({ images }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const processedImages = images.map((imgData, index) => ({
    image: imgData.image || "",
    title: imgData.title || `Image ${index + 1}`,
    description: imgData.description || `Description for Image ${index + 1}`,
    github: imgData.github || "",
  }));

  const handleShow = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="carousel-wrapper mb-1" style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {processedImages.map((imageData, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
              style={{ textAlign: "center" }}
              data-bs-interval="5000"
            >
              <img
                src={imageData.image}
                className="d-block w-100"
                alt={imageData.title}
                onClick={() => handleShow(index)}
                style={{ objectFit: "cover", height: "400px", cursor: "pointer" }}
              />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      <Lightbox
        plugins={[Captions]}
        toolbar={{
          buttons: [
            <a href={processedImages[currentIndex].github} target="_blank">
            <button key="my-button" type="button" className="yarl__button mt-3">
              GitHub Repo
            </button></a>,
            "close",
          ],
        }}
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={processedImages.map((imageData) => ({
          src: imageData.image,
          title: imageData.title,
          alt: imageData.title,
          description: imageData.description
        }))}
        index={currentIndex}
        on={{ view: ({ index: currentIndex }) => setCurrentIndex(currentIndex) }}
      />
    </div>
  );
};


export default ImageCarousel;



// pass an array of image URLs to the `images` prop when using the component.
