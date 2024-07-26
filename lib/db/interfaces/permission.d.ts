import { UserRole } from './user';

export interface IPermission {
  id: number;
  name: string;
  guard_name: UserRole;
  actionable_type: string;
  action: string;
  is_restriction: boolean;
  description: string | null;
}

export interface IGrantPermissions {
  permissions: (number | string)[];
}

export interface IUploadPermission {
  name?: string;
  guard_name?: UserRole;
  actionable_type?: string;
  action?: string;
  is_restriction?: boolean;
  description?: string;
}
