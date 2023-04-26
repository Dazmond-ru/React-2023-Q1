import { expect, afterEach } from 'vitest'
import matchers from '@testing-library/jest-dom/matchers'
import { server } from './src/data/server'

expect.extend(matchers)

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
})
afterAll(() => server.close())
