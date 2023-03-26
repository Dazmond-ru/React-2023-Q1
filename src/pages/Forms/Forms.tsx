import React, { Component } from 'react'

import Cards from '../../components/Cards/Cards'
import Form from '../../components/Form/Form'
import { CardState, FormsState } from '../../interfaces/interfaces'

class Forms extends Component<Record<string, unknown>, FormsState> {
  constructor(props: Record<string, unknown> | Readonly<Record<string, unknown>>) {
    super(props)
    this.state = {
      cards: [],
    }
  }

  addCard = (card: CardState) => {
    const { cards } = this.state
    const newCard = {
      ...card,
      likes: 0,
      views: 0,
    }
    const updatedCards = [...cards, newCard]
    this.setState({ cards: updatedCards })
  }

  render() {
    return (
      <div>
        <Form addCard={this.addCard} />
        <Cards cardData={this.state.cards} />
      </div>
    )
  }
}

export default Forms
