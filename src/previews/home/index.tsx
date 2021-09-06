import React from 'react';
import Caldera from '../../assets/caldera.svg';
import styled from './index.css';

const Home: React.FC<any> = () => {
  return (
    <div className={styled.base}>
      <img
        height={150}
        src={Caldera} 
        alt="caldera-icon" />
      <h1 className={styled.title}>
        Bienvenido al curso de Custom Design System
      </h1>
      <p className={styled.author}>By: manuel morales</p>
      <p>
        En este <b>curso</b> aprenderas a desarrollar tu propio <br />
        sistema de diseño utilizando conocimientos avanzados <br /> 
        de <code className={styled.code}>Typescript</code> & 
        <code className={styled.code}>React.js</code>.
      </p>

      <div className={styled.divider}></div>

      <div className={styled.linksSection}>
        <p>Tambien puedes descargar el código completo</p>
        <a href="https://github.com/nappalm" target="_blank">
          Ver en Github
        </a>
      </div>
    </div>
  )
}

export default Home;