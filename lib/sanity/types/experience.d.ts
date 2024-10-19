import { ISanityImage, ISanityImageUpload } from './image';
import { ISlug } from './slug';

export interface IExperience {
  _id: string;
  title: string;
  company: string;
  logo: ISanityImage | ISanityImageUpload;
  darkModeLogo: ISanityImage | ISanityImageUpload | null;
  slug: ISlug;
  link: string | null;
  startedAt: string;
  endedAt: string | null;
  activities: string[];
}
