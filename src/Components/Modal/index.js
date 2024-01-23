import React, { useState } from "react";
import Modal from "react-modal";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

const ModalGallery = ({ isOpen, onRequestClose, images }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
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
        },
      }}
    >
      <div className="modal-content">
        <Swiper navigation pagination={{ clickable: true }}>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Image ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button className="close-btn" onClick={onRequestClose}>
        &times;
      </button>
    </Modal>
  );
};

export default ModalGallery;
