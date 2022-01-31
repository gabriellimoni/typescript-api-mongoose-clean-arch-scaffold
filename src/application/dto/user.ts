import { IUserData } from '@/domain/models/user'

export interface CreateUserDTO
  extends Pick<
    IUserData,
    'firstName' | 'lastName' | 'documentNumber' | 'email' | 'password' | 'role'
  > {}
