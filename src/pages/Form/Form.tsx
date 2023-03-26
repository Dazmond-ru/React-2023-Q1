import React, { Component } from 'react'

import { species } from '../../data/data'

import styles from './Form.module.scss'

class Form extends Component {
  render() {
    const today = new Date().toISOString().slice(0, 10)

    return (
      <div className={styles['card-builder']}>
        <div className={styles['card-builder__wrapper']}>
          <h3 className={styles['card-builder__title']}>Create Card</h3>
          <form className={styles['card-builder__form']}>
            <div className={styles['card-builder__name']}>
              <label className={styles['card-builder__label']} htmlFor="nameInput" defaultValue="">
                Name
              </label>
              <input className={styles['card-builder__input']} id="nameInput" type="text" placeholder="Enter name" />
            </div>

            <div className={styles['card-builder__created']}>
              <label className={styles['card-builder__label']} htmlFor="createdInput">
                Created
              </label>
              <input className={styles['card-builder__input']} id="createdInput" type="date" defaultValue={today} />
            </div>

            <div className={styles['card-builder__species']}>
              <label className={styles['card-builder__label']} htmlFor="speciesInput">
                Species
              </label>
              <select className={styles['card-builder__input']} id="speciesInput">
                {species.map((specie: string) => (
                  <option
                    key={specie}
                    value={specie !== 'Value' ? specie : ''}
                    disabled={specie !== 'Value' ? false : true}
                  >
                    {specie}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles['card-builder__status']}>
              <div className={styles['card-builder__status-item']}>
                <input type="radio" id="aliveInput" name="status" value="Alive" />
                <label htmlFor="aliveInput">Alive</label>
              </div>
              <div className={styles['card-builder__status-item']}>
                <input type="radio" id="deadInput" name="status" value="Dead" />
                <label htmlFor="deadInput">Dead</label>
              </div>
              <div className={styles['card-builder__status-item']}>
                <input type="radio" id="unknownInput" name="status" value="unknown" />
                <label htmlFor="unknownInput">unknown</label>
              </div>
            </div>

            <div className={styles['card-builder__image']}>
              <input id="imageInput" type="file" />
            </div>

            <div className={styles['card-builder__confirm']}>
              <div></div>
              <label>
                <input type="checkbox" id="confirmInput" />I confirm that the information is correct
              </label>
            </div>

            <button className={styles['card-builder__form-button']} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Form
