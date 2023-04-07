import React, { useState, useEffect, useRef } from 'react'
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

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(value)
  }

  useEffect(() => {
    valueRef.current = value
  }, [value])

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', valueRef.current)
    }
  }, [])

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
