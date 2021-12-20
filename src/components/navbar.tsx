import '../styles/navbar.scss';
import { HashLink as Link } from 'react-router-hash-link';  

export const Navbar = () => {
  return <div className='navbar'>
    <Link className='navbar__link link' smooth to='/about'>About</Link>
    <Link className='navbar__link link' smooth to='/events'>Events</Link>
    <Link className='navbar__link link' smooth to='/join-us'>Join Us</Link>
  </div>
}