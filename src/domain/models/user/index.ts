export enum UserRole {
  Admin = 'admin',
  Basic = 'basic',
}

export interface IUserData {
  id: string
  documentNumber: string
  email: string
  firstName: string
  lastName: string
  role: UserRole
  password?: string
}

export class User {
  constructor(private userData: IUserData) {}

  isAdmin() {
    return this.userData.role === UserRole.Admin
  }

  toJSON() {
    return this.userData
  }
}
