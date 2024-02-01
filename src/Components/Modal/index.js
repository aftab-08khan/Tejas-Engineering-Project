import React, { useState, useRef } from "react";
import Modal from "react-modal";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

const ModalGallery = ({ isOpen, onRequestClose, images }) => {
  console.log("modalImg", images);

  const slidesRef = useRef(null);

  const handleNext = () => {
    console.log("handleNext");
    slidesRef.current.appendChild(slidesRef.current.firstElementChild);
  };

  const handlePrev = () => {
    console.log("prevvvv");
    slidesRef.current.insertBefore(
      slidesRef.current.lastElementChild,
      slidesRef.current.firstElementChild
    );
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: "rgb(0, 0, 0)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: 0,
          border: "none",
          background: "none",
          maxWidth: "80vw",
        },
      }}
    >
      <button className="closeSilder" onClick={onRequestClose}>
        &times;
      </button>

      <div class="slider">
        <div class="slides" ref={slidesRef}>
          {images?.map((image, index) => (
            <div class="slide">
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>

        <label class="prev" for="r2" onClick={handlePrev}>
          &#10094;
        </label>
        <label class="next" for="r2" onClick={handleNext}>
          &#10095;
        </label>
      </div>

      <div style={{ display: "flex" }}>
        {/* <Swiper navigation pagination={{ clickable: true }}>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Image ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper> */}
        {/* <Swiper navigation pagination={{ clickable: true }}> */}

        {/* </Swiper> */}
      </div>
    </Modal>
  );
};

export default ModalGallery;
