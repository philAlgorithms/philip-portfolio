import { ISanityImage, ISanityImageUpload } from './image';
import { ISlug } from './slug';

export interface ISkill {
  _id: string;
  name: string;
  link: string;
  icon: ISanityImage | ISanityImageUpload;
  darkModeIcon: ISanityImage | ISanityImageUpload | null;
  slug: ISlug;
}
