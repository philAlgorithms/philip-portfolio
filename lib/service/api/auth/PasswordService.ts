import { EloquentResponse } from '@/lib/db/interfaces/response';
import { IForgotPassword } from '@/lib/db/interfaces/user';
import QueryService from '../../QueryService';

export default class PasswordService {
  constructor(private queryService: QueryService) {}

  async forgotPassword(params: IForgotPassword) {
    const request = this.queryService.post<EloquentResponse, IForgotPassword>(
      `/auth/password/forgot`,
      params
    );

    return await request;
  }

  async resetPassword(params: IForgotPassword) {
    const request = this.queryService.post<EloquentResponse, IForgotPassword>(
      `/auth/password/reset`,
      params
    );

    return await request;
  }
}
