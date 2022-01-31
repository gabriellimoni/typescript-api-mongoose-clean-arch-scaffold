export interface CustomError {
  errorRef: string
  message: string
}

export const createUserIsAdminError: CustomError = {
  errorRef: 'user:create:is-admin',
  message: 'Cannot create admin user',
}

export const errorList: CustomError[] = [createUserIsAdminError]
