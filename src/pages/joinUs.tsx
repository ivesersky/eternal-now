import '../styles/joinUs.scss';
import { Header } from '../components/header';

export const JoinUs = () =>{
  return <div className="join-us">
    <Header />
      <div className="join-us__content">
        <div className="join-us__content__image"></div>
        <div className="join-us__content__text">
          <p>Eternal Now is a space, a live show, a living thing. It’s also a community. By becoming a member, you can support what we’re building and join us for in-house events.</p>
          <p>While the shop is open to the public during “regular” hours, membership is required to attend after hours events, and to receive news about the shop via email.</p>
          <p>Membership starts at $5 per month. TY+LYSM ♥</p>
          <a href="/" className="join-us__content__text__banner banner"><div className="banner__word">Join Now</div></a>
          <p>We also welcome (tax-deductable) donations.</p>
          <a href="/" className="join-us__content__text__banner banner"><div className="banner__word">Donate Now</div></a>
        </div>
    </div>
  </div>
}