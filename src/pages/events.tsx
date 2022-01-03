import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Event } from '../components/event';
import '../styles/events.scss';
import { EventsList } from '../mocks/EventsList';
import { FuzzyTrail } from '../components/fuzzy-trail';

export const Events = (props: any) =>{
  return <div className="events">
    <div className="events__inner">
      <Header/>
      <div className="events__inner__grid">
        {EventsList.map((props: any) => <Event event={props} /> )}
      </div>
      <Footer />
    </div>
    <FuzzyTrail />
  </div>
}