import { IProject } from '../types/project';
import { mockSlug } from './slug';

export const mockProject: IProject = {
  _id: '',
  title: '',
  description: '',
  mainImage: {} as any,
  startedAt: '',
  endedAt: null,
  slug: mockSlug,
  link: null,
  skills: [],
  post: {} as any,
};
