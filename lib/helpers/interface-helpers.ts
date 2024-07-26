import { UserRole } from '../db/interfaces/user';

export function userIsAdmin(userRole: UserRole) {
  return userRole === 'admin';
}

export function userIsExhibitor(userRole: UserRole) {
  return userRole === 'exhibitor';
}
