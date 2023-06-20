import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  const { webformatURL, tags } = image;

  return (
    <li>
      <img className={styles.ImageGalleryItemimage} src={webformatURL} alt={tags} onClick={onClick} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
