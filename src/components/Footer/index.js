import React from 'react';
import Logo from '../../assets/img/logo.png';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className="logo" src={Logo} alt="logo" />
      </a>
      <p>
        Orgulhosamente criado por Matheus Gabriel durante a
        {' '}
        <a href="/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
