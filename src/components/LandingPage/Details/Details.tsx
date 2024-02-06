import phone from '@assets/images/Details/Group 2609357.png';
import phonemobile from '@assets/images/Details/Group 2609357.png';
import logo from '@assets/images/LandingPage/logo.png';
import joinNow from '@assets/images/Details/join-now-btn.png';
import learnMore from '@assets/images/Details/learn-more-btn.png';
// import '../../css/button.css';
import '../../../css/color.css';
import '../../../css/body.css';

export function Details() {
  return (
    <>
      {/* desktop */}
      <div className="bg-details hidden pt-5 lg:block">
        <div className="m-4 mx-auto flex w-3/4 flex-row items-center justify-center ">
          <div className="flex items-center justify-start pb-[6rem]">
            <div className="flex  flex-col justify-start">
              <img src={logo} className="w-1/2" />
              <p className="deadjim w-full py-[2rem] text-[45px] tracking-wider ">
                STEP INTO THE FANTASY REALM OF ESPORTS
              </p>
              <p className="roboto-condensed  text-[20px]">
                Where Fans, Teams, and Players Unite to Create Epic Moments Together!
              </p>
              <div className="flex flex-row gap-4 py-8">
                <button className="w-40">
                  <a href="https://play.eion.gg/register">
                    <img src={joinNow} />
                  </a>
                </button>
                <button className="w-40">
                  <a href="/info">
                    <img src={learnMore} />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <img src={phone} className="" />
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="bg-details-mobile block pb-8 lg:hidden">
        <div className="relative flex flex-col items-center justify-center">
          <div className="">
            <img src={phonemobile} className="scale-100" />
          </div>
          <div className="flex flex-col items-center text-center">
            <p className="deadjim-shadow w-full text-3xl tracking-[.10em]">STEP INTO THE FANTASY REALM OF ESPORTS</p>
            <p className="roboto-condensed  text-[16px]">
              Where Fans, Teams, and Players Unite to Create Epic Moments Together!
            </p>
            <div className="flex flex-row gap-4 pb-8 pt-5">
              <button className="w-40">
                <a href="https://play.eion.gg/register">
                  <img src={joinNow} />
                </a>
              </button>
              <button className="w-40">
                <a href="/info">
                  <img src={learnMore} />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
