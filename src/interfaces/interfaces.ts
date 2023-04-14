export interface ApiResponse {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: CardState[]
}

export interface CardState {
  id: number
  name: string
  status?: string
  image?: string
  species?: string
  gender?: string
  location?: {
    name?: string
  }
  episode?: string[]
  created?: string
}
