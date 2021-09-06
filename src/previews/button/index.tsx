import React from 'react';
import Example from '../__component/example';

const Home: React.FC<any> = () => {
  return (
    <div>
      <div className="example">
        <Example title="Button sizes">
        </Example>
        <Example title="Button types">
        </Example>
        <Example title="Loading button">
        </Example>
        <Example title="Disabled button">
        </Example>
      </div>
    </div>
  )
}

export default Home;