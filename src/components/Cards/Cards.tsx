import React, { Component } from 'react'

import Card from '../Card/Card'

import styles from './Cards.module.scss'
import { CardsType } from '../../interfaces/interfaces'

class Cards extends Component<CardsType> {
  constructor(props: CardsType) {
    super(props)
  }

  render() {
    return (
      <div className={styles.cards} data-testid="cards">
        {this.props.cardData?.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    )
  }
}

export default Cards
