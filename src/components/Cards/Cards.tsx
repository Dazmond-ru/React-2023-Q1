import { data } from '../../data/data'
import React, { Component } from 'react'

import Card from '../Card/Card'

import styles from './Cards.module.scss'
import { CardState } from 'interfaces/interfaces'

class Cards extends Component {
  render() {
    return (
      <div className={styles.cards} data-testid="cards">
        {data.map((item: CardState) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    )
  }
}

export default Cards
