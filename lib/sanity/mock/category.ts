import { ICategory, ICategoryWithoutPosts } from '../types/category';
import { mockSlug } from './slug';

export const mockCategoryWithoutPosts: ICategoryWithoutPosts = {
  _id: '',
  slug: mockSlug,
  title: '',
};

export const mockCategory: ICategory = {
  _id: '',
  slug: mockSlug,
  title: '',
  blogPosts: [],
};
