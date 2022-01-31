if (process.env.PARSE_MODULES) require('module-alias')('.')

import { initMongo } from './infra/mongoose'
import app from './main/app'
import { port, timeoutInMs } from './main/env'
import { API_INFO_CONTEXT } from './utils/log/logContexts'
import log from './utils/log'

Promise.resolve()
  .then(() => {
    const server = app.listen(port, () => {
      log.info(API_INFO_CONTEXT, `Running API on port ${port}`)
    })
    server.setTimeout(timeoutInMs)
  })
  .catch((err) => {
    log.error(
      API_INFO_CONTEXT,
      'Error on mongo initializing.',
      `error=${err}`,
      `message=${err?.mesage}`
    )
  })
