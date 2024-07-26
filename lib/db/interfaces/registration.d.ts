import { IUploadEventAttendee } from './event-attendee';
import { IUploadExhibitor } from './exhibitor';
import { IUploadExhibitorWork } from './exhibitor-work';
import { IUploadEventDetails } from './sanity-document';
import { IRegisterUser } from './user';

export interface IRegisterExhibitor
  extends Omit<
      IRegisterUser,
      'password' | 'password_confirmation' | 'agreed_to terms'
    >,
    IUploadExhibitor,
    IUploadEventDetails {
  portfolio?: IUploadExhibitorWork[];
}

export interface IRegisterEventAttendee
  extends Omit<
      IRegisterUser,
      'password' | 'password_confirmation' | 'agreed_to terms'
    >,
    IUploadEventAttendee,
    IUploadEventDetails {}
