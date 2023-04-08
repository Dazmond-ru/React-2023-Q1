import React, { useState, useRef } from 'react'
import styles from './SearchBar.module.scss'
import { FiSearch } from 'react-icons/fi'

interface OnSearchProps {
  onSearch: (searchValue: string) => void
}

const SearchBar = ({ onSearch }: OnSearchProps) => {
  const setDefaultValue = () => {
    const searchValue = localStorage.getItem('searchValue')
    return searchValue ? searchValue : ''
  }

  const valueRef = useRef(setDefaultValue())

  const [value, setValue] = useState(valueRef.current)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(value)
    localStorage.setItem('searchValue', value)
  }

  return (
    <form className={styles['search-bar']} onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search"
        className={styles['search-bar__input']}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        data-testid="search-input"
      />
      <button type="submit" className={styles['search-bar__button']} data-testid="search-button">
        <FiSearch />
      </button>
    </form>
  )
}

export default SearchBar
