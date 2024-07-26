import { EloquentResponse } from '@/lib/db/interfaces/response';
import { IUpdateUserName, IUser } from '@/lib/db/interfaces/user';
import { handlePUTRequest } from '@/lib/helpers/request-helpers';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { GetServerSidePropsContext } from 'next';
import QueryService from '../../QueryService';

export function isUser(object: any): object is IUser {
  return (
    object != undefined &&
    'is_admin' in object &&
    'is_exhibitor' in object &&
    // 'is_talent' in object &&
    'first_name' in object &&
    'last_name' in object &&
    'email' in object
  );
}
export function isAdmin(object: any): object is IUser {
  return isUser(object) && object.is_admin;
}
export function isExhibitor(object: any): object is IUser {
  return isUser(object) && object.is_exhibitor;
}

export default class UserService {
  constructor(private queryService: QueryService) {}

  async get(config?: AxiosRequestConfig<IUser>) {
    const request = this.queryService
      .get<EloquentResponse<IUser>>(`user`, config)
      .then((r) => {
        return r;
      });

    request.catch((e) => {
      // return console.log(e);
    });

    return await request;
  }
  async handleServerSideAuth(
    context: GetServerSidePropsContext
  ): Promise<IUser> {
    return new Promise<IUser>((resolve, reject) => {
      const { req } = context;
      const headers = {
        Cookie: req.headers.cookie,
      };

      const userResponse = this.get({ headers })
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((e: AxiosError) => {
          reject(userResponse);
        });
    });
  }

  async fetch(cookie?: string) {
    const res = await this.queryService.fetch('user', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Cookie: `${process.env.NEXT_PUBLIC_BACKEND_COOKIE_NAME}=${cookie}`,
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json() as Promise<EloquentResponse<IUser>>;
  }

  async updateUserName(
    user: IUser,
    params: IUpdateUserName,
    config?: AxiosRequestConfig<IUpdateUserName | FormData>
  ) {
    const request = this.queryService.post<EloquentResponse<IUser>>(
      `/users/${user.id}`,
      handlePUTRequest(params),
      {
        ...config,
        headers: {
          Accept: 'application/json',
        },
      }
    );

    return await request;
  }
}
