import { ISanityDocument } from './sanity-document';
import { IUser, TGender } from './user';

export interface IEventAttendee {
  id: number;
  user: IUser;
  sanity_document: ISanityDocument;
  phone_number: string;
  occupation: string;
  publicity_mode: string;
  gender: TGender;
  ticket_id: string;
  created_at: string;
}

export interface IUploadEventAttendee {
  sanity_document_id?: number;
  occupation?: number;
  publicity_mode?: string;
  alt_publicity_mode?: string;
  gender?: TGender;
  phone_number?: string;
}
