import React from 'react';

import styled from './index.css';
import { navigate } from '@reach/router';

const Nav: React.FC<unknown> = () => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const handleOnClick = (preview: string) => {
    navigate(preview);
    if (visible === true) { 
      setVisible(false);
    }
  }

  return (
    <>
      <div className={`${styled.nav} ${visible ? styled.visible : ''}`}>
        <ul className={styled.list}>
          <li className={styled.section}>
            🌍 General
            <ol onClick={() => handleOnClick('/')}>
              Introducción
            </ol>
            <ol onClick={() => handleOnClick('/button')}>
              Button
            </ol>
            <ol>Typography</ol>
          </li>
          <li className={styled.section}>
            ✒️ Layout
            <ol>Grid</ol>
          </li>
          <li className={styled.section}>
            🧭 Navegación
            <ol>Dropdown</ol>
            <ol>Steps</ol>
            <ol>Pagination</ol>
          </li>
          <li className={styled.section}>
            ⌨️ Entrada de datos
            <ol>Input</ol>
            <ol>Checkbox</ol>
            <ol>Radio</ol>
            <ol>Select</ol>
            <ol>Form</ol>
          </li>
          <li className={styled.section}>
            ⚡ Feedback
            <ol>Skeleton</ol>
            <ol>Spin</ol>
          </li>
        </ul>
      </div>
      <div
        onClick={() => setVisible(!visible)} 
        className={styled.floatMenu}>
        Menu
      </div>
    </>
  )
}

export default Nav;