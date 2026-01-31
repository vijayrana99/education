import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { errorHandler } from './middlewares/errorHandler.middleware'
import { routes } from './routes'
import { config } from './lib/config'

const app: Application = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.use('/api/v1', routes)
app.use(errorHandler)

const PORT = config.port

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`Health check: http://localhost:${PORT}/health`)
})

export default app
