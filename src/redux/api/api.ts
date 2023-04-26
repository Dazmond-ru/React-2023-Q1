import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiResponse, CardState } from '../../interfaces/interfaces'

interface GetCharactersArgs {
  search: string
  page: number
}

export const api = createApi({
  reducerPath: 'characters',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<CardState[], GetCharactersArgs>({
      query: (args) => ({
        url: 'character',
        params: {
          name: args.search,
          page: args.page,
        },
      }),
      transformResponse: (response: ApiResponse) => response.results,
    }),
    getPages: builder.query<number, GetCharactersArgs>({
      query: (args) => ({
        url: 'character',
        params: {
          name: args.search,
          page: args.page,
        },
      }),
      transformResponse: (response: ApiResponse) => response.info.pages,
    }),
    getCharacterById: builder.query<CardState, { id: number }>({
      query: (args) => ({
        url: `character/${args.id}`,
      }),
    }),
  }),
})

export const { useGetCharactersQuery, useGetPagesQuery, useGetCharacterByIdQuery } = api

export const charactersReducer = api.reducer
