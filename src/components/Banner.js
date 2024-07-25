import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';


function Banner() {
  return (
    <div className="Banner">
      <div className="BannerWrap">
        <img className="BannerFoto" src="\imgs\v2_web_crop_compress.jpg" alt=""></img>
        <div className="HeaderWrap">
          <p className="HeaderMain">CZECH</p>
          <p className="HeaderMain Blue">WEIGHTLIFTING</p>
          <p className="HeaderMain">OPEN 2024</p>

          <FlipClockCountdown 
            className="flip-clock"
            to={new Date("2024/12/19")} 
            labels={['DNY', 'HODINY', 'MINUTY', 'SEKUNDY']}
          />
          <p className="RegButton" ><a href="https://www.muni.cz" target="_blank">REGISTRACE</a></p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
