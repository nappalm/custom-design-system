import React from 'react';
import { Button, Col, Row } from '../../components';
import Dropdown from '../../components/dropdown';
import Menu from '../../components/menu';
import Example from '../__component/example';

const Menus = () => (
  <Menu>
    <Menu.Item>
      Create new task
    </Menu.Item>
    <Menu.Item>
      Remove task
    </Menu.Item>
    <Menu.Item>
      Update task
    </Menu.Item>
  </Menu>
);

const Preview: React.FC<any> = () => (
  <div>
    <div className="example">
      <Example title="Dropdown">
        <Row gap={20}>
          <Col>
            <Dropdown visible overlay={<Menus />}>
              <Button style={{ width: 200 }}>
                Dropdown visible
              </Button>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown overlay={<Menus />}>
              <Button style={{ width: 200 }}>
                Dropdown hover
              </Button>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown overlay={<Menus />} trigger="click">
              <Button style={{ width: 200 }}>
                Dropdown click
              </Button>
            </Dropdown>
          </Col>
        </Row>
      </Example>
    </div>
  </div>
);

export default Preview;
