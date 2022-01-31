import { CreateUserDTO } from '@/application/dto/user'
import { BadRequestApplicationError } from '@/application/errors/badRequestError'
import { createUserIsAdminError } from '@/application/errors/errorList'
import { CreateUserRepository } from '@/application/repositories/user'
import { IUserData, UserRole } from '@/domain/models/user'
import { makeMockedUserData } from '@/domain/models/user/testUtils'
import { CreateUserImpl } from '../createUserUsecase'

class MockedCreateUserRepo implements CreateUserRepository {
  async create(user: CreateUserDTO): Promise<void> {}
}

const makeTestData = () => {
  const createUserRepo = new MockedCreateUserRepo()
  const createUserUsecase = new CreateUserImpl(createUserRepo)
  return {
    createUserRepo,
    createUserUsecase,
  }
}

describe('Craete user usecase', () => {
  test('Should call createUserRepository with correct params', async () => {
    const { createUserRepo, createUserUsecase } = makeTestData()
    const createUserRepoSpy = jest.spyOn(createUserRepo, 'create')
    const userToCreate: IUserData = {
      ...makeMockedUserData(),
      role: UserRole.Basic,
    }
    await createUserUsecase.exec(userToCreate)
    expect(createUserRepoSpy).toHaveBeenCalledWith(userToCreate)
  })
  test('Should throw error if role sent is admin', async () => {
    const { createUserRepo, createUserUsecase } = makeTestData()
    const createUserRepoSpy = jest.spyOn(createUserRepo, 'create')
    const userToCreate: IUserData = {
      ...makeMockedUserData(),
      role: UserRole.Admin,
    }
    const promise = createUserUsecase.exec(userToCreate)
    await expect(promise).rejects.toThrow(
      new BadRequestApplicationError('User', createUserIsAdminError)
    )
  })
})
