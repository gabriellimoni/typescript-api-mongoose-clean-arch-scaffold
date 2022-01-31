import { CreateUserDTO } from '@/application/dto/user'
import { BadRequestApplicationError } from '@/application/errors/badRequestError'
import { createUserIsAdminError } from '@/application/errors/errorList'
import { CreateUserRepository } from '@/application/repositories/user'
import { UserRole } from '@/domain/models/user'
import { BaseUsecase } from '../baseUsecase'

export interface CreateUserUsecase extends BaseUsecase<CreateUserDTO> {}

export class CreateUserImpl implements CreateUserUsecase {
  constructor(private readonly createUserRepo: CreateUserRepository) {}
  async exec(params: CreateUserDTO): Promise<void> {
    if (params.role === UserRole.Admin) {
      throw new BadRequestApplicationError('User', createUserIsAdminError)
    }
    await this.createUserRepo.create(params)
  }
}
