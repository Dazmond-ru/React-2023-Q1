import express from 'express'
import fs from 'fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { ViteDevServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = process.cwd()

async function createServer() {
  const resolve = (p: string) => path.resolve(__dirname, p)

  const app = express()

  const vite: ViteDevServer = await (
    await import('vite')
  ).createServer({
    root,
    server: {
      middlewareMode: true,
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
    appType: 'custom',
  })

  app.use(vite.middlewares)

  app.use('*', async (req, res) => {
    const url = req.originalUrl
    try {
      let template: string
      template = await fs.readFile(resolve('../../index.html'), 'utf8')
      template = await vite.transformIndexHtml(url, template)
      const render = await vite.ssrLoadModule('src/entry-server.tsx').then((m) => m.render)
      const parts = template.split('<!--app-html-->')
      try {
        res.write(parts[0])
        const stream = render(req, {
          onShellReady() {
            stream.pipe(res)
          },
          onAllReady() {
            res.write(parts[1])
            res.end()
          },
        })
      } catch (err) {
        if (err instanceof Response && err.status >= 300 && err.status <= 399) {
          return res.redirect(err.status, err.headers.get('Location')!)
        }
        throw err
      }
    } catch (err) {
      if (err instanceof Error) {
        vite.ssrFixStacktrace(err)
        console.log(err.stack)
        res.status(500).end(err.stack)
        return
      }
      console.log(err)
    }
  })
  return app
}

createServer().then((app) => {
  app.listen(3000, () => {
    console.log('HTTP server is running at http://localhost:3000')
  })
})
