import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FiHeart, FiEye, FiClock } from 'react-icons/fi'
import { CardState } from '../../interfaces/interfaces'

import styles from './Card.module.scss'

class Card extends Component<CardState> {
  constructor(props: CardState) {
    super(props)
  }
  render() {
    return (
      <div className={styles.card} data-testid="card">
        <div className={styles.card__image} data-testid="card-image">
          <img src={this.props.image} />
        </div>
        <div className={styles.card__body} data-testid="card-body">
          <Link to="#" className={styles.card__name}>
            {this.props.name}
          </Link>
          <p className={styles.card__status}>
            status: <span>{this.props.status}</span>
          </p>
          <p className={styles.card__episodes}>species: {this.props.species}</p>
        </div>
        <div className={styles.card__stats} data-testid="card-stats">
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
