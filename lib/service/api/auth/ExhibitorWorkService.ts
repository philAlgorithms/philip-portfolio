import { IExhibitorWork } from '@/lib/db/interfaces/exhibitor-work';
import { EloquentResponse } from '@/lib/db/interfaces/response';
import { AxiosRequestConfig } from 'axios';
import QueryService from '../../QueryService';

export default class ExhibitorWorkService {
  constructor(private queryService: QueryService) {}

  async get(url?: string, config?: AxiosRequestConfig<IExhibitorWork[]>) {
    const request = this.queryService.get<EloquentResponse<IExhibitorWork[]>>(
      url ?? `/exhibitor-works`,
      config
    );

    return await request;
  }

  async fetch(url?: string, init?: any) {
    const res = await this.queryService.fetch(url ?? 'exhibitor-works', init);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json() as Promise<EloquentResponse<IExhibitorWork[]>>;
  }

  async fetchByExhibitorId(exhibitorId: number, init?: any) {
    return this.fetch(`exhibitor-works?exhibitor_id=${exhibitorId}`, init);
  }

  async fetchById(id: number, init?: any) {
    const res = await this.queryService.fetch(`exhibitor-works/${id}`, init);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json() as Promise<EloquentResponse<IExhibitorWork>>;
  }
}
