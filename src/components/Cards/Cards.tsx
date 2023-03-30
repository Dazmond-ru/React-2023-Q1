import React from 'react'
import Card from '../Card/Card'
import styles from './Cards.module.scss'
import { CardsType } from '../../interfaces/interfaces'

interface CardsProps {
  cardData?: CardsType['cardData']
}

const Cards = ({ cardData }: CardsProps) => {
  return (
    <div className={styles.cards} data-testid="cards">
      {cardData?.map((item) => (
        <Card key={item.id} card={item} />
      ))}
    </div>
  )
}

export default Cards
