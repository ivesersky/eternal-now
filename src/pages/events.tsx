import { Header } from '../components/header';
import { Event } from '../components/event';
import '../styles/events.scss';
import { EventsList } from '../mocks/EventsList';

export const Events = (props: any) =>{
  return <div className="events">
    <div className="events__inner">
      <Header/>
      <div className="events__inner__grid">
        {EventsList.map((props: any) => <Event event={props} /> )}
      </div>
    </div>
  </div>
}