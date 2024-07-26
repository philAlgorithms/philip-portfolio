import { ISanityImage, ISanityImageUpload } from './image';

export interface ISanityHero {
  _id: string;
  heading: string;
  intro: string;
  image: ISanityImage | ISanityImageUpload;
}
