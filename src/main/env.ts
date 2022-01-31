export const appName = process.env.APP_NAME || 'api'
export const port = process.env.PORT || 3000
export const timeoutInMs = Number(process.env.TIMEOUT_MS) || 60 * 60 * 1000
export const environment = process.env.NODE_ENV || 'development'
export const mongoConnectionURI = String(process.env.MONGO_CONNECTION_URI)
export const mongoDatabaseName = String(process.env.MONGO_DATABASE_NAME)
