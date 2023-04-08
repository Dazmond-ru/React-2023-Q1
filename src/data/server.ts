import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { data } from './data'

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ results: data }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

export { server, rest }
