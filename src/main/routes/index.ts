import { Router } from 'express'

export const routerV1 = Router()

routerV1.get('/test/', (req, res) => {
  res.send({ hello: 'API V1' })
})
