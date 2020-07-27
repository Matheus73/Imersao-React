import React from 'react';
import Logo from '../../assets/img/logo.png';
// import ButtonLink from "./components/ButtonLink/index";
import './Menu.css';
import Button from './Button/index'

function Menu(){
    return (
        <nav className='Menu'>
            <a href="/" >
                <img className='Logo' src={Logo} alt="Bigodeflix Logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;
