import iconFb from '@assets/images/Footer/facebook.png';
import iconIg from '@assets/images/Footer/instagram.png';
import iconTwitter from '@assets/images/Footer/twitter.png';
import iconDiscord from '@assets/images/Footer/discord.png';
// import iconSoundcloud from '@assets/images/Footer/soundcloud.png';
import yt from '@assets/images/Footer/yt.png';
import tiktok from '@assets/images/Footer/tiktok.png';
import logo from '@assets/images/LandingPage/logo.png';

// const about = [
//   { name: 'Card Album', link: '#' },
//   { name: 'How To Play', link: '#' },
//   // { name: 'More Info', link: '/info' },
// ];

/*
TIKTOK: https://www.tiktok.com/@play.eion?lang=en
FACEBOOK: https://www.facebook.com/play.eion
INSTAGRAM: https://www.instagram.com/play.eion/
TWITTER: https://twitter.com/playeion
DISCORD: https://discord.gg/7fwWDFfyCf
YOUTUBE: https://www.youtube.com/@play.eion.
REGISTER AN EION ACCOUNT: https://eion.gg/
*/

const socmed = [
  { image: tiktok, link: 'https://www.tiktok.com/@play.eion?lang=en' },
  { image: iconFb, link: 'https://www.facebook.com/play.eion' },
  { image: iconIg, link: 'https://instagram.com/play.eion' },
  { image: iconTwitter, link: 'https://twitter.com/playeion' },
  { image: iconDiscord, link: 'https://discord.gg/7fwWDFfyCf' },
  // { image: iconSoundcloud },
  { image: yt, link: 'https://www.youtube.com/@play.eion.' },
];

export function Footer() {
  return (
    <>
      <div className=" w-fixed sticky inset-x-0 bottom-0 bg-black py-4">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row">
          <div className="my-8 flex items-center justify-center lg:hidden">
            <img src={logo} className="-mt-2 w-28" />
          </div>

          <div className="container mx-auto my-2 flex flex-row justify-around">
            <div className="hidden lg:block">
              {/* <p className="font-['threat'] text-xl font-bold lg:text-3xl">LOCKER</p> */}
              <img src={logo} className="-mt-2 w-28" />
            </div>

            <div className="flex flex-col text-sm">
              <div className="font-['Roboto'] font-bold">ABOUT</div>
              <a href="/info" className="my-2 font-extralight">
                More Info
              </a>
              <a href="/card-album" className="my-2 font-extralight text-white">
                Card Album
              </a>
              <a href="/how-to-play" className="my-2 font-extralight text-white">
                How To Play
              </a>
              <a href="/reward" className="my-2 font-extralight text-white">
                Rewards
              </a>
            </div>
            <div className="flex flex-col">
              <a className="font-['Roboto'] text-sm font-bold">ACCOUNT</a>
              <a href="https://play.eion.gg/register" className="my-[6px] text-sm font-extralight">
                Register
              </a>
              <a
                href="https://play.eion.gg/sign-in"
                className="my-2 text-sm font-extralight text-white" //text-[#655C5C]
              >
                Play
              </a>
            </div>
            <div className="flex flex-col">
              <a className="font-['Roboto'] text-sm font-bold">SERVICES</a>
              <a href="/policy" target="_blank" className="my-2 text-sm font-extralight">
                Privacy Policy
              </a>
              <a href="/terms" target="_blank" className="my-2 text-sm font-extralight">
                Terms of Use
              </a>
              <a href="/game-rules" target="_blank" className="my-2 text-sm font-extralight">
                Game Rules
              </a>
              <a href="mailto:support@eion.gg" className="my-2 text-sm font-extralight">
                Contact Us
              </a>
            </div>

            <div className="hidden flex-col lg:flex">
              <a className="hidden font-['Roboto'] text-sm font-bold lg:block">COMMUNITY</a>
              <div className="flexcenter my-2 gap-2">
                {socmed.map(socmeds => (
                  <a target="_blank" href={socmeds.link}>
                    <img src={socmeds.image} alt="iconfb" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:hidden">
            <a className="hidden font-['Roboto'] text-sm font-bold lg:block">COMMUNITY</a>
            <div className="my-2 flex flex-row items-center justify-center gap-2">
              {socmed.map(socmeds => (
                <a href={socmeds.link}>
                  <img src={socmeds.image} alt="icon" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
