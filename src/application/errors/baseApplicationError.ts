export class BaseApplicationError extends Error {
  public httpCode: number
  /**
   * Used for logging purposes
   */
  public context: string
  public errorRef?: string
  constructor(
    message: string,
    httpCode: number,
    context: string,
    errorRef?: string
  ) {
    super(message)
    this.httpCode = httpCode
    this.context = context
    this.name = 'BaseApplicationError'
    this.errorRef = errorRef
  }
}
