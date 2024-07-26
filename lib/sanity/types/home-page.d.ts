import { ISanityAbout } from './about';
import { ISanityHero } from './hero';

export interface IHomePage {
  hero: ISanityHero;
  about: ISanityAbout;
}
