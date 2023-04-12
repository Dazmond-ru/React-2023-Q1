import React from 'react'
import Card from '../Card/Card'
import styles from './ResultList.module.scss'

import { CardState } from 'interfaces/interfaces'

type CardsProps = {
  data: CardState[]
}

const ResultList = ({ data }: CardsProps) => {
  return (
    <div className={styles.cards} data-testid="cards">
      {data.map((item) => (
        <Card key={item.id} card={item} />
      ))}
    </div>
  )
}

export default ResultList
