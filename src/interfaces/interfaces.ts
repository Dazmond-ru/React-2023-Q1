export interface CardState {
  id?: number
  name?: string
  status?: string
  image?: string
  species?: string
  created?: string
  views?: number
  likes?: number
}

export type CardsType = { cardData?: CardState[] }

export type HeaderProps = {
  location: Location
}

export interface FormsState {
  cards: CardState[]
}

export interface FormState {
  errors: {
    nameInput: string
    createdInput: string
    speciesInput: string
    statusInput: string
    imageInput: string
    confirmInput: string
  }
  isButtonDisabled: boolean
  isCardSaved: boolean
}

export type FormProps = {
  addCard?: (cardData: CardState) => void
}
