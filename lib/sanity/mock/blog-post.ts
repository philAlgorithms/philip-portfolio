import { IBlogPost } from '../types/blog-post';
import { mockAuthor } from './author';
import { mockSlug } from './slug';

export const mockBlogPost: IBlogPost = {
  title: '',
  intro: '',
  body: [],
  slug: mockSlug,
  author: mockAuthor,
  categories: [],
  publishedAt: '',
  _id: '',
  mainImage: {} as any,
};
