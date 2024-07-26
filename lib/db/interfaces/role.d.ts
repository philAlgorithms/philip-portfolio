import { UserRole } from './user';

export interface IRole {
  id: number;
  name: string;
  guard_name: UserRole;
  description: string | null;
}

export interface IAssignRoles {
  roles: (number | string)[];
}

export interface IUploadRole {
  name?: string;
  guard_name?: UserRole;
  description?: string;
}
