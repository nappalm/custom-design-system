import React from 'react';
import { Button } from '../../components';
import Example from '../__component/example';

const Home: React.FC<any> = () => (
  <div>
    <div className="example">
      <Example title="🔰 Button Types">
        <Button
          type="primary"
          loading
        >
          Primary button
        </Button>
        &nbsp;
        <Button
          loading
        >
          Secondary button
        </Button>
        &nbsp;
        <Button
          type="text"
          loading
        >
          Primary button
        </Button>
        &nbsp;
        <Button
          type="link"
          loading
        >
          Link button
        </Button>
      </Example>
      <Example title="🔰 Button sizes">
        <Button size="small" type="primary">
          Small
        </Button>
        &nbsp;
        <Button size="medium" type="primary">
          Medium
        </Button>
        &nbsp;
        <Button size="large" type="primary">
          Large
        </Button>
      </Example>
      <Example title="🔰 Block button">
        <Button block type="primary">
          Block button
        </Button>
      </Example>
      <Example title="🔰 Disabled button">
        <Button disabled type="primary">
          Disabled button
        </Button>
      </Example>
    </div>
  </div>
);

export default Home;
