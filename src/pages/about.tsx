import { FuzzyTrail } from '../components/fuzzy-trail';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { HashLink as Link } from 'react-router-hash-link';
import Smile from '../assets/smile.svg'
import '../styles/about.scss';


export const About = ({ isHome }: { isHome?:boolean }) => {
window.scrollTo(0,0);

  return <div className={"about" + (isHome ? ' about--isHome' : ' about--notHome')}>
    {!isHome
      ?  <Header />
      : ''
    }
    <div className="about__content">
        <div className="about__content__top__image"></div>
        <div className="about__content__top__text">
          <div className="about__content__top__text__left">
            <p className="about__content__top__text__left__text1">Eternal Now is a book shop, record shop and communal space for the arts located in Oakland, California.</p>
            <p className="about__content__top__text__left__text2">We produce, buy and sell physical media and artwork, and throw concerts, conversations, film screenings, readings and other happenings, inside our space and out. Eternal Now also houses a small ar(k)chive of art publications, music and ephemera available as a resource to artists in residence.</p>
            <p className="about__content__top__text__left__text3">The shop is open to the public during “regular” business hours. To join us for events and get news and other dispatches from the shop, become a MEMBER.</p>
          </div>
          <div className="about__content__top__text__right">
            <p className="about__content__top__text__right__text1">Sat 12PM – 7PM<br/>Sun 12PM – 7PM<br/><img src={Smile} alt=":)" /> WE’LL SEE <img src={Smile} alt=":)" /></p>
            <p className="about__content__top__text__right__text2"><a href="https://goo.gl/maps/97VSKV6tKsmjUK4o9" target="_blank" rel="noreferrer">2419 San Pablo Avenue<br/>Oakland, CA 94612</a></p>
            {isHome
              ?  <p className="about__content__top__text__right__text3">Video excerpt from SOFT NESS by LANEYA BILLENGSLEY</p>
              : ''  
            }
          </div>
        </div>
        <div className="about__content__bottom__text">
        <div className="about__content__bottom__text__left">
            <p className="about__content__bottom__text__left__text1">Eternal Now is a production of FEELS, which is fiscally sponsored by Pro Arts Commons, a registered 501(c)(3) organization.</p>
            <p className="about__content__bottom__text__left__text2">Video art by <a href="https://www.instagram.com/billie0cean/" target="_blank" rel="noreferrer">LANEYA BILLINGSLEY</a>, site development by <a href="https://www.gonzalofernan.com" target="_blank" rel="noreferrer">GONZALO ULLA</a>, and site design by <a href="https://www.behance.net/julieliang" target="_blank" rel="noreferrer">JULIE LIANG</a>. IRL design by Ali Madigan and Will Bundy. Space concept by Will Bundy and Jared Schwartz.</p>
            <p className="about__content__bottom__text__left__text3">© Eternal Now 2021</p>
          </div>
          <div className="about__content__bottom__text__right">
            <p>INSTAGRAM<br/><a className='about__content__bottom__text__right__item' href="https://www.instagram.com/eternalnow.space" target="_blank" rel="noreferrer">eternalnow.space</a></p>
            <p>EMAIL<br/><a className='about__content__bottom__text__right__item' href="mailto:info@eternalnow.space" target="_blank" rel="noreferrer">info@eternalnow.space</a></p>
          </div>
        </div>
        <div className="about__content__bottom__image"></div>
        {isHome
          ?  <Link className="about__content__bottom__button" smooth to='/about'>Learn More →</Link>
          : ''
        }
    </div>
    {!isHome
      ? <Footer />
      : ''
    }
    <FuzzyTrail/>
  </div>
}