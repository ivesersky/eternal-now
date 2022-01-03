import '../styles/header.scss';
import { HashLink as Link } from 'react-router-hash-link';
import { Navbar } from '../components/navbar';
import LogoSmall from '../assets/ETLogo_WhiteInline.svg'

export const Header = () => {
  return <div className='header'>
      <Link to='/'><img className="header__logo" src={LogoSmall} alt="Eternal Now" /></Link>
      <div className="header__nav">
        <Navbar />
      </div>
  </div>
}