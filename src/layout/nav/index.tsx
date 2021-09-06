import React from 'react';

import styled from './index.css';
import { navigate } from '@reach/router';
import { useLocation } from '@reach/router';

const Nav: React.FC<unknown> = () => {
  const location = useLocation();
  const {pathname} = location;

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
            <div className={styled.sectionName}>
              General
            </div>
            <ol
              className={pathname === '/' ? styled.active : ''} 
              onClick={() => handleOnClick('/')}>
              Introducción
            </ol>
            <ol 
              className={pathname === '/button' ? styled.active : ''} 
              onClick={() => handleOnClick('/button')}>
              Button
            </ol>
            <ol 
              className={pathname === '/typography' ? styled.active : ''} 
              onClick={() => handleOnClick('/typography')}>
              Typography
            </ol>
          </li>
          <li className={styled.section}>
            <div className={styled.sectionName}>
              Layout
            </div>
            <ol 
              className={pathname === '/grid' ? styled.active : ''} 
              onClick={() => handleOnClick('/grid')}>
              Grid
            </ol>
          </li>
          <li className={styled.section}>
            <div className={styled.sectionName}>
              Navegación
            </div>
            <ol 
              className={pathname === '/dropdown' ? styled.active : ''} 
              onClick={() => handleOnClick('/dropdown')}>Dropdown</ol>
            <ol 
              className={pathname === '/pagination' ? styled.active : ''} 
              onClick={() => handleOnClick('/pagination')}>Pagination</ol>
          </li>
          <li className={styled.section}>
            <div className={styled.sectionName}>
              Entrada de datos
            </div>
            <ol
              className={pathname === '/input' ? styled.active : ''} 
              onClick={() => handleOnClick('/input')}>Input</ol>
            <ol
              className={pathname === '/checkbox' ? styled.active : ''} 
              onClick={() => handleOnClick('/checkbox')}>Checkbox</ol>
            <ol
              className={pathname === '/radio' ? styled.active : ''} 
              onClick={() => handleOnClick('/radio')}>Radio</ol>
            <ol
              className={pathname === '/select' ? styled.active : ''} 
              onClick={() => handleOnClick('/select')}>Select</ol>
            <ol
              className={pathname === '/form' ? styled.active : ''} 
              onClick={() => handleOnClick('/form')}>Form</ol>
          </li>
          <li className={styled.section}>
            <div className={styled.sectionName}>
              Feedback
            </div>
            <ol
              className={pathname === '/skeleton' ? styled.active : ''} 
              onClick={() => handleOnClick('/skeleton')}>Skeleton</ol>
            <ol
              className={pathname === '/spin' ? styled.active : ''} 
              onClick={() => handleOnClick('/spin')}>Spin</ol>
            <ol
              className={pathname === '/modal' ? styled.active : ''} 
              onClick={() => handleOnClick('/modal')}>Modal</ol>
            <ol
              className={pathname === '/progress' ? styled.active : ''} 
              onClick={() => handleOnClick('/progress')}>Progress</ol>
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