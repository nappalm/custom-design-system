import React from 'react';
import Caldera from '../../assets/caldera.svg';
import styled from './index.css';

const Home: React.FC<unknown> = () => {
  return (
    <div className={styled.base}>
      <img
        height={150}
        src={Caldera} 
        alt="caldera-icon" />
      <h1 className={styled.title}>
        Bienvenido al curso de Design System
      </h1>
      <p>
        En este curso aprenderas a crear tu propio sistema de diseño. <br />
        Es necesario que ya hayas adquiro conocimiento sobre <code>React.js</code> & <code>Typescript</code> <br />
        de lo contrario no te preocupes, te ayudare a mejorar tus conocimientos. 
        <br /> <br />
        Recuerda que para aprender solo necesitar practicar y aquí tienes suficiente por hacer.
      </p>

      <div className={styled.divider}></div>

      <div className={styled.linksSection}>
        <p>Tambien puedes descargar el código completo</p>
        <a href="https://github.com/nappalm">
          Ver en Github
        </a>
      </div>
    </div>
  )
}

export default Home;