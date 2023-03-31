import React, { useState } from 'react'

import Cards from '../../components/Cards/Cards'
import Form from '../../components/Form/Form'
import { CardState } from '../../interfaces/interfaces'

const Forms = () => {
  const [cards, setCards] = useState<CardState[]>([])

  const addCard = (card: CardState) => {
    const newCard = {
      ...card,
      likes: 0,
      views: 0,
    }
    setCards([...cards, newCard])
  }

  return (
    <div data-testid="forms">
      <Form addCard={addCard} />
      <Cards cardData={cards} />
    </div>
  )
}

export default Forms
