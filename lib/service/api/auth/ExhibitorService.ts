import { IExhibitor } from '@/lib/db/interfaces/exhibitor';
import { EloquentResponse } from '@/lib/db/interfaces/response';
import { AxiosRequestConfig } from 'axios';
import QueryService from '../../QueryService';

export default class ExhibitorService {
  constructor(private queryService: QueryService) {}

  async get(url?: string, config?: AxiosRequestConfig<IExhibitor[]>) {
    const request = this.queryService.get<EloquentResponse<IExhibitor[]>>(
      url ?? `/exhibitors`,
      config
    );

    return await request;
  }

  async fetch(url?: string, init?: any) {
    const res = await this.queryService.fetch(url ?? 'exhibitors', init);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json() as Promise<EloquentResponse<IExhibitor[]>>;
  }

  async fetchById(id: number, init?: any) {
    const res = await this.queryService.fetch(`exhibitors/${id}`, init);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json() as Promise<EloquentResponse<IExhibitor>>;
  }
}
