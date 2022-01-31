import { appName, environment } from '@/main/env'
import { LoggingWinston } from '@google-cloud/logging-winston'
import { Metadata } from '@google-cloud/logging-winston/build/src/common'
import winston from 'winston'

const gcpLoggingWinston = new LoggingWinston({
  prefix: appName,
  logName: appName,
})
const logger = winston.createLogger({
  transports: [],
})
if (shouldLogOnCloud()) {
  console.log('-- LOGGING ON CLOUD --')
  logger.add(gcpLoggingWinston)
} else {
  logger.add(new winston.transports.Console())
}

function shouldLogOnCloud(): boolean {
  if (process.env.RUNNING_LOCALLY) return false
  if (environment === 'test') return false
  return true
}

export interface LogParams {
  type: 'info' | 'error' | 'debug'
  /**
   * Determining context is one simply way to group and filter logs.
   */
  context: string
}

export const log = (params: LogParams, ...logTexts: string[]) => {
  const metadata: Metadata = {
    labels: {
      context: params.context,
      timestamp: `${Date.now()}`,
      env: environment,
    },
  }
  logger.log(params.type, logTexts.join(' '), metadata)
}

export default {
  info: (context: string, ...logTexts: string[]) =>
    log({ type: 'info', context }, ...logTexts),
  error: (context: string, ...logTexts: string[]) =>
    log({ type: 'error', context }, ...logTexts),
  debug: (context: string, ...logTexts: string[]) =>
    log({ type: 'debug', context }, ...logTexts),
}
