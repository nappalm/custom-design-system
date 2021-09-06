import React from 'react';
import styled from './index.css';
import Occurencia from '../../assets/ocurrencia.svg';

type HeaderProps = {
  name?: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <div className={styled.header}>
      <div>
        <img src={Occurencia} alt="abrazo-icon" height={100} />
      </div>
      {name}
    </div>
  )
}

export default Header;