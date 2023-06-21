import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import LoadMoreButton from './LoadMoreButton';
import Loader from './Loader';
import Modal from './Modal';
import styles from './styles.module.css';

const ImageGallery = ({ searchTerm }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImages = useCallback(async () => {
    if (!searchTerm) {
      setImages([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get(
        `https://pixabay.com/api/?q=${searchTerm}&page=${page}&key=35513783-cdd32f526a75b86a8cfb6c8f5&image_type=photo&orientation=horizontal&per_page=12`
      );
      const newImages = response.data.hits;
      setImages((prevImages) => [...prevImages, ...newImages]);
      setLoading(false);
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      console.log(error.config);
    }
  }, [searchTerm, page]);

  useEffect(() => {
    setImages([]);
    setPage(1);
  }, [searchTerm]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const openModal = useCallback((image) => {
    setShowModal(true);
    setSelectedImage(image);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
    setSelectedImage(null);
  }, []);

  const handleLoadMore = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  return (
    <div>
      {loading && images.length === 0 ? <Loader /> : null}

      {images.length > 0 && (
        <ul className={styles.ImageGallery}>
          {images.map((image) => (
            <ImageGalleryItem
              key={image.id}
              image={image}
              onClick={() => openModal(image)}
              className={styles.ImageGalleryItem}
            />
          ))}
        </ul>
      )}

      {images.length > 0 && !loading && (
        <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
      )}

      {showModal && selectedImage && (
        <Modal
          image={selectedImage}
          onClose={closeModal}
          className={styles.Modal}
        />
      )}
    </div>
  );
};

ImageGallery.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default ImageGallery;
