import React from 'react'
import Card from '../Card/Card'
import styles from './ResultList.module.scss'
import { CardsType } from '../../interfaces/interfaces'

interface CardsProps {
  cardData?: CardsType['cardData']
  errorMessage: string
}

const ResultList = ({ cardData, errorMessage }: CardsProps) => {
  return (
    <div className={styles.cards} data-testid="cards">
      {errorMessage ? errorMessage : cardData?.map((item) => <Card key={item.id} card={item} />)}
    </div>
  )
}

export default ResultList
