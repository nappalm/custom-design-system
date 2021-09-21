import React, { useState } from 'react';
import { Button } from '../../components';
import Modal from '../../components/modal';
import Example from '../__component/example';

const Preview: React.FC<any> = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div>
      <div className="example">
        <Example title="Modal">
          <Button
            onClick={() => setVisible(true)}
            type="primary"
          >
            Mostrar modal
          </Button>
          <Modal
            title="🔰 Bienvenido"
            onCancel={() => setVisible(false)}
            onOk={() => alert('ok')}
            visible={visible}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            At in quo vel modi quis pariatur doloribus perferendis
            voluptates molestias et aperiam non illum sit eius error,
            veniam maiores deleniti temporibus?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            At in quo vel modi quis pariatur doloribus perferendis
            voluptates molestias et aperiam non illum sit eius error,
            veniam maiores deleniti temporibus?
          </Modal>
        </Example>
      </div>
    </div>
  );
};

export default Preview;
