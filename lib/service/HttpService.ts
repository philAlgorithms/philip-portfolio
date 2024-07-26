import {
  HttpStatusCode as AxiosHttpStatusCode,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import axios from '../axios/axios';

export const baseURL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
export interface Headers {
  [key: string]: string;
}

// export interface FireRequestProps {
//   body?: any;
//   url?: string;
//   method: HttpMethod;
//   headers?: Headers;
//   responseType?: ResponseType;
// }

export enum HttpMethod {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export enum LowerCaseMethod {
  get = 'get',
  delete = 'delete',
  head = 'head',
  options = 'options',
  post = 'post',
  put = 'put',
  patch = 'patch',
  postForm = 'postForm',
  putForm = 'putForm',
  patchForm = 'patchForm',
}

export enum ExtendedHttpStatusCode {
  Expired = 419,
}

export type HttpStatusCode = AxiosHttpStatusCode | ExtendedHttpStatusCode;

export class HttpError extends Error {
  constructor(
    private statusCode: HttpStatusCode,
    private data?: { [key: string]: any } | any
  ) {
    super('Http Error occurred');
  }

  getStatusCode(): HttpStatusCode {
    return this.statusCode;
  }

  getData(): { [key: string]: any } | undefined {
    return this.data;
  }
}

export default class HttpService {
  constructor(
    private client: AxiosInstance = axios //.create({ // baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL, // headers: { //   'X-Requested-With': 'XMLHttpRequest', // }, // withCredentials: true, // })
  ) {}

  /**
   * Since it's not not yet clear why axios has to define the second generic type as AxiosResponse<T>,
   * we will only pass two generic types: T and D. The following methods will then return Promise<R>
   * where R = AxiosResponse<T>
   */
  async get<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>) {
    return await this.fireReadRequest<T, D>(url, LowerCaseMethod.get, config);
  }

  async post<T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
    getCsrf?: boolean
  ) {
    if (config === undefined) config = { data };
    else config.data = data;

    return await this.fireWriteRequest<T, D>(
      url,
      LowerCaseMethod.post,
      config,
      getCsrf
    );
  }

  async put<T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ) {
    if (config !== undefined) config.data = data;
    return await this.fireWriteRequest<T, D>(url, LowerCaseMethod.put, config);
  }

  async delete<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>) {
    return await this.fireReadRequest<T, D>(
      url,
      LowerCaseMethod.delete,
      config
    );
  }

  async patch<T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ) {
    if (config !== undefined) config.data = data;
    return await this.fireWriteRequest<T, D>(
      url,
      LowerCaseMethod.patch,
      config
    );
  }

  async head<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>) {
    return await this.fireReadRequest<T, D>(url, LowerCaseMethod.head, config);
  }

  /**
   * This function does not handle exceptions. These exceptions are supposed to be handled
   * by error handlers like toasters and modals
   *
   * @param url
   * @param method
   * @param fireRequestProps
   *
   * @returns
   */
  async fireReadRequest<T = any, D = any>(
    url: string,
    method: 'get' | 'delete' | 'options' | 'head',
    fireRequestProps?: AxiosRequestConfig<D>
  ): Promise<AxiosResponse<T>> {
    const response = await this.client[method]<T, AxiosResponse<T>, D>(url, {
      ...fireRequestProps,
      responseType: fireRequestProps?.responseType || 'json',
    });

    // if (fireRequestProps.responseType) {
    return response;
    // }
    // return response.data;
  }
  async fireWriteRequest<T = any, D = any>(
    url: string,
    method: 'post' | 'patch' | 'put' | 'putForm' | 'postForm' | 'patchForm',
    fireRequestProps?: AxiosRequestConfig<D>,
    getCsrf?: boolean
  ): Promise<AxiosResponse<T>> {
    const data = fireRequestProps?.data;
    getCsrf = getCsrf == undefined ? true : getCsrf;
    if (fireRequestProps !== undefined && data instanceof FormData) {
      fireRequestProps.headers = {
        ...(fireRequestProps.headers ?? {}),
        'Content-Type': 'multipart/form-data',
      };
    }
    const response = getCsrf
      ? this.client.get('/sanctum/csrf-cookie').then(async (r) => {
          return await this.client[method]<T, AxiosResponse<T>, D>(
            url,
            fireRequestProps?.data,
            {
              ...fireRequestProps,
              responseType: fireRequestProps?.responseType || 'json',
            }
          );
        })
      : this.client[method]<T, AxiosResponse<T>, D>(
          url,
          fireRequestProps?.data,
          {
            ...fireRequestProps,
            responseType: fireRequestProps?.responseType || 'json',
          }
        );
    return response;
  }

  async fetch(input: any, init?: any) {
    input =
      typeof input == 'string'
        ? `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/${input}`
        : input;
    return await fetch(input, init);
  }

  async fireCookieRequest<T = any>(response: Promise<AxiosResponse<T>>) {
    return this.client.get('/sanctum/csrf-cookie').then(async (r) => {
      return await response;
    });
  }

  async fetchCsrfCookie() {
    return fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/sanctum/csrf-cookie`,
      {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
