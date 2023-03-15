import { data } from '../../data/data'
import React, { Component } from 'react'

import Card from '../Card/Card'

import styles from './Cards.module.scss'
import { ICard } from 'interface/interface'

class Cards extends Component {
  render() {
    return (
      <div className={styles.cards}>
        {data.map((item: ICard) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    )
  }
}

export default Cards
