import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CardState } from '../../interfaces/interfaces'
import styles from './Card.module.scss'
import PopupCard from '../../components/PopupCard/PopupCard'

interface CardProps {
  card: CardState
}

const Card = ({ card }: CardProps) => {
  const [showPopup, setShowPopup] = useState(false)
  const formatDateCreated = card.created?.split('T')[0].split('-').reverse().join('/')

  const handleCardClick = () => {
    setShowPopup(true)
  }

  const handleCrossClick = () => {
    setShowPopup(false)
  }

  return (
    <>
      <div className={styles.card} onClick={handleCardClick} data-testid="card">
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
          <span>{formatDateCreated}</span>
        </div>
      </div>
      {showPopup && <PopupCard cardId={card.id} onClose={handleCrossClick} />}
    </>
  )
}

export default Card
