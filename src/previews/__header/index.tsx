import React from 'react';
import styled from './index.css';
import Abrazo from '../../assets/abrazo.svg';

type HeaderProps = {
  name?: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <div className={styled.header}>
      <div>
        <img src={Abrazo} alt="abrazo-icon" height={100} />
      </div>
      {name}
    </div>
  )
}

export default Header;