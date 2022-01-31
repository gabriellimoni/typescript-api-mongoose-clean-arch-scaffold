import cors from 'cors'
import express from 'express'
import qs from 'querystring'
import { routerV1 } from './routes'

const app = express()

app.set('query parser', qs.parse)
app.use(cors())

app.use('/api/v1/', routerV1)
app.get('/api/', (req, res) => res.send('Hello Scaffold API!'))

export default app
