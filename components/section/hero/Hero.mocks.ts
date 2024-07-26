import { mockSanityHero } from '@/lib/sanity/mock';
import { IHero } from './Hero';

const base: IHero = {
  data: mockSanityHero,
};

export const mockHeroProps = {
  base,
};
