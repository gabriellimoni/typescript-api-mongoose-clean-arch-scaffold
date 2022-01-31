import { IUserData, UserRole } from '.'
import Chance from 'chance'
const chance = new Chance()

export const makeMockedUserData = (): IUserData => ({
  id: chance.string(),
  documentNumber: chance.string(),
  email: chance.email(),
  firstName: chance.name({ full: false }),
  lastName: chance.name({ middle: true }),
  role: UserRole.Admin,
})
