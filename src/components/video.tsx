import '../styles/video.scss';

export const Video = () => {
  return <div className='video__container'>
    <video src="../assets/vid.mp4" autoPlay={true} controls={false}></video>
  </div>
}