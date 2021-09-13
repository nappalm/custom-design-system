import React from 'react';
import Example from '../__component/example';
import { Typography } from '../../components';
import style from './index.css';

const Preview: React.FC<any> = () => (
  <div>
    <div className="example">
      <Example title="Typography Text">
        <div className={style.gridTypography}>
          <Typography.Text>
            (default) Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography.Text>
          <Typography.Text underline>
            (underline) Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography.Text>
          <Typography.Text bold>
            (bold) Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography.Text>
          <Typography.Text italic>
            (italic) Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography.Text>
          <Typography.Text code style={{ width: 'fit-content' }}>
            (code) Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography.Text>
          <Typography.Link href="https://www.google.com" target="__blank">
            Go to google.com
          </Typography.Link>
        </div>
      </Example>
      <Example title="Typography types">
        <div className={style.gridTypography}>
          <Typography.Text type="primary">
            (primary) Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography.Text>
          <Typography.Text type="gray">
            (seconday) Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography.Text>
          <Typography.Text type="danger">
            (danger) Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography.Text>
          <Typography.Text type="warning">
            (warning) Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography.Text>
        </div>
      </Example>
    </div>
  </div>
);

export default Preview;
