import React from 'react';

import styled from './index.css';
import { Link } from '@reach/router';

const Nav: React.FC<unknown> = () => {
  return (
    <div className={styled.nav}>
      <ul className={styled.list}>
        <li className={styled.section}>
          🌍 General
          <ol>
            <Link to="/">
              Introducción
            </Link>
          </ol>
          <ol>
            <Link to="/button">
              Button
            </Link>
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
  )
}

export default Nav;