import { IContactProps } from '@/lib/types';
import { AxiosRequestConfig } from 'axios';
import { BeehiivQueryService } from './QueryService';

export default class ContactService {
  constructor(private queryService: BeehiivQueryService) {}

  sendEmail(fields: IContactProps) {
    console.log(fields);
    const apiEndpoint = '/api/email';

    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(fields),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        alert(response.message);
      })
      .catch((err) => {
        console.log(err);
        alert('Error occured');
      });
  }

  async sendEmailClient(
    params: IContactProps | FormData,
    config?: AxiosRequestConfig<IContactProps>
  ) {
    const request = this.queryService.post<{ data: IContactProps }>(
      `/`,
      params,
      config,
      false
    );

    return await request;
  }
}
