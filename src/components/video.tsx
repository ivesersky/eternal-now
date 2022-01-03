import '../styles/video.scss';
import Vid from '../assets/vid.mp4';

export const Video = () => {
  return <div className='video__container'>
    <video autoPlay controls={false} muted loop>
      <source src={Vid} type='video/mp4'/>
    </video>
  </div>
}