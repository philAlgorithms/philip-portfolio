import { contactAxios } from '@/lib/axios/axios';
import Axios, { AxiosInstance } from 'axios';
import HttpService from './HttpService';

export class BeehiivQueryService extends HttpService {
  constructor(client: AxiosInstance = contactAxios) {
    super(client);
  }
}

export default class QueryService extends HttpService {
  constructor(
    client: AxiosInstance = Axios.create({
      baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
      withCredentials: true,
    })
  ) {
    super(client);
  }
}
