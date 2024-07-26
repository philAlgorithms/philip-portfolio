import { IUploadExhibitorWork } from '@/lib/db/interfaces/exhibitor-work';
import {
  IRegisterEventAttendee,
  IRegisterExhibitor,
} from '@/lib/db/interfaces/registration';
import { EloquentResponse } from '@/lib/db/interfaces/response';
import { IRegisterUser, IUser } from '@/lib/db/interfaces/user';
import QueryService from '../../QueryService';

export function isExhbitorWorkUpload(
  object: any
): object is IUploadExhibitorWork {
  if (object == null) return false;
  return (
    'photograph' in object &&
    object.photograph instanceof File &&
    'title' in object &&
    'year' in object &&
    'description' in object &&
    'proposed_value' in object
  );
}
export default class RegistrationService {
  constructor(private queryService: QueryService) {}

  async registerExhibitor(params: IRegisterExhibitor | FormData) {
    const request = this.queryService.post<
      EloquentResponse<IUser>,
      IRegisterExhibitor | FormData
    >(`/auth/register/exhibitor`, params);

    return await request;
  }

  async registerAdmin(params: IRegisterUser) {
    const request = this.queryService.post<
      EloquentResponse<IUser>,
      IRegisterUser
    >(`/auth/register/admin`, params);

    return await request;
  }

  async registerEventAttendee(
    id: number,
    params: IRegisterEventAttendee | FormData
  ) {
    const request = this.queryService.post<
      EloquentResponse<IUser>,
      IRegisterEventAttendee | FormData
    >(`/auth/register/event-attendee/${id}`, params);

    return await request;
  }
}
