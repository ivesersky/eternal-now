import '../styles/joinUs.scss';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { HashLink as Link } from 'react-router-hash-link';
import { FuzzyTrail } from '../components/fuzzy-trail';
import Love from '../assets/love.svg'

export const JoinUs = ({ isHome }: { isHome?:boolean }) => {
window.scrollTo(0,0);

  return <div className={"join-us" + (isHome ? ' join-us--isHome' : ' join-us--notHome')}>
    {!isHome
      ? 
      <div>
      <Header />
      <div className="join-us__content">
        <div className="join-us__content__image"></div>
        <div className="join-us__content__text">
          <p>Eternal Now is a space, a live show, a living thing. It’s also a community. By becoming a member, you can support what we’re building and join us for in-house events.</p>        
          <p>While the shop is open to the public during “regular” hours, membership is required to attend after hours events, and to receive news about the shop via email.</p>
          <p>Membership starts at $5 per month. TY+LYSM <img src={Love} alt="<3" /></p>
          <a href="/" className="join-us__content__text__banner banner"><div className="banner__word">Join Now</div></a>
          <p>We also welcome (tax-deductable) donations.</p>
          <a href="/" className="join-us__content__text__banner banner"><div className="banner__word">Donate Now</div></a>
        </div>
      </div>
      <Footer />
    </div>
    : <div className="join-us__content">
        <p className="join-us__content__title home__title">Join Us</p>
        <p>While the shop is open to the public during “regular” hours, membership is required to attend after hours events, and to receive news about the shop via email.</p>
        <Link className="about__content__bottom__button" smooth to='/join-us'>Learn More →</Link>
      </div>
    }
    <FuzzyTrail />
  </div>
}