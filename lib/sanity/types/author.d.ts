import { ISlug } from './slug';

export interface IAuthor {
  _id: string;
  name: string;
  slug: ISlug;
  image: unknown;
  bio: unknown[];
}
