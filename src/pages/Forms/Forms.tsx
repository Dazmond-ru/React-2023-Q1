import React, { useState } from 'react'

import ResultList from '../../components/ResultList/ResultList'
import Form from '../../components/Form/Form'
import { CardState } from '../../interfaces/interfaces'

const Forms = () => {
  const [cards, setCards] = useState<CardState[]>([])

  const addCard = (card: CardState) => {
    const newCard = {
      ...card,
    }
    setCards([...cards, newCard])
  }

  return (
    <div data-testid="forms">
      <Form addCard={addCard} />
      <ResultList cardData={cards} errorMessage={''} />
    </div>
  )
}

export default Forms
