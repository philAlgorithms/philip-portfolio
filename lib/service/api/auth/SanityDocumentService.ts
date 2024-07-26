import { EloquentResponse } from '@/lib/db/interfaces/response';
import { ISanityDocument } from '@/lib/db/interfaces/sanity-document';
import { AxiosRequestConfig } from 'axios';
import QueryService from '../../QueryService';

export default class SanityDocumentService {
  constructor(private queryService: QueryService) {}

  async get(url?: string, config?: AxiosRequestConfig<ISanityDocument[]>) {
    const request = this.queryService.get<EloquentResponse<ISanityDocument[]>>(
      url ?? `/sanity-documents`,
      config
    );

    return await request;
  }

  async fetch(url?: string, init?: any) {
    const res = await this.queryService.fetch(url ?? 'sanity-documents', init);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json() as Promise<EloquentResponse<ISanityDocument[]>>;
  }

  async fetchById(id: number, init?: any) {
    const res = await this.queryService.fetch(`sanity-documents/${id}`, init);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json() as Promise<EloquentResponse<ISanityDocument>>;
  }

  async fetchBySanityParams(sanityId: string, sanityType: string, init?: any) {
    const res = await this.queryService.fetch(
      `sanity-documents/sanity-id/${sanityId}/sanity-type/${sanityType}`,
      init
    );

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json() as Promise<EloquentResponse<ISanityDocument>>;
  }
}
