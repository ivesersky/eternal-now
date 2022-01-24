import '../styles/header.scss';
import { HashLink as Link } from 'react-router-hash-link';
import { Navbar } from '../components/navbar';
import { NavbarMobile } from '../components/navbar-mobile';
import LogoSmall from '../assets/ETLogo_WhiteInline.svg'
import { useState } from 'react';

export const Header = () => {
const [status,setStatus]=useState(false)
  return <div className='header'>
      <Link to='/'>
        <img className="header__logo" src={LogoSmall} alt="Eternal Now" />
        </Link>
      <div className="header__nav">
        <Navbar />
      </div>
      <div className="header__nav--mobile">
        <div onClick={()=>{setStatus(!status)}}>
        {!status ? 'MENU' : 'CLOSE'}</div>
        {status
      ?
        <div className='header__nav--mobile__navbar'><NavbarMobile /></div>
        : ''
    }
      </div>
  </div>
}