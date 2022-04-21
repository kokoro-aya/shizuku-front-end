import React from 'react';
import SimpleLayout from '@/SimpleLayout';
// FIXME: remove useless import and refactor styles

interface IndexProps {
  children: React.ReactNode;
}

const Index: React.FC<IndexProps> = (props: IndexProps) => {
  return (
    <>
      <style>{`
        .square:before {
          display: inline-block;
          padding-top: 100%;
          content: '';
        }
        .square>span {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 5;
        }
        .square>span>svg {
          position: relative;
          width: 100%;
          height: auto;
          object-fit: fill;
          overflow: hidden;
        }
      `}</style>
      {<SimpleLayout>{props.children}</SimpleLayout>}
    </>
  );
};

export default Index;
