import { IAuthor } from './author';
import { ICategory } from './category';
import { ISlug } from './slug';

export interface IBlogPost {
  _id: string;
  title: string;
  body: unknown;
  intro: string;
  slug: ISlug;
  author: IAuthor;
  categories: ICategory[];
  publishedAt: string;
  mainImage: unknown;
}

export interface IBlogPostWithoutBody extends Omit<IBlogPost, 'body'> {}
