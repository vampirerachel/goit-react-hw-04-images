import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import styles from './styles.module.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className={styles.App}>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery searchTerm={searchTerm} />
    </div>
  );
};

export default App;
