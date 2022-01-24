import '../styles/navbar-mobile.scss';
import { HashLink as Link } from 'react-router-hash-link';  

export const NavbarMobile = () => {
  return <div className='navbar-mobile'>
    <Link className='navbar-mobile__link link' smooth to='/about'>About</Link>
    <Link className='navbar-mobile__link link' smooth to='/events'>Events</Link>
    <Link className='navbar-mobile__link link' smooth to='/join-us'>Join Us</Link>
  </div>
}