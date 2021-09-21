/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.less';

import { Button } from '..';

interface ModalProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface ModalTitleProps extends ModalProps {
  title?: string;
}

export interface ModalFooterProps extends ModalProps {
  onOk?: () => void;
  onCancel?: () => void;
}

type InternalModalProps = {
  closeable?: boolean;
  visible?: boolean;
  footer?: null | React.ReactNode;
  maskCloseable?: boolean;
  width?: number | string;
} & ModalProps & ModalTitleProps & ModalFooterProps;

const prefixCls = 'modal';
const Modal: React.FC<InternalModalProps> = (props) => {
  const {
    children,
    visible,
    className,
    closeable = true,
    footer = undefined,
    maskCloseable = true,
    width,
  } = props;

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-wrapper`]: true,
      [`${prefixCls}-visible`]: visible,
      [`${prefixCls}-closeable`]: closeable,
      [`${prefixCls}-no-footer`]: footer !== undefined,
      [`${prefixCls}-mask-closeable`]: maskCloseable,
    },
    className,
  );

  const handleClose = (e: React.MouseEvent) => {
    const { onCancel } = props;
    e.stopPropagation();
    onCancel?.();
  };

  const handleOk = (e: React.MouseEvent) => {
    const { onOk } = props;
    e.stopPropagation();
    onOk?.();
  };

  const handleMaskCloseable = (e: React.MouseEvent<HTMLDivElement>) => {
    const { classList } = (e.target as Element);

    if (classList.contains('modal-wrapper')) {
      const { onCancel } = props;
      onCancel?.();
    }
  };

  const node = (
    <div
      onClick={handleMaskCloseable}
      className={classes}
    >
      <div
        style={{ width }}
        className="modal-container"
      >
        <div className="modal-header">
          <span>🔰 A title component</span>
          { closeable && <Button onClick={handleClose}>&times;</Button>}
        </div>
        <div className="modal-content">
          {children}
          { footer !== undefined && footer !== null && footer}
        </div>
        { footer === undefined
          && (
            <div className="modal-footer">
              <Button onClick={handleClose}>
                Cancelar
              </Button>
              <Button
                onClick={handleOk}
                type="primary"
              >
                Aceptar
              </Button>
            </div>
          )}
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    node,
    document.body,
  );
};

export default Modal;
