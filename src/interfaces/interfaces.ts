export interface CardState {
  id: number
  name: string
  status: string
  image: string
  species: string
  created: string
  views?: number
  likes?: number
}

export type CardsState = CardState[]

export type HeaderProps = {
  location: Location
}
