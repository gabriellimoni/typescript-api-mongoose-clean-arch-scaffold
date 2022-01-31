import { CreateUserDTO } from '@/application/dto/user'

export interface CreateUserRepository {
  create: (userData: CreateUserDTO) => Promise<void>
}
