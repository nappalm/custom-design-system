/* eslint-disable no-console */
import React from 'react';
import { Col, Row } from '../../components';
import Radio from '../../components/radio';
import Example from '../__component/example';

const Preview: React.FC<any> = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = {
      name: e.target.name,
      value: e.target.value,
    };

    console.log('v', v);
  };

  return (
    <div>
      <div className="example">
        <Example title="Radio">
          <Row gap={20}>
            <Col>
              <Radio
                onChange={handleChange}
                name="hello"
                value="2.0"
              >
                Hola mundo 2.0
              </Radio>
            </Col>
            <Col>
              <Radio
                onChange={handleChange}
                name="hello"
                value="3.1.2"
              >
                Hola mundo 3.1.2
              </Radio>
            </Col>
          </Row>
        </Example>
        <Example title="Radio group">
          <Radio.Group onChange={handleChange} name="options" defaultValue={2}>
            <Row gap={20}>
              <Col>
                <Radio value={1}>
                  One option
                </Radio>
              </Col>
              <Col>
                <Radio value={2}>
                  Two option
                </Radio>
              </Col>
            </Row>
          </Radio.Group>
        </Example>
      </div>
    </div>
  );
};

export default Preview;
