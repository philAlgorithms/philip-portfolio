import { IEventAttendee } from '@/lib/db/interfaces/event-attendee';
import { EloquentResponse } from '@/lib/db/interfaces/response';
import { AxiosRequestConfig } from 'axios';
import QueryService from '../../QueryService';

export default class EventAttendeeService {
  constructor(private queryService: QueryService) {}

  async get(url?: string, config?: AxiosRequestConfig<IEventAttendee[]>) {
    const request = this.queryService.get<EloquentResponse<IEventAttendee[]>>(
      url ?? `/event-attendees`,
      config
    );

    return await request;
  }

  async fetch(url?: string, init?: any) {
    const res = await this.queryService.fetch(url ?? 'event-attendees', init);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json() as Promise<EloquentResponse<IEventAttendee[]>>;
  }

  async fetchById(id: number, init?: any) {
    const res = await this.queryService.fetch(`event-attendees/${id}`, init);

    if (!res.ok) {
      console.log(res.url);
      throw new Error(res.statusText);
    }

    return res.json() as Promise<EloquentResponse<IEventAttendee>>;
  }
}
