import { EloquentResponse } from '@/lib/db/interfaces/response';
import { IAdminStat } from '@/lib/db/interfaces/stat';
import { AxiosRequestConfig } from 'axios';
import QueryService from '../../QueryService';

export default class StatService {
  constructor(private queryService: QueryService) {}

  async getAdminStats(config?: AxiosRequestConfig<IAdminStat>) {
    const request = this.queryService.get<EloquentResponse<IAdminStat>>(
      `/stats/admin`,
      config
    );

    return await request;
  }

  async fetchAdminStats(init?: any) {
    const res = await this.queryService.fetch('stats/admin', init);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json() as Promise<EloquentResponse<IAdminStat>>;
  }
}
