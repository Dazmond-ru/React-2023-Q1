import express from 'express'
import { createServer } from 'vite'

import fs from 'fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const indexHTMLPath = path.resolve(__dirname, '../../index.html')

async function startServer() {
  const app = express()
  const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' })

  app.use(vite.middlewares)

  app.use('*', async (req, res) => {
    const url = req.originalUrl

    try {
      const indexHTML = fs.readFileSync(indexHTMLPath, 'utf8')
      const transformHTML = await vite.transformIndexHtml(url, indexHTML)
      const [startHTML, endHTML] = transformHTML.split('<!--app-html-->')

      const serverRenderer = (await vite.ssrLoadModule('./src/entry-server.tsx')).render

      try {
        res.write(startHTML)
        const stream = serverRenderer(url, {
          onShellReady() {
            stream.pipe(res)
          },
          onAllReady() {
            res.write(endHTML)
            res.end()
          },
        })
      } catch (error) {
        console.error(error)
      }
    } catch (error) {
      console.error(error)
    }
  })

  return app
}

startServer().then((app) => {
  app.listen(3000, () => {
    console.log('HTTP server is running at http://localhost:3000')
  })
})
