import { useState, useEffect } from 'react';
import logo from '@assets/images/LandingPage/logo.png';
import registerBtn from '@assets/images/Navbar/register-btn-latest.png';
import playBtn from '@assets/images/Navbar/play.png';
import register from '@assets/images/Navbar/register-mobile.png';
import '../../css/button.css';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      // Disable scroll when the mobile navbar is open
      document.body.classList.add('no-scroll');
    } else {
      // Enable scroll when the mobile navbar is closed
      document.body.classList.remove('no-scroll');
    }

    // Clean up the effect by removing the class when the component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <header className="bg-black">
      <nav className="container mx-auto flex h-16 max-w-screen-xl items-center gap-8  px-4 sm:px-6 lg:px-4">
        <div className="mt-3 flex flex-1  items-center justify-between  text-white md:justify-between">
          <div className="mr-10 flex flex-row">
            <a href="/" className="pb-5">
              <img src={logo} className="h-7" />
            </a>
            <div className="mx-4 hidden md:block"> </div>
            {/* <div className="hidden md:block">LOCKER</div> */}
            <div aria-label="Global" className="hidden md:block">
              <div className="flex w-full flex-row">
                <div className="flex w-full pr-[3rem]">
                  <a href="/info" className="roboto-condensed  mx-4 p-1.5 text-sm ">
                    More Info
                  </a>
                  <a href="/how-to-play" className="roboto-condensed  mx-4 p-1.5 text-sm ">
                    How To Play
                  </a>
                  <a href="/card-album" className="roboto-condensed  mx-4 p-1.5 text-sm ">
                    Card Album
                  </a>
                  <a href="/reward" className="roboto-condensed  mx-4 p-1.5 text-sm ">
                    Rewards
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="hidden items-center sm:flex sm:gap-4 lg:block">
              <Link to={'https://play.eion.gg/sign-in'}>
                <button className="w-36  ">
                  <img src={playBtn} />
                </button>
              </Link>
              {/* <button disabled={true} className="w-36 lg:pb-6 pb-2">
                <img src={playBtn} />
              </button> */}
              <Link to={'https://play.eion.gg/register'}>
                <button className="w-36 ">
                  <img src={registerBtn} />
                </button>
              </Link>
            </div>

            <button className="block rounded text-white transition hover:text-white md:hidden" onClick={mobileNav}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-auto md:hidden">
            <div className="h-screen bg-gradient-to-b from-[#00284D] to-black p-5">
              <div
                className="block items-end rounded text-white transition hover:text-white md:hidden"
                onClick={mobileNav}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>

              <div className="m-8">
                <img src={logo} alt="" className="mx-auto" />
              </div>
              <div className="flex items-center justify-center">
                <div className="deadjim text-center text-2xl font-bold">STEP INTO THE FANTASY REALM OF ESPORTS</div>
              </div>

              <div className="my-20">
                <a href="/info">
                  <div className="text-2xl font-semibold">More Info</div>
                </a>

                <div className="my-5 flex flex-row text-2xl font-semibold text-white">
                  <a href="/how-to-play">
                    <div className="text-2xl font-semibold">How To Play</div>
                  </a>
                </div>

                <div className="my-5 flex flex-row text-2xl font-semibold text-white">
                  <a href="/card-album">
                    <div className="text-2xl font-semibold">Card Album</div>
                  </a>
                </div>

                <div className="my-5 flex flex-row text-2xl font-semibold text-white">
                  <a href="/reward">
                    <div className="text-2xl font-semibold">Rewards</div>
                  </a>
                </div>
              </div>
              <div className="mx-auto mb-5 w-11/12">
                <a href="https://play.eion.gg/register">
                  <button className="flex w-full items-center justify-center">
                    <img src={register} />
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
