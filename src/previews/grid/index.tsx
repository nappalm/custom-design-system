import React from 'react';
import Example from '../__component/example';
import { Row, Col } from '../../components';

const Preview: React.FC<any> = () => (
  <div>
    <div className="example">
      <Example title="Grid columns">
        <Row>
          <Col span={1} style={{ backgroundColor: '#f72585' }} />
          <Col span={1} style={{ backgroundColor: '#b5179e' }} />
          <Col span={1} style={{ backgroundColor: '#7209b7' }} />
          <Col span={1} style={{ backgroundColor: '#560bad' }} />
          <Col span={1} style={{ backgroundColor: '#480ca8' }} />
          <Col span={1} style={{ backgroundColor: '#3a0ca3' }} />
          <Col span={1} style={{ backgroundColor: '#3f37c9' }} />
          <Col span={1} style={{ backgroundColor: '#4361ee' }} />
          <Col span={1} style={{ backgroundColor: '#4895ef' }} />
          <Col span={1} style={{ backgroundColor: '#4cc9f0' }} />
          <Col span={1} style={{ backgroundColor: '#e9ecef' }} />
          <Col span={1} style={{ backgroundColor: '#f8f9fa' }} />
        </Row>
      </Example>
      <Example title="Grid Gap x 2">
        <Row gap={20}>
          <Col span={6}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: '100%' }}>
              🔥 Column 1
            </div>
          </Col>
          <Col span={6}>
            <div style={{ backgroundColor: '#3f37c9', color: 'white', height: '100%' }}>
              🔥 Column 2
            </div>
          </Col>
        </Row>
      </Example>
      <Example title="Grid Gap x 4">
        <Row gap={20}>
          <Col span={3}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: '100%' }}>
              🔥 Column 1
            </div>
          </Col>
          <Col span={3}>
            <div style={{ backgroundColor: '#3f37c9', color: 'white', height: '100%' }}>
              🔥 Column 2
            </div>
          </Col>
          <Col span={3}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: '100%' }}>
              🔥 Column 3
            </div>
          </Col>
          <Col span={3}>
            <div style={{ backgroundColor: '#3f37c9', color: 'white', height: '100%' }}>
              🔥 Column 4
            </div>
          </Col>
        </Row>
      </Example>
      <Example title="Grid Gap Multi Row">
        <Row gap={[10, 10]}>
          <Col span={6}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: '100%' }}>
              🔥 Column 1
            </div>
          </Col>
          <Col span={6}>
            <div style={{ backgroundColor: '#3f37c9', color: 'white', height: '100%' }}>
              🔥 Column 2
            </div>
          </Col>
          <Col span={6}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: '100%' }}>
              🔥 Column 3
            </div>
          </Col>
          <Col span={6}>
            <div style={{ backgroundColor: '#3f37c9', color: 'white', height: '100%' }}>
              🔥 Column 4
            </div>
          </Col>
        </Row>
      </Example>
      <Example title="Grid sizes">
        <Row>
          <Col span={4}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: '100%' }}>
              🔥 span 4
            </div>
          </Col>
          <Col span={3}>
            <div style={{ backgroundColor: '#3f37c9', color: 'white', height: '100%' }}>
              🔥 Span 3
            </div>
          </Col>
          <Col span={5}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: '100%' }}>
              🔥 Span 6
            </div>
          </Col>
          <Col span={12}>
            <div style={{ backgroundColor: '#4cc9f0', color: 'white', height: '100%' }}>
              🔥 Span 12
            </div>
          </Col>
        </Row>
      </Example>
      <Example title="Grid responsive">
        <Row gap={[20, 20]}>
          <Col xs={12} sm={6} md={3} lg={6} xl={3} xll={6}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: '100%' }}>
              🔥 Column
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} lg={6} xl={3} xll={6}>
            <div style={{ backgroundColor: '#3f37c9', color: 'white', height: '100%' }}>
              🔥 Column
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} lg={6} xl={3} xll={6}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: '100%' }}>
              🔥 Column
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} lg={6} xl={3} xll={6}>
            <div style={{ backgroundColor: '#3f37c9', color: 'white', height: '100%' }}>
              🔥 Column
            </div>
          </Col>
        </Row>
      </Example>
      <Example title="Justify content">
        <Row gap={[20, 20]} justifyContent="start">
          <Col span={3}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: '100%' }}>
              🔥 Start
            </div>
          </Col>
          <Col span={3}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: '100%' }}>
              🔥 Start
            </div>
          </Col>
        </Row>
        <br />
        <Row gap={[20, 20]} justifyContent="center">
          <Col span={3}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: '100%' }}>
              🔥 Center
            </div>
          </Col>
          <Col span={3}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: '100%' }}>
              🔥 Center
            </div>
          </Col>
        </Row>
        <br />
        <Row gap={[20, 20]} justifyContent="end">
          <Col span={3}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: '100%' }}>
              🔥 End
            </div>
          </Col>
          <Col span={3}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: '100%' }}>
              🔥 End
            </div>
          </Col>
        </Row>
        <br />
        <Row gap={[20, 20]} justifyContent="space-around">
          <Col span={3}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: '100%' }}>
              🔥 Space around
            </div>
          </Col>
          <Col span={3}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: '100%' }}>
              🔥 Space around
            </div>
          </Col>
        </Row>
        <br />
        <Row gap={[20, 20]} justifyContent="space-between">
          <Col span={3}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: '100%' }}>
              🔥 Space between
            </div>
          </Col>
          <Col span={3}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: '100%' }}>
              🔥 Space between
            </div>
          </Col>
        </Row>
      </Example>
      <Example title="Align items">
        <Row gap={20} align="top">
          <Col span={3}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: 100 }}>
              🔥 Top
            </div>
          </Col>
          <Col span={3}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: 50 }}>
              🔥 Top
            </div>
          </Col>
        </Row>
        <br />
        <Row gap={20} align="middle">
          <Col span={3}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: 100 }}>
              🔥 Middle
            </div>
          </Col>
          <Col span={3}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: 50 }}>
              🔥 Middle
            </div>
          </Col>
        </Row>
        <br />
        <Row gap={20} align="bottom">
          <Col span={3}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: 100 }}>
              🔥 Bottom
            </div>
          </Col>
          <Col span={3}>
            <div style={{ backgroundColor: '#4361ee', color: 'white', height: 50 }}>
              🔥 Bottom
            </div>
          </Col>
        </Row>
      </Example>
    </div>
  </div>
);

export default Preview;
