import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FiHeart, FiEye, FiClock } from 'react-icons/fi'
import { ICard } from '../../interface/interface'

import styles from './Card.module.scss'

class Card extends Component<ICard> {
  constructor(props: ICard) {
    super(props)
  }
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.card__image}>
          <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={this.props.image} />
        </div>
        <div className={styles.card__body}>
          <Link to="#" className={styles.card__name}>
            {this.props.name}
          </Link>
          <p className={styles.card__status}>
            status: <span>{this.props.status}</span>
          </p>
          <p className={styles.card__episodes}>episodes: {this.props.episodes}</p>
        </div>
        <div className={styles.card__stats}>
          <span>
            <FiClock /> {this.props.created}
          </span>
          <span className={styles.card__likes}>
            <FiHeart /> {this.props.likes}
          </span>
          <span>
            <FiEye /> {this.props.views}
          </span>
        </div>
      </div>
    )
  }
}

export default Card
