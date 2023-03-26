import { FormProps, FormState } from 'interfaces/interfaces'
import React, { Component } from 'react'

import { species } from '../../data/data'

import styles from './Form.module.scss'

class Form extends Component<FormProps, FormState> {
  nameInput: React.RefObject<HTMLInputElement>
  createdInput: React.RefObject<HTMLInputElement>
  speciesInput: React.RefObject<HTMLSelectElement>
  aliveInput: React.RefObject<HTMLInputElement>
  deadInput: React.RefObject<HTMLInputElement>
  unknownInput: React.RefObject<HTMLInputElement>
  imageInput: React.RefObject<HTMLInputElement>
  confirmInput: React.RefObject<HTMLInputElement>

  constructor(props: FormProps) {
    super(props)
    this.nameInput = React.createRef()
    this.createdInput = React.createRef()
    this.speciesInput = React.createRef()
    this.aliveInput = React.createRef()
    this.deadInput = React.createRef()
    this.unknownInput = React.createRef()
    this.imageInput = React.createRef()
    this.confirmInput = React.createRef()

    this.state = {
      errors: {
        nameInput: '',
        createdInput: '',
        speciesInput: '',
        statusInput: '',
        imageInput: '',
        confirmInput: '',
      },
      isButtonDisabled: true,
      isCardSaved: false,
    }
  }

  checkValidation = () => {
    const setErrors = {
      nameInput: '',
      createdInput: '',
      speciesInput: '',
      statusInput: '',
      imageInput: '',
      confirmInput: '',
    }

    let isValid = true

    const nameRegex = /^[A-Za-z]+$/

    if (!this.nameInput.current?.value) {
      setErrors.nameInput = 'Please enter name!'
      isValid = false
    } else if (this.nameInput.current!.value!.length < 4 && this.nameInput.current!.value!.length >= 1) {
      setErrors.nameInput = 'Your name must be more than 4 letters!'
      isValid = false
    } else if (!nameRegex.test(this.nameInput.current!.value!)) {
      setErrors.nameInput = 'Your name should only english letters!'
      isValid = false
    } else if (this.nameInput.current!.value!.charAt(0) !== this.nameInput.current!.value!.charAt(0).toUpperCase()) {
      setErrors.nameInput = 'Your name should start with a capital letter!'
      isValid = false
    }

    if (!this.createdInput.current?.value) {
      setErrors.createdInput = 'Please enter created date!'
      isValid = false
    }

    if (!this.speciesInput.current?.value) {
      setErrors.speciesInput = 'Please enter specie!'
      isValid = false
    }

    if (!this.imageInput.current?.value) {
      setErrors.imageInput = 'Please add an image!'
      isValid = false
    }

    if (!this.aliveInput.current?.checked && !this.deadInput.current?.checked && !this.unknownInput.current?.checked) {
      setErrors.statusInput = 'Please choose status!'
      isValid = false
    }

    if (!this.confirmInput.current?.checked) {
      setErrors.confirmInput = 'Confirm if you are agree with!'
      isValid = false
    }

    this.setState({ errors: setErrors })
    return isValid
  }

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (this.checkValidation()) {
      const formData = {
        id: new Date().getTime(),
        name: this.nameInput.current?.value,
        created: this.createdInput.current?.value,
        species: this.speciesInput.current?.value,
        status: this.aliveInput.current?.checked
          ? this.aliveInput.current.value
          : this.deadInput.current?.checked
          ? this.deadInput.current.value
          : this.unknownInput.current?.value,
        image: URL.createObjectURL(this.imageInput.current!.files![0]),
      }

      if (this.props.addCard) this.props.addCard(formData)

      this.setState({ isButtonDisabled: true })
      this.setState({ isCardSaved: true })

      event.currentTarget.reset()

      setTimeout(() => this.setState({ isCardSaved: false }), 3000)
    } else {
      return
    }
  }

  buttonEnabler = () => {
    const error = this.state.errors
    return error.nameInput || error.createdInput || error.speciesInput || error.statusInput || error.confirmInput
      ? true
      : false
  }

  componentDidUpdate = () => {
    if (!this.state.isButtonDisabled) {
      if (this.buttonEnabler()) {
        this.setState({ isButtonDisabled: true })
      }
    }
  }

  handleFocus = (event: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLSelectElement>) => {
    if (event.target.id === 'aliveInput' || event.target.id === 'deadInput' || event.target.id === 'unknownInput') {
      this.setState({
        errors: { ...this.state.errors, statusInput: '' },
      })
    } else {
      this.setState({
        errors: {
          ...this.state.errors,
          [event.target.id]: '',
        },
      })
    }

    if (this.buttonEnabler()) this.setState({ isButtonDisabled: true })
  }

  handleChange = () => {
    this.setState({ isButtonDisabled: false })

    if (this.buttonEnabler()) this.setState({ isButtonDisabled: true })
  }

  render() {
    return (
      <div className={styles['card-builder']}>
        <div className={styles['card-builder__wrapper']}>
          <form className={styles['card-builder__form']} onSubmit={this.handleFormSubmit}>
            <div className={styles['card-builder__name']}>
              <label className={styles['card-builder__label']} htmlFor="nameInput">
                Name
              </label>
              <input
                className={styles['card-builder__input']}
                id="nameInput"
                type="text"
                placeholder="Enter name"
                defaultValue=""
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                ref={this.nameInput}
              />
              <label className={styles['card-builder__errors']}>{this.state.errors.nameInput}</label>
            </div>

            <div className={styles['card-builder__created']}>
              <label className={styles['card-builder__label']} htmlFor="createdInput">
                Created
              </label>
              <input
                className={styles['card-builder__input']}
                id="createdInput"
                type="date"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                ref={this.createdInput}
              />
              <label className={styles['card-builder__errors']}>{this.state.errors.createdInput}</label>
            </div>

            <div className={styles['card-builder__species']}>
              <label className={styles['card-builder__label']} htmlFor="speciesInput">
                Species
              </label>
              <select
                className={styles['card-builder__input']}
                id="speciesInput"
                defaultValue=""
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                ref={this.speciesInput}
              >
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
              <label className={styles['card-builder__errors']}>{this.state.errors.speciesInput}</label>
            </div>

            <div className={styles['card-builder__status']}>
              <div className={styles['card-builder__status-item']}>
                <input
                  type="radio"
                  id="aliveInput"
                  name="status"
                  value="Alive"
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                  ref={this.aliveInput}
                />
                <label htmlFor="aliveInput">Alive</label>
              </div>
              <div className={styles['card-builder__status-item']}>
                <input
                  type="radio"
                  id="deadInput"
                  name="status"
                  value="Dead"
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                  ref={this.deadInput}
                />
                <label htmlFor="deadInput">Dead</label>
              </div>
              <div className={styles['card-builder__status-item']}>
                <input
                  type="radio"
                  id="unknownInput"
                  name="status"
                  value="unknown"
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                  ref={this.unknownInput}
                />
                <label htmlFor="unknownInput">unknown</label>
              </div>
              <label className={styles['card-builder__errors']}>{this.state.errors.statusInput}</label>
            </div>

            <div className={styles['card-builder__image']}>
              <input
                id="imageInput"
                type="file"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                ref={this.imageInput}
              />
              <label style={{ marginTop: '4px' }} className={styles['card-builder__errors']}>
                {this.state.errors.imageInput}
              </label>
            </div>

            <div className={styles['card-builder__confirm']}>
              <label>
                <input
                  type="checkbox"
                  id="confirmInput"
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                  ref={this.confirmInput}
                />
                I confirm that the information is correct
              </label>
              <br />
              <label className={styles['card-builder__errors']}>{this.state.errors.confirmInput}</label>
            </div>

            <button
              className={styles['card-builder__form-button']}
              type="submit"
              disabled={this.state.isButtonDisabled}
            >
              Submit
            </button>
            {this.state.isButtonDisabled && this.state.isCardSaved && (
              <label className={styles['card-builder__success']}>Saved</label>
            )}
          </form>
        </div>
      </div>
    )
  }
}

export default Form
