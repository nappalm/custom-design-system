import React from 'react';
import styled from './index.css';

type ExampleProps = {
  title?: string;
  children?: React.ReactNode;
}
const Example: React.FC<ExampleProps> = (props) => {
  return (
    <div>
      <div className={styled.headerExample}>
        <div>
          {props.title}
        </div>
      </div>
      <div className={styled.contentExample}>
        {props.children}
      </div>
    </div>
  )
}

export default Example;