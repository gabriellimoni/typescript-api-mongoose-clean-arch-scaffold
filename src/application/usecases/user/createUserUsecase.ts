import { CreateUserDTO } from '@/application/dto/user'
import { CreateUserRepository } from '@/application/repositories/user'
import { IUserData } from '@/domain/models/user'
import { BaseUsecase } from '../baseUsecase'

export interface CreateUserUsecase extends BaseUsecase<CreateUserDTO> {}

export class CreateUserImpl implements CreateUserUsecase {
  constructor(private readonly createUserRepo: CreateUserRepository) {}
  async exec(params: CreateUserDTO): Promise<void> {
    //
  }
}
