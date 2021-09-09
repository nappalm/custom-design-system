import React from 'react';
import { Button } from '../../components';
import Example from '../__component/example';

const Home: React.FC<any> = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleClickLoading = () => {
    setLoading(true);
  };

  return (
    <div>
      <div className="example">
        <Example title="Button Types">
          <Button
            type="primary"
          >
            Primary button
          </Button>
          &nbsp;
          <Button>
            Secondary button
          </Button>
          &nbsp;
          <Button
            type="text"
          >
            Primary button
          </Button>
          &nbsp;
          <Button
            type="link"
          >
            Link button
          </Button>
        </Example>
        <Example title="Button sizes">
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
        <Example title="Block button">
          <Button block type="primary">
            Block button
          </Button>
        </Example>
        <Example title="Disabled button">
          <Button disabled type="primary">
            Disabled button
          </Button>
        </Example>
        <Example title="Loading button">
          <Button loading type="primary">
            Loading button
          </Button>
          &nbsp;
          <Button
            onClick={() => handleClickLoading()}
            type="primary"
            loading={loading}
          >
            Click to show loading
          </Button>
        </Example>
      </div>
    </div>
  );
};

export default Home;
