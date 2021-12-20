import '../styles/header.scss';
import { HashLink as Link } from 'react-router-hash-link';
import { Navbar } from '../components/navbar';
import LogoSmall from '../assets/ETLogo_WhiteInline.svg'

export const Header = () => {
  return <div className='header'>
    <div className='header__inner'>
      <Link to='/'><img className="header__inner__logo" src={LogoSmall} alt="Eternal Now" /></Link>
      <div className="header__inner__nav">
        <Navbar />
      </div>
    </div>
  </div>
}