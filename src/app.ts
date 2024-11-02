import express, { Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import api from './api'
import { ApiError } from './api-error'

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())

app.use('/api/v1', api)

function handleErrors(err: ApiError, req: Request, res: Response, next: NextFunction) {
  res.status(err.statusCode)
  res.json({
    message: err.message
  })
}

app.use(handleErrors)

export default app