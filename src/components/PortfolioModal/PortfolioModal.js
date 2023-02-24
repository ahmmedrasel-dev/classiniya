import React, { useState } from 'react';
import Modal from "react-modal";
import './portfolio.css'
import { FaChevronLeft, FaChevronRight, FaPlus } from 'react-icons/fa'

const PortfolioModal = ({ images }) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const handlePrevClick = () => {
    setSelectedImageIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextClick = () => {
    setSelectedImageIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <>
      {images.map((image, index) => (
        <div
          key={index}
          className="image-container"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleImageClick(index)}
        >
          <img
            src={image.thumbnail}
            alt="thumbnail"
            className="rounded-lg cursor-pointer"
          />

          {hoveredIndex === index && (
            <div className="image-overlay">
              <FaPlus />
            </div>
          )}
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        style={customStyles}
      >
        <button className='btn btn-sm btn-circle absolute right-2 top-2 text-white' onClick={handleModalClose}>✕</button>
        <button className='btn btn-md btn-circle absolute left-[46%] bottom-2' disabled={selectedImageIndex === 0} onClick={handlePrevClick}>
          <FaChevronLeft />
        </button>
        <img className='h-auto' src={images[selectedImageIndex].main_img} alt={images[selectedImageIndex].alt} />
        <button
          disabled={selectedImageIndex === images.length - 1}
          onClick={handleNextClick}
          className="btn btn-md btn-circle absolute right-[46%] bottom-2"
        >
          <FaChevronRight />
        </button>
      </Modal>
    </>
  );
};


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default PortfolioModal;