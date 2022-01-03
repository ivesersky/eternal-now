import '../styles/footer.scss';
import { HashLink as Link } from 'react-router-hash-link';

export const Footer = () => {
  return <div className='footer'>
    <div className='footer__inner'>
      <p className="footer__inner__text">Video art by <a href="">LANEYA BILLINGSLEY</a>, site development by <a href="">GONZALO ULLA</a>, and site design by <a href="">JULIE LIANG</a>. IRL design by Ali Madigan and Will Bundy. Space concept by Will Bundy and Jared Schwartz.</p>
      <p className="footer__inner__text">© Eternal Now 2021</p>
    </div>
  </div>
}