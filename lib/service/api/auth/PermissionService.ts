import { EloquentResponse } from '@/lib/db/interfaces/response';
import { AxiosRequestConfig, isAxiosError } from 'axios';
import {
  IPermission,
  IUploadPermission,
} from '../../../db/interfaces/permission';
import {
  handlePUTRequest,
  showResponseToast,
} from '../../../helpers/request-helpers';
import { HttpMethod } from '../../HttpService';
import QueryService from '../../QueryService';

const { GET, POST, PUT, DELETE } = HttpMethod;

export default class PermissionService {
  constructor(private queryService: QueryService) {}

  async getPermissions(
    url?: string
    // queryParams?: { paginate?: number; page?: number }
  ) {
    url ||= '/permissions';

    return await this.queryService
      .get(`${url}`)
      .then<IPermission[]>((response) => {
        if (isAxiosError(response)) {
          showResponseToast(response);
        } else {
          showResponseToast(response);
          return response.data.data;
        }
      });
  }

  async getPermission(data: number) {
    return await this.queryService
      .get(`permissions/${data}`)
      .then<IPermission>((response) => {
        if (isAxiosError(response)) {
          showResponseToast(response);
        } else {
          return response.data.data;
        }
      });
  }

  async fetch(url?: string, init?: any) {
    const res = await this.queryService.fetch(url ?? 'permission', init);

    if (!res.ok) {
      console.log(res.status);
      throw new Error('Failed to fetch data');
    }

    return res.json() as Promise<EloquentResponse<IPermission[]>>;
  }

  async fetchById(id: number, init?: any) {
    const res = await this.queryService.fetch(`permission/${id}`, init);

    if (!res.ok) {
      console.log((await res.json()).message);
      throw new Error('Failed to fetch data');
    }

    return res.json() as Promise<EloquentResponse<IPermission>>;
  }

  async create(
    params: IUploadPermission,
    config?: AxiosRequestConfig<IUploadPermission | FormData>
  ) {
    const request = this.queryService.post<EloquentResponse<IPermission>>(
      `/permissions`,
      params,
      {
        ...config,
        headers: {
          Accept: 'application/json',
        },
      }
    );

    return await request;
  }

  async update(
    id: number,
    params: IUploadPermission,
    config?: AxiosRequestConfig<IUploadPermission | FormData>
  ) {
    const request = this.queryService.post<EloquentResponse<IPermission>>(
      `/permissions/${id}`,
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
