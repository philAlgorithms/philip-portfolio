'use client';
import NextNProgress, { NextNProgressProps } from 'nextjs-progressbar';

export interface INextNProgressClient extends NextNProgressProps {}

const NextNProgressClient: React.FC<INextNProgressClient> = ({
  ...progressProps
}) => {
  return (
    <>
      <NextNProgress {...progressProps} />
      <div id="nprogress"></div>
    </>
  );
};

export default NextNProgressClient;
