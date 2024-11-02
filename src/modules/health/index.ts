import { Router } from "express";

const healthEndpoints = Router()

healthEndpoints.get('/health', (_, res) => {
  res.json({
    status: 'UP'
  })
})

export default healthEndpoints