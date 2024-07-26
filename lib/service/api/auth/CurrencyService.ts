import { ICurrency } from '@/lib/db/interfaces/currency';
import { EloquentResponse } from '@/lib/db/interfaces/response';
import { AxiosRequestConfig } from 'axios';
import QueryService from '../../QueryService';

export default class CurrencyService {
  constructor(private queryService: QueryService) {}

  async get(url?: string, config?: AxiosRequestConfig<ICurrency[]>) {
    const request = this.queryService.get<EloquentResponse<ICurrency[]>>(
      url ?? `/currencies`,
      config
    );

    return await request;
  }

  async fetch(url?: string, init?: any) {
    const res = await this.queryService.fetch(url ?? 'currencies', init);

    if (!res.ok) {
      console.log(res.statusText);
      throw new Error('Failed to fetch data');
    }

    return res.json() as Promise<EloquentResponse<ICurrency[]>>;
  }

  async fetchById(id: number, init?: any) {
    const res = await this.queryService.fetch(`currencies/${id}`, init);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json() as Promise<EloquentResponse<ICurrency>>;
  }
}
