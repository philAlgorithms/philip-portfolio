import { ISanityImage, ISanityImageUpload } from './image';
import { ISkill } from './skill';
import { ISlug } from './slug';

export interface IProject {
  _id: string;
  title: string;
  description: string;
  mainImage: ISanityImage | ISanityImageUpload;
  slug: ISlug;
  link: string | null;
  startedAt: string;
  endedAt: string | null;
  skills: ISkill[];
  post: unknown;
}

export interface IProjectWithoutBody extends Omit<IProject, 'post'> {}
