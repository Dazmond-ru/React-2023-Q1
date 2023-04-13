import React from 'react'

import ResultList from '../../components/ResultList/ResultList'
import Form from '../../components/Form/Form'
import { CardState } from '../../interfaces/interfaces'
import { useSelector } from 'react-redux'
import { getData, setData } from '../../redux/slices/forms'
import { useAppDispatch } from '../../redux/store'

const Forms = () => {
  const data = useSelector(getData)
  const dispatch = useAppDispatch()

  const addCard = (card: CardState) => {
    const newCard = {
      ...card,
    }
    dispatch(setData([...data, newCard]))
  }

  return (
    <div data-testid="forms">
      <Form addCard={addCard} />
      <ResultList data={data} />
    </div>
  )
}

export default Forms
