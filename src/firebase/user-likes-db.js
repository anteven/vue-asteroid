import GenericDB from './generic-db'

export default class UserLikesDB extends GenericDB {
  constructor(userId) {
    super(`users/${userId}/likes`)
  }
}
