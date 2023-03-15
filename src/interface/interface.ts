export interface ICard {
  id: number
  name: string
  status: string
  image: string
  episodes: number
  created: string
  views: number
  likes: number
}

export type ICards = ICard[]
