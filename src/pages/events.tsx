import { Header } from '../components/header';
import { Event } from '../components/event';
import '../styles/events.scss';

export const Events = () =>{
  return <div className="events">
    <div className="events__inner">
      <Header/>
      <div className="events__inner__grid">
        <Event/>
        <Event/>
        <Event/>
        <Event/>
      </div>
    </div>
  </div>
}