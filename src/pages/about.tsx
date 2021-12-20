import { FuzzyTrailAlt } from '../components/fuzzy-trail-alt';
import { Header } from '../components/header';
import '../styles/about.scss';

export const About = () =>{
  return <div className="about">
    <Header />
    <div className="about__content">
        <div className="about__content__top__image"></div>
        <div className="about__content__top__text">
          <div className="about__content__top__text__left">
            <p>Eternal Now is a book shop, record shop and communal space for the arts located in Oakland, California.</p>
            <p>We produce, buy and sell physical media and artwork, and throw concerts, conversations, film screenings, readings and other happenings, inside our space and out. Eternal Now also houses a small ar(k)chive of art publications, music and ephemera available as a resource to artists in residence.</p>
            <p>The shop is open to the public during “regular” business hours. To join us for events and get news and other dispatches from the shop, become a MEMBER.</p>
          </div>
          <div className="about__content__top__text__right">
            <p>Sat 12PM – 7PM<br/>Sun 12PM – 7PM<br/>☺ WE’LL SEE ☺</p>
            <p>2419 San Pablo Avenue<br/>Oakland, CA 94612</p>
          </div>
        </div>
        <div className="about__content__bottom__text">
        <div className="about__content__bottom__text__left">
            <p>Eternal Now is a production of FEELS, which is fiscally sponsored by Pro Arts Commons, a registered 501(c)(3) organization.</p>
            <p>Video art by LANEYA BILLINGSLEY, site development by GONZALO ULLA, and site design by JULIE LIANG. IRL design by Ali Madigan and Will Bundy. Space concept by Will Bundy and Jared Schwartz.</p>
            <p>© Eternal Now 2021</p>
          </div>
          <div className="about__content__bottom__text__right">
            <p>INSTAGRAM<br/>info@eternalnow.am</p>
          </div>
        </div>
        <div className="about__content__bottom__image"></div>
    </div>
    
    {/* <FuzzyTrailAlt /> */}
  </div>
}