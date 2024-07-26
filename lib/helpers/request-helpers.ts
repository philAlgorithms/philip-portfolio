import { portfolioConfig } from '@/portfolio.config';
import { AxiosError, AxiosResponse, isAxiosError } from 'axios';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { NextRouter } from 'next/router';
import { NextRequest } from 'next/server';
import { DefaultToastOptions, Renderable, toast } from 'react-hot-toast';
import {
  EloquentErrorResponse,
  EloquentExceptionResponse,
  EloquentResponse,
} from '../db/interfaces/response';
import { ltrim, stringStartsWithSomeArrayElement } from './string-helpers';

interface IhttpParams {
  icon: Renderable;
  color: string;
  secondary?: string;
}

export interface IRequestObject {
  [key: string]: any;
}

export function isRequestObject(payload: any): payload is IRequestObject {
  if (payload instanceof Object) {
    return true;
  }
  return false;
}
export function isEloquentExceptionResponse(
  payload: any
): payload is EloquentExceptionResponse {
  payload = typeof payload == 'string' ? JSON.parse(payload) : payload;
  return (
    'message' in payload &&
    'line' in payload &&
    'file' in payload &&
    'exception' in payload &&
    'trace' in payload
  );
}

export function isEloquentResponse(payload: any): payload is EloquentResponse {
  payload = typeof payload == 'string' ? JSON.parse(payload) : payload;
  return 'message' in payload && 'data' in payload;
}

export function isEloquentErrorResponse(
  payload: any
): payload is EloquentErrorResponse {
  console.log('old type:', typeof payload);

  if (typeof payload == 'string') {
    payload = JSON.parse(JSON.stringify(payload));
    console.log('parsed');
  }
  console.log('new type:', typeof payload);
  return (
    'message' in payload &&
    // 'errors' in payload &&
    !isEloquentExceptionResponse(payload) &&
    !isEloquentResponse(payload)
  );
}

export const httpParams: Map<number, IhttpParams> = new Map([
  [201, { icon: '🛎', color: '#67B98D' }],
  [401, { icon: '🛎', color: '#dc3545' }],
  [403, { icon: '🛎', color: '#dc3545' }],
  [404, { icon: '🛎', color: '#6c757d' }],
  [409, { icon: '🛎', color: '#343a40' }],
  [422, { icon: '🛎', color: '#343a40' }],
  [500, { icon: '🛎', color: '#F8D74B' }],
]);
const httpParamsAsObject: { [code: number]: IhttpParams } = {
  0: { icon: '<>Spinner</>', color: '#67B98D' },
  201: { icon: '🛎', color: '#67B98D' },
  401: { icon: '🛎', color: '#dc3545' },
  403: { icon: '🛎', color: '#dc3545' },
  404: { icon: '🛎', color: '#6c757d' },
  409: { icon: '🛎', color: '#343a40' },
  422: { icon: '🛎', color: '#343a40' },
  500: { icon: '🛎', color: '#F8D74B' },
};
export const backendUrl = (url?: string): string => {
  url ||= '/';
  const backendBase = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
  return `${backendBase}/${ltrim(url, '/')}`;
};

export function extractMessageFromAxiosResponse(
  response: AxiosResponse | AxiosError,
  message?: string
) {
  const res: AxiosResponse = (
    isAxiosError(response) ? response.response : response
  ) as AxiosResponse;
  const { data, status } = res;

  return (message ||=
    res.data.message === undefined || data.message === ''
      ? data.statusText
      : data.message);
}
export function showResponseToast(
  response: AxiosResponse | AxiosError,
  message?: string,
  timeout?: number
): void {
  const res: AxiosResponse = (
    isAxiosError(response) ? response.response : (response as AxiosResponse)
  ) as AxiosResponse;
  const { data, status } = res;

  message ||=
    res.data.message === undefined || data.message === ''
      ? data.statusText
      : data.message;

  // if (message === null || message === undefined || message === '') {
  //   message = res.statusText;
  // }

  toast(message as any, {
    icon: httpParams.get(status)?.icon,
    style: {
      border: `1px solid ${httpParams.get(status)?.color}`,
      padding: '16px',
      color: '#222',
    },
    iconTheme: {
      primary: httpParams.get(status)?.color as string,
      secondary: '#FFFAEE',
    },
  });

  //   if (typeof timeout == 'number' && timeout >= 0) {
  //     setTimeout(() => (statusModal.hide(), timeout));
  //   }
}

export function isNetworkError(error: AxiosError) {
  return error.code === 'ERR_NETWORK';
}

export function showPromiseToast<
  T = any,
  E = AxiosError<EloquentErrorResponse | EloquentExceptionResponse>,
>(
  promise: Promise<AxiosResponse<EloquentResponse<T>>>,
  message?: string,
  options?: DefaultToastOptions
) {
  let responseStatus = 200;

  const t = toast.promise(
    promise,
    {
      loading: 'loading...' as Renderable,
      success: (response) => {
        const { data, status } = response;

        message ||=
          data.message === undefined || data.message === ''
            ? response.statusText
            : data.message;

        return message as Renderable;
      },
      error: (e: E) => {
        let render = 'An error occured';
        const env = process.env.NODE_ENV;

        console.error(e);
        if (isAxiosError(e)) {
          const { request, response } = e;

          if (
            response !== undefined &&
            isEloquentErrorResponse(response.data)
          ) {
            render = response.data.message;
          } else if (
            response !== undefined &&
            isEloquentExceptionResponse(response.data)
          ) {
            render = response.data.message;
            // env == 'production'
            //   ? 'Unable to process data. Try again later'
            //   : response.data.message;
          } else if (isNetworkError(e)) {
            render = 'Error in Network connection';
          }
        }

        return render as Renderable;
      },
    },
    {
      icon: httpParams.get(responseStatus)?.icon,
      style: {
        border: `1px solid ${httpParams.get(responseStatus)?.color}`,
        padding: '16px',
        color: '#222',
      },
      iconTheme: {
        primary: httpParams.get(responseStatus)?.color as string,
        secondary: '#FFFAEE',
      },
      ...options,
    }
  );

  return promise;
}

export function showSimplePromiseToast<
  T = any,
  E = AxiosError<EloquentErrorResponse | EloquentExceptionResponse>,
>(
  promise: Promise<AxiosResponse<any>>,
  message?: string,
  options?: DefaultToastOptions
) {
  let responseStatus = 200;

  const t = toast.promise(
    promise,
    {
      loading: 'loading...' as Renderable,
      success: () => {
        return message ?? ('Email Sent' as Renderable);
      },
      error: () => {
        let render = 'An error occured';

        return render as Renderable;
      },
    },
    {
      icon: httpParams.get(responseStatus)?.icon,
      style: {
        border: `1px solid ${httpParams.get(responseStatus)?.color}`,
        padding: '16px',
        color: '#222',
      },
      iconTheme: {
        primary: httpParams.get(responseStatus)?.color as string,
        secondary: '#FFFAEE',
      },
      ...options,
    }
  );

  return promise;
}

export function pathIsOneOf(
  array: Array<string>,
  router: NextRouter | NextRequest
): boolean {
  const { pathname } = 'pathname' in router ? router : new URL(router.url);
  return stringStartsWithSomeArrayElement(pathname, array);
}

export function isAdminPath(router: NextRouter | NextRequest): boolean {
  return pathIsOneOf(portfolioConfig.adminPaths, router);
}

export function isExhibitorPath(router: NextRouter | NextRequest): boolean {
  return pathIsOneOf(portfolioConfig.exhibitorPaths, router);
}
export function isAttendeePath(router: NextRouter | NextRequest): boolean {
  return pathIsOneOf(portfolioConfig.attendeePaths, router);
}

export function isGeneralPath(router: NextRouter | NextRequest): boolean {
  return !isAdminPath(router) && !isExhibitorPath(router);
}

export const simpleVoidPromiseCallback = () =>
  new Promise<void>((resolve, reject) => {});

export function appendToFormData(
  formData: FormData,
  data: IRequestObject,
  previousKey?: string | number
) {
  Object.keys(data).forEach((key) => {
    const value = data[key];
    if (
      value instanceof Object &&
      !Array.isArray(value) &&
      !(value instanceof File)
    ) {
      appendToFormData(formData, value, key);
    }
    if (previousKey) {
      key = `${previousKey}[${key}]`;
      console.log({ key });
    }
    if (value != null && value != undefined) {
      if (Array.isArray(value)) {
        // console.log({ 'is array': value, key });
        value.forEach((val, i) => {
          if (typeof val === 'object')
            appendToFormData(formData, val, `${key}[${i}]`);
          else formData.append(`${key}[]`, val);
        });
      } else {
        formData.append(key, value);
      }
    }
  });
}

export function filterReqParam(object: IRequestObject, useFormData?: boolean) {
  useFormData ||= false;
  const reqBody: IRequestObject = {};
  const formData = new FormData();
  for (var key in object) {
    if (
      Array.isArray(object[key]) &&
      (object[key].length < 1 ||
        (object[key].length == 1 && object[key][0] == ''))
    ) {
      continue;
    }
    if (
      object[key] !== null &&
      object[key] !== undefined &&
      object[key] !== ''
    ) {
      reqBody[key] = object[key];
    }
  }

  if (useFormData) {
    appendToFormData(formData, reqBody);

    return formData;
  }

  return reqBody;
}

export function handlePUTRequest(params: IRequestObject | FormData) {
  const isFormData = params instanceof FormData;
  if (isFormData) params.append('_method', 'PUT');
  return isFormData ? params : { _method: 'PUT', ...params };
}

export function fullBackendCookie(cookies: ReadonlyRequestCookies) {
  return `${process.env.NEXT_PUBLIC_BACKEND_COOKIE_NAME}=${
    cookies.get(process.env.NEXT_PUBLIC_BACKEND_COOKIE_NAME ?? '')?.value
  }`;
}
