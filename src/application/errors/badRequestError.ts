import { makeBadRequestErrorContext } from '@/utils/log/logContexts'
import { BaseApplicationError } from './baseApplicationError'
import { CustomError } from './errorList'

export class BadRequestApplicationError extends BaseApplicationError {
  constructor(public readonly entity: string, customError: CustomError) {
    super(
      customError.message,
      400,
      makeBadRequestErrorContext(entity),
      customError.errorRef
    )
    this.name = 'BadRequestApplicationError'
  }
}
