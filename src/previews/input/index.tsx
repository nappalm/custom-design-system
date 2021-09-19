import React from 'react';
import {
  Col,
  Row,
  Typography,
} from '../../components';
import Input from '../../components/input';
import Example from '../__component/example';

const Preview: React.FC<any> = () => (
  <div>
    <div className="example">
      <Example title="Input">
        <Input placeholder="Escribe algo aquí" />
      </Example>
      <Example title="Input with prefix and suffix">
        <Row gap={[20, 20]}>
          <Col span={6}>
            <Input
              value="Este es un valor asignado al suffix"
              suffix={<div>⚡</div>}
            />
          </Col>
          <Col span={6}>
            <Input
              prefix={<div>⏱️</div>}
              value="Excelente comportamiento de mi input"
            />
          </Col>
          <Col span={6}>
            <Input
              suffix="RMB"
              prefix="￥"
            />
          </Col>
        </Row>
      </Example>
      <Example title="Input default and value">
        <Row gap={20}>
          <Col span={6}>
            <Input value="He escrito algo aquí" />
          </Col>
          <Col span={6}>
            <Input
              placeholder="Escribe algo aquí"
              defaultValue="Este es un default value"
            />
          </Col>
        </Row>
      </Example>
      <Example title="Input sizes">
        <Row gap={20} align="middle">
          <Col span={4}>
            <Input size="small" value="Small size" />
          </Col>
          <Col span={4}>
            <Input size="medium" value="Medium size and default" />
          </Col>
          <Col span={4}>
            <Input size="large" value="Large size" />
          </Col>
        </Row>
      </Example>
      <Example title="Input Number">
        <Row gap={20} align="middle">
          <Col span={6}>
            <Typography.Text>
              🔰 Max value 10
            </Typography.Text>
            <Input.Number
              prefix="￥"
              defaultValue={0}
              value={5}
              max={10}
            />
          </Col>
          <Col span={6}>
            <Typography.Text>
              🔰 Min value 3 and max value 10
            </Typography.Text>
            <Input.Number
              prefix="€"
              min={3}
              max={10}
            />
          </Col>
        </Row>
      </Example>
      <Example title="TextArea Input">
        <Row gap={20} align="middle">
          <Col span={6}>
            <Input.TextArea
              placeholder="Hello como estamos"
            />
          </Col>
        </Row>
      </Example>
      <Example title="Password">
        <Row gap={20} align="middle">
          <Col span={6}>
            <Input.Password
              placeholder="Cual es tu contraseña"
            />
          </Col>
        </Row>
      </Example>
      <Example title="Border less">
        <Row gap={20} align="middle">
          <Col span={6}>
            <Input
              bordered={false}
              placeholder="Cual es tu contraseña"
            />
          </Col>
        </Row>
      </Example>
      <Example title="Disabled">
        <Row gap={20} align="middle">
          <Col span={6}>
            <Input
              disabled
              placeholder="Cual es tu contraseña"
            />
          </Col>
        </Row>
      </Example>
    </div>
  </div>
);

export default Preview;
