export const MONGOOSE_CONNECTION_CONTEXT = 'mongoose:connection'
export const API_INFO_CONTEXT = 'api:info'

export const makeBadRequestErrorContext = (entity: string) =>
  `error:${entity}:bad-request`
