import React, { useRef } from "react";
import styles from './common.module.css'
export default function SearchField(props) {
  const searchInputRef = useRef();
  const handleSearch = () => {
    let value = searchInputRef.current.value;
    props?.onSearchInitiate(value);
  };

  return (
    <>
      <div className={styles.searchBar}>
        <input className={styles.bar} ref={searchInputRef} />
        <button className={styles.searchButton}  onClick={() => handleSearch()}>Search</button>
      </div>
    </>
  );
}
