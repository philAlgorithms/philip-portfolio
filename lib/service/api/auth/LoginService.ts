import { EloquentResponse } from '@/lib/db/interfaces/response';
import { IEmailLogin, ILogin, IUser } from '@/lib/db/interfaces/user';
import QueryService from '../../QueryService';

export default class LoginService {
  constructor(private queryService: QueryService) {}

  async login(params: ILogin) {
    const request = this.queryService.post<EloquentResponse<IUser>, ILogin>(
      `/auth/login`,
      params
    );

    return await request;
  }

  async requestExhibitorLogin(params: IEmailLogin) {
    const request = this.queryService.post<EloquentResponse<IUser>, ILogin>(
      `/auth/login/exhibitor/request`,
      params
    );

    return await request;
  }

  async logout() {
    const request =
      this.queryService.post<EloquentResponse<unknown>>(`/auth/logout`);

    return await request;
  }
}
