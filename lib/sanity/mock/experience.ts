import { IExperience } from '../types/experience';
import { mockSlug } from './slug';

export const mockExperience: IExperience = {
  _id: '',
  title: '',
  company: '',
  logo: {} as any,
  darkModeLogo: {} as any,
  startedAt: '',
  slug: mockSlug,
  endedAt: null,
  link: null,
  activities: [],
};
