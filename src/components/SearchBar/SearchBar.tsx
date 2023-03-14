import React, { Component } from 'react'
import styles from './SearchBar.module.scss'

class SearchBar extends Component {
  render() {
    return (
      <div className={styles['search-bar']}>
        <input type="search" placeholder="Search" className={styles['search-bar__input']} />
      </div>
    )
  }
}

export default SearchBar
