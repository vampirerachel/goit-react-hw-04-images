import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const LoadMoreButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.Button}>
      Load More
    </button>
  );
};

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreButton;

