import React from 'react'
import styles from './Management.module.scss'
import { useSelector } from 'react-redux'
import { getPage, getSearchValue, getSort, setPage, setSort } from '../../redux/slices/search'
import { useGetCharactersQuery, useGetPagesQuery } from '../../redux/api/api'
import { useAppDispatch } from '../../redux/store'

export const Management = () => {
  const dispatch = useAppDispatch()
  const search = useSelector(getSearchValue)
  const page = useSelector(getPage)
  const sort = useSelector(getSort)

  const { data: charactersData = [], isError } = useGetCharactersQuery({ search, page })

  const { data: pagesData = 42 } = useGetPagesQuery({ search, page })

  const handleNextButton = () => {
    dispatch(setPage(page + 1))
  }

  const handlePrevButton = () => {
    dispatch(setPage(page - 1))
  }

  const handlePageSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const input = e.currentTarget.elements.namedItem('pageNumber') as HTMLInputElement
    const pageNumber = parseInt(input.value || '', 10)
    if (!isNaN(pageNumber) && pageNumber !== page) {
      dispatch(setPage(pageNumber))
    }
    input!.value = ''
  }

  const handlePageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input = e.currentTarget
    const pageNumber = parseInt(input.value || '', 10)
    if (pageNumber > pagesData) input.value = pagesData.toString()
    else if (pageNumber < 1) input.value = '1'
  }

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSort(e.currentTarget.value))
  }

  return (
    <div className={styles.management} data-testid="management">
      <select className={styles['management-sort']} onChange={handleSort} value={sort} data-testid="sort">
        <option value="id">id</option>
        <option value="alphabet">alphabet</option>
      </select>
      <div className={styles['management-pagination']}>
        <button
          className={styles['management-pagination__button']}
          onClick={handlePrevButton}
          disabled={page === 1 || isError}
          data-testid="prev"
        >
          Prev
        </button>
        <form onSubmit={handlePageSubmit}>
          <input
            className={styles['management-pagination__input']}
            type="number"
            name="pageNumber"
            placeholder={!isError ? `${page}/${pagesData}` : '1/1'}
            onChange={handlePageChange}
          />
        </form>
        <button
          className={styles['management-pagination__button']}
          onClick={handleNextButton}
          disabled={charactersData.length < 20 || isError}
          data-testid="next"
        >
          Next
        </button>
      </div>
    </div>
  )
}
