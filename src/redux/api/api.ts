import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiResponse } from '../../interfaces/interfaces'

export const api = createApi({
  reducerPath: 'characters',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (search) => `character/?&name=${search}`,
      transformResponse: (response: ApiResponse) => response.results,
    }),
  }),
})

export const { useGetCharactersQuery } = api

export const charactersReducer = api.reducer
