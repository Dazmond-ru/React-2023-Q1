import { FormProps } from 'interfaces/interfaces'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { species } from '../../data/data'
import styles from './Form.module.scss'

interface FormData {
  name: string
  created: string
  species: string
  status: string
  image: FileList
  confirm: boolean
}

const Form = ({ addCard }: FormProps) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitSuccessful },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      created: '',
      species: '',
      status: '',
    },
    mode: 'onSubmit',
  })

  useEffect(() => {
    if (isSubmitSuccessful) {
      setTimeout(() => {
        reset()
      }, 1000)
    }
  }, [isSubmitSuccessful, reset])

  const onSubmit: SubmitHandler<FormData> = ({ name, created, species, status, image }, e) => {
    const newCard = {
      id: new Date().getTime(),
      name,
      created,
      species,
      status,
      image: URL.createObjectURL(image[0]),
    }

    if (addCard) {
      addCard(newCard)
      e?.target.reset()
    }
  }

  return (
    <div className={styles['card-builder']}>
      <div className={styles['card-builder__wrapper']}>
        <form className={styles['card-builder__form']} onSubmit={handleSubmit(onSubmit)} data-testid="form">
          <div className={styles['card-builder__name']}>
            <label className={styles['card-builder__label']} htmlFor="nameInput">
              Name
            </label>
            <input
              className={styles['card-builder__input']}
              id="nameInput"
              type="text"
              placeholder="Enter name"
              {...register('name', {
                required: 'Please enter name!',
                minLength: {
                  value: 4,
                  message: 'Your name must be more than 4 letters!',
                },
                pattern: {
                  value: /^[A-Za-z ]+$/,
                  message: 'Your name should only english letters!',
                },
                validate: (value) =>
                  value[0] === value[0].toUpperCase() ? true : 'Your name should start with a capital letter!',
              })}
              data-testid="nameInput"
            />
            {errors.name && <label className={styles['card-builder__errors']}>{errors.name.message}</label>}
          </div>

          <div className={styles['card-builder__created']}>
            <label className={styles['card-builder__label']} htmlFor="createdInput">
              Created
            </label>
            <input
              className={styles['card-builder__input']}
              id="createdInput"
              type="date"
              {...register('created', {
                required: 'Please enter created date!',
                max: {
                  value: new Date().toISOString().split('T')[0],
                  message: 'Please enter a date not in the future',
                },
              })}
            />
            {errors.created && <label className={styles['card-builder__errors']}>{errors.created.message}</label>}
          </div>

          <div className={styles['card-builder__species']}>
            <label className={styles['card-builder__label']} htmlFor="speciesInput">
              Species
            </label>
            <select
              className={styles['card-builder__input']}
              id="speciesInput"
              defaultValue=""
              {...register('species', { required: 'Please select species!' })}
            >
              {species.map((specie) => (
                <option
                  key={specie}
                  value={specie !== 'Value' ? specie : ''}
                  disabled={specie !== 'Value' ? false : true}
                >
                  {specie}
                </option>
              ))}
            </select>
            {errors.species && <label className={styles['card-builder__errors']}>{errors.species.message}</label>}
          </div>

          <div className={styles['card-builder__status']}>
            <div className={styles['card-builder__status-item']}>
              <input
                type="radio"
                id="aliveInput"
                value="Alive"
                {...register('status', {
                  required: 'Please choose status!',
                })}
              />
              <label htmlFor="aliveInput">Alive</label>
            </div>
            <div className={styles['card-builder__status-item']}>
              <input
                type="radio"
                id="deadInput"
                value="Dead"
                {...register('status', {
                  required: 'Please choose status!',
                })}
              />
              <label htmlFor="deadInput">Dead</label>
            </div>
            <div className={styles['card-builder__status-item']}>
              <input
                type="radio"
                id="unknownInput"
                value="unknown"
                {...register('status', {
                  required: 'Please choose status!',
                })}
              />
              <label htmlFor="unknownInput">unknown</label>
            </div>
            {errors.status && <label className={styles['card-builder__errors']}>{errors.status.message}</label>}
          </div>

          <div className={styles['card-builder__image']}>
            <input
              id="imageInput"
              type="file"
              {...register('image', {
                required: 'Please add an image!',
              })}
            />
            {errors.image && <label className={styles['card-builder__errors']}>{errors.image.message}</label>}
          </div>

          <div className={styles['card-builder__confirm']}>
            <input
              className={styles['card-builder__checkbox']}
              id="confirmInput"
              type="checkbox"
              {...register('confirm', { required: 'Confirm if you are agree with!' })}
              data-testid="confirmInput"
            />
            <label className={styles['card-builder__label']} htmlFor="confirmInput">
              I confirm that the information is correct
            </label>
            {errors.confirm && <label className={styles['card-builder__errors']}>{errors.confirm.message}</label>}
          </div>

          {!isSubmitSuccessful ? (
            <button
              className={styles['card-builder__form-button']}
              value="Submit"
              disabled={!isDirty}
              data-testid="submit"
            >
              Submit
            </button>
          ) : (
            <button className={styles['card-builder__success']} type="button" value="Saved">
              Saved
            </button>
          )}
        </form>
      </div>
    </div>
  )
}

export default Form
