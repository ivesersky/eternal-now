import { FuzzyTrailAlt } from '../components/fuzzy-trail-alt';
import { Video } from '../components/video';
import { Navbar } from '../components/navbar';
import { Separator } from '../components/separator';
import LogoBig from '../assets/ETLogo_WhiteStacked.svg'
import '../styles/home.scss';
import { EventsList } from '../mocks/EventsList';
import { Event } from '../components/event';
import { Footer } from '../components/footer';
import { About } from './about';
import { JoinUs } from './joinUs';
import { HashLink as Link } from 'react-router-hash-link';

export const Home = (props: any) =>{

  const topEvents = EventsList.filter((e) => e.category === 'topEvent')

  return <div>
    <div className="home">
    <div className="home__trail">
      <FuzzyTrailAlt/>
    </div>
      <div className="home__inner">
        <div className="home__inner__top">
          <img className="home__inner__top__logo" src={LogoBig} alt="Eternal Now" />
        </div>
        <div className="home__inner__bottom">
          <Navbar/>
          <div className="home__inner__bottom__text">
            <p className="home__inner__bottom__text__top">
              Book shop, record shop and ar(k)chive. Psychospiritual service center. Oakland, California.
            </p>
            <p className="home__inner__bottom__text__bottom">
              Excerpt from SOFT NESS by LANEYA BILLENGSLEY
            </p>
          </div>
        </div>
        <div className="home__inner__video"><Video/></div>
      </div>
    </div>
    <div className="home__long">
      <Separator isFirst={true}/>
      <About isHome={true} />
      <Separator />
      <div className="home__events">
        <p className="home__title">Events</p>
        {topEvents.map((props: any) => <Event event={props} />)}
        <Link className="about__content__bottom__button" smooth to='/events'>View all events →</Link>      
      </div>
      <Separator />
      <JoinUs isHome={true} />
      <Footer />
    </div>
  </div>
}