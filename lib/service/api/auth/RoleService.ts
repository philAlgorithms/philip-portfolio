import { EloquentResponse } from '@/lib/db/interfaces/response';
import { isAxiosError } from 'axios';
import { IRole } from '../../../db/interfaces/role';
import { showResponseToast } from '../../../helpers/request-helpers';
import { HttpMethod } from '../../HttpService';
import QueryService from '../../QueryService';

const { GET, POST, PUT, DELETE } = HttpMethod;

export default class RoleService {
  constructor(private queryService: QueryService) {}

  async getRoles(
    url?: string
    // queryParams?: { paginate?: number; page?: number }
  ) {
    url ||= '/roles';

    return await this.queryService.get(`${url}`).then<IRole[]>((response) => {
      if (isAxiosError(response)) {
        showResponseToast(response);
      } else {
        showResponseToast(response);
        return response.data.data;
      }
    });
  }

  async getRole(data: number) {
    return await this.queryService
      .get(`roles/${data}`)
      .then<IRole>((response) => {
        if (isAxiosError(response)) {
          showResponseToast(response);
        } else {
          return response.data.data;
        }
      });
  }

  async fetch(url?: string, init?: any) {
    const res = await this.queryService.fetch(url ?? 'role', init);

    if (!res.ok) {
      console.log(res.status);
      throw new Error('Failed to fetch data');
    }

    return res.json() as Promise<EloquentResponse<IRole[]>>;
  }

  async fetchById(id: number, init?: any) {
    const res = await this.queryService.fetch(`role/${id}`, init);

    if (!res.ok) {
      console.log((await res.json()).message);
      throw new Error('Failed to fetch data');
    }

    return res.json() as Promise<EloquentResponse<IRole>>;
  }
}
