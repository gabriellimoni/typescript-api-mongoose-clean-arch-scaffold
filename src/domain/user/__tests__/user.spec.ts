import { IUserData, User, UserRole } from '..'
import { makeMockedUserData } from '../testUtils'

describe('User domain', () => {
  test('Should check if user is admin', () => {
    const adminUserData: IUserData = {
      ...makeMockedUserData(),
      role: UserRole.Admin,
    }
    const adminUser = new User(adminUserData)
    expect(adminUser.isAdmin()).toBeTruthy()

    const basicUserData: IUserData = {
      ...makeMockedUserData(),
      role: UserRole.Basic,
    }
    const basicUser = new User(basicUserData)
    expect(basicUser.isAdmin()).toBeFalsy()
  })
})
