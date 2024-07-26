import { ISanityImage, ISanityImageUpload } from './image';

export interface ISanityAbout {
  _id: string;
  heading: string;
  body: unknown;
  image: ISanityImage | ISanityImageUpload;
}
