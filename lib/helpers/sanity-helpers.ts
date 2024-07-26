import { ISanityImageUpload } from '../sanity/types/image';

export function isSanityImageUpload(object: any): object is ISanityImageUpload {
  return '_upload' in object;
}
