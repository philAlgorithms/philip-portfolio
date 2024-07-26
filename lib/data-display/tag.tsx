import * as React from 'react';

import Typography from '@/components/general/typography';
import { mergeClasses } from '@/lib/utils';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ label, className, ...props }: TagProps, ref) => {
    return (
      <div
        className={mergeClasses(
          'flex items-center justify-center rounded-xl bg-gray-200 px-4 py-1',
          className
        )}
        {...props}
      >
        <Typography variant="body3" className="font-medium">
          {label}
        </Typography>
      </div>
    );
  }
);

Tag.displayName = 'Tag';

export default Tag;
