import { IAdmin } from './admin';
import { IClient } from './client';
import { ITalent } from './talent';

export interface IUser {
  id: number;
  email: string;
  name: string;
  first_name: string;
  last_name: string;
  avatar_url: string | null;
  is_admin: boolean;
  is_exhibitor: boolean;
}
export declare type TUser = IAdmin | IClient | ITalent;
export declare type UserRole = 'admin' | 'exhibitor';

export interface ILogin {
  email?: string;
  password?: string;
  remember?: boolean;
}

export interface IEmailLogin {
  email?: string;
}

export interface IRegisterUser {
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
  agreed_to_terms?: boolean;
}

export interface IForgotPassword {
  email?: string;
}

export interface IResetPassword {
  email?: string;
  token?: string;
  password?: string;
  password_confirmation?: string;
}

export interface IUpdateUserName {
  first_name?: string;
  last_name?: string;
}

export type TGender = 'male' | 'female';
