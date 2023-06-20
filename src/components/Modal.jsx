import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Modal = ({ image, onClose }) => {
  const { largeImageURL, tags } = image;

  return (
    <div className={styles.Overlay} onClick={onClose}>
      <div>
        <img src={largeImageURL} alt={tags} className={styles.Modal} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
