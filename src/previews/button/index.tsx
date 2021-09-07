import React from 'react';
import { Button } from '../../components';
import Example from '../__component/example';

const Home: React.FC<any> = () => (
  <div>
    <div className="example">
      <Example title="Tipos de botones">
        <Button
          type="primary"
          disabled
          loading
        >
          Primary button
        </Button>
        &nbsp;
        <Button
          disabled
          loading
        >
          Secondary button
        </Button>
        &nbsp;
        <Button
          type="text"
          disabled
          loading
        >
          Primary button
        </Button>
        &nbsp;
        <Button
          type="link"
          disabled
          loading
        >
          Link button
        </Button>
      </Example>
      <Example title="Medidas de boton">
        <Button size="small">
          Small
        </Button>
        &nbsp;
        <Button size="medium">
          Medium
        </Button>
        &nbsp;
        <Button size="large">
          Large
        </Button>
      </Example>
    </div>
  </div>
);

export default Home;
