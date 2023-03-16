import React, { Component } from 'react'
import styles from './SearchBar.module.scss'

import { FiSearch } from 'react-icons/fi'

class SearchBar extends Component {
  state = { value: '' }

  componentDidMount = () => {
    const value = localStorage.getItem('searchValue')
    if (value) {
      this.setState({ value: value })
    }
  }

  componentWillUnmount = () => {
    localStorage.setItem('searchValue', this.state.value)
  }

  inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div className={styles['search-bar']}>
        <input
          type="search"
          placeholder="Search"
          className={styles['search-bar__input']}
          value={this.state.value}
          onChange={this.inputHandler}
        />
        <button type="submit" className={styles['search-bar__button']} onSubmit={(e) => e.preventDefault()}>
          <FiSearch />
        </button>
      </div>
    )
  }
}

export default SearchBar
