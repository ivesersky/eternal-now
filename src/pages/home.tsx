import { FuzzyTrail } from '../components/fuzzy-trail';
import { Video } from '../components/video';
import { Navbar } from '../components/navbar';
import LogoBig from '../assets/ETLogo_WhiteStacked.svg'
import '../styles/home.scss';
//import { EventsList } from '../mocks/EventsList';
//import { Event } from '../components/event';

export const Home = (props: any) =>{

  {/*Esta variable filtra y trae de EventsList los eventos con categoría "topSale"
 
  const topEvents = EventsList.filter((e) => e.category === 'topSale')

  */}

  return <div>
    <div className="home">
      <div className="home__inner">
        <div className="home__inner__top">
          <img className="home__inner__top__logo" src={LogoBig} alt="Eternal Now" />
        </div>
        <div className="home__inner__bottom">
          <Navbar/>
          {/*Esta función trae el resultado de la variable topEvents
          
          {topEvents.map((props: any) => <Event event={props} />)}

          */}
          <div className="home__inner__bottom__text">
            <p className="home__inner__bottom__text__top">
              Book shop, record shop and ar(k)chive. Psychospiritual service center. Oakland, California.
            </p>
            <p className="home__inner__bottom__text__bottom">
              Excerpt from SOFT NESS by LANEYA BILLENGSLEY
            </p>
          </div>
        </div>
      </div>
      <Video />
    </div>
    {/* <FuzzyTrail /> */}
  </div>
}