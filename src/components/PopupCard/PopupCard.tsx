import React from 'react'
import { useGetCharacterByIdQuery } from '../../redux/api/api'
import styles from './PopupCard.module.scss'

import preloader from '../../assets/preloader.gif'

interface CardProps {
  cardId: number
  onClose: () => void
}

const PopupCard = ({ cardId, onClose }: CardProps) => {
  const { data: card, isFetching } = useGetCharacterByIdQuery({ id: cardId })

  const formatDateCreated = card?.created?.split('T')[0].split('-').reverse().join('/')
  const episodes = card?.episode?.map((episode) => episode.split('/')[episode.split('/').length - 1]).join(', ')

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }

  return (
    <div className={styles['popup-card__wrapper']} onClick={onClose} data-testid="popup">
      {isFetching ? (
        <div className={styles['preloader']}>
          <img src={preloader} alt="preloader" />
        </div>
      ) : (
        <div className={styles['popup-card']} onClick={handleCardClick}>
          <div className={styles['popup-card__cross']} onClick={onClose} data-testid="card-cross"></div>

          <div className={styles['popup-card__image']}>
            <img src={card?.image} alt={card?.name} />
          </div>

          <div className={styles['popup-card__right']}>
            <h2 className={styles['popup-card__name']}>{card?.name}</h2>
            <p className={styles['popup-card__status']}>status: {card?.status}</p>
            <p className={styles['popup-card__species']}>species: {card?.species}</p>
            <p className={styles['popup-card__gender']}>gender: {card?.gender}</p>
            <p className={styles['popup-card__location']}>location: {card?.location?.name}</p>
            <p className={styles['popup-card__episodes']}>episodes: {episodes}</p>
            <p className={styles['popup-card__created']}>created: {formatDateCreated}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default PopupCard
