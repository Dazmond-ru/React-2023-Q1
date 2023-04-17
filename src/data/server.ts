import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { data } from './data'

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ info: { pages: 42 }, results: data }))
  }),
  rest.get('https://rickandmortyapi.com/api/character/1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ results: data[0] }))
  })
)

export { server }
