import { IBlogPost } from './blog-post';
import { ISlug } from './slug';

export interface ICategory {
  _id: string;
  title: string;
  slug: ISlug;
  blogPosts: IBlogPost[];
}

export interface ICategoryWithoutPosts extends Omit<ICategory, 'blogPosts'> {}
