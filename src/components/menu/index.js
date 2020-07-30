import React from 'react';
import Logo from '../../assets/img/logo.png';
import {Link} from 'react-router-dom'
import './Menu.css';
import Button from '../Button/index'

function Menu(){
    return (
        <nav className='Menu'>
            <Link to="/" >
                <img className='Logo' src={Logo} alt="Bigodeflix Logo"/>
            </Link>

            <Button as={ Link } className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;
