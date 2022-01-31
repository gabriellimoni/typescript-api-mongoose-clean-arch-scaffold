import { environment, mongoConnectionURI, mongoDatabaseName } from '@/main/env'
import { MONGOOSE_CONNECTION_CONTEXT } from '@/utils/log/logContexts'
import log from '@/utils/log'
import mongoose from 'mongoose'

export const initMongo = async (): Promise<void> => {
  log.info(MONGOOSE_CONNECTION_CONTEXT, 'INITIALIZING MONGOOSE')
  mongoose.connection.on('error', (err) => {
    log.error(
      MONGOOSE_CONNECTION_CONTEXT,
      'MONGOOSE CONNECTION ERROR',
      `${err}`
    )
  })
  mongoose.connection.on('connected', () => {
    log.info(MONGOOSE_CONNECTION_CONTEXT, 'MONGOOSE CONNECTED SUCCESSFULLY')
  })
  mongoose.set('debug', environment !== 'production')
  await mongoose.connect(mongoConnectionURI, {
    keepAlive: true,
    dbName: mongoDatabaseName,
  })
}

export const closeMongo = async (): Promise<void> => {
  await mongoose.connection.close(true)
}
