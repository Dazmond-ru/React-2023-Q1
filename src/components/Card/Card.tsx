import React from 'react'
import { Link } from 'react-router-dom'
import { FiClock } from 'react-icons/fi'
import { CardState } from '../../interfaces/interfaces'
import styles from './Card.module.scss'

interface CardProps {
  card: CardState
}

const Card = ({ card }: CardProps) => {
  const formatDateCreated = card.created?.split('T')[0].split('-').reverse().join('/')

  return (
    <div className={styles.card} data-testid="card">
      <div className={styles.card__image} data-testid="card-image">
        <img src={card.image} />
      </div>
      <div className={styles.card__body} data-testid="card-body">
        <Link to="#" className={styles.card__name}>
          {card.name}
        </Link>
        <p className={styles.card__status}>
          status: <span>{card.status}</span>
        </p>
        <p className={styles.card__species}>species: {card.species}</p>
      </div>
      <div className={styles.card__stats} data-testid="card-stats">
        <span>
          <FiClock /> {formatDateCreated}
        </span>
      </div>
    </div>
  )
}

export default Card
