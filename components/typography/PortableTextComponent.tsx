import { PortableTextReactComponents } from '@portabletext/react';
import { CSSProperties } from 'react';

const headingStyle: CSSProperties = {
  fontSize: 'revert',
  fontWeight: 'revert',
};

const headingClass = 'mt-4 mb-1';
export const portabletextComponents: Partial<PortableTextReactComponents> = {
  list: {
    bullet: ({ children }) => (
      <ul role="list" className="list-disc list-inside">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol role="list" className="mt-lg">
        {children}
      </ol>
    ),

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className={headingClass} style={headingStyle}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className={headingClass} style={headingStyle}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className={headingClass} style={headingStyle}>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className={headingClass} style={headingStyle}>
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className={headingClass} style={headingStyle}>
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className={headingClass} style={headingStyle}>
        {children}
      </h6>
    ),
  },
};
