import React, { useState, useEffect } from 'react'
import styles from './SearchBar.module.scss'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
  const [value, setValue] = useState('')

  useEffect(() => {
    const storedValue = localStorage.getItem('searchValue')
    if (storedValue) {
      setValue(storedValue)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('searchValue', value)
  }, [value])

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form className={styles['search-bar']} onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search"
        className={styles['search-bar__input']}
        value={value}
        onChange={inputHandler}
      />
      <button type="submit" className={styles['search-bar__button']}>
        <FiSearch />
      </button>
    </form>
  )
}

export default SearchBar
