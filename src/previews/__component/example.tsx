import React from 'react';
import styled from './index.css';

type ExampleProps = {
  title?: string;
  children?: React.ReactNode;
}

const Example: React.FC<ExampleProps> = (props) => {
  const { title, children } = props;
  return (
    <div>
      <div className={styled.headerExample}>
        <div>
          {title}
        </div>
      </div>
      <div className={styled.contentExample}>
        {children}
      </div>
    </div>
  );
};

export default Example;
