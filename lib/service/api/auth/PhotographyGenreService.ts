import { IPhotographyGenre } from '@/lib/db/interfaces/photography-genre';
import { EloquentResponse } from '@/lib/db/interfaces/response';
import { AxiosRequestConfig } from 'axios';
import QueryService from '../../QueryService';

export default class PhotographyGenreService {
  constructor(private queryService: QueryService) {}

  async get(url?: string, config?: AxiosRequestConfig<IPhotographyGenre[]>) {
    const request = this.queryService.get<
      EloquentResponse<IPhotographyGenre[]>
    >(url ?? `/photography-genres`, config);

    return await request;
  }

  async fetch(url?: string, init?: any) {
    const res = await this.queryService.fetch(
      url ?? 'photography-genres',
      init
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json() as Promise<EloquentResponse<IPhotographyGenre[]>>;
  }

  async fetchById(id: number, init?: any) {
    const res = await this.queryService.fetch(`photography-genres/${id}`, init);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json() as Promise<EloquentResponse<IPhotographyGenre>>;
  }
}
