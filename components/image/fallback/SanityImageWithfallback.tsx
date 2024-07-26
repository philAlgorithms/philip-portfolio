import { isSanityImageUpload } from '@/lib/helpers/sanity-helpers';
import { urlForImage } from '@/lib/sanity/sanity';
import Image, { ImageProps } from 'next/image';

export interface ISanityImageWithFallback
  extends Omit<ImageProps, 'src' | 'alt'> {
  src?: string;
  alt?: string;
  image: unknown;
  cover?: boolean;
}

const SanityImageWithFallback: React.FC<ISanityImageWithFallback> = ({
  image,
  src,
  alt = 'Content Image',
  loader,
  cover = true,
  fill = true,
  className,
  ...imageProps
}) => {
  return image == null || isSanityImageUpload(image) ? (
    <Image
      src="/images/mock/gallery.png"
      className={`${className}`}
      alt="Fallback image"
      fill={fill}
    />
  ) : (
    <Image
      src="Dont care"
      alt={alt}
      fill={fill}
      className={`${className} ${cover && 'object-cover'}`}
      loader={({ width, quality = 100 }) =>
        urlForImage(image as any)
          .width(width)
          .quality(quality)
          .url() ?? ''
      }
      {...imageProps}
    />
  );
};

export default SanityImageWithFallback;
