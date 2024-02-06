import asc1 from '@assets/images/AllStarsCollaboration/blck.png';
import asc2 from '@assets/images/AllStarsCollaboration/echo.png';
import asc3 from '@assets/images/AllStarsCollaboration/onicph.png';
import asc4 from '@assets/images/AllStarsCollaboration/tnc.png';
import asc5 from '@assets/images/AllStarsCollaboration/rsgph.png';
import asc6 from '@assets/images/AllStarsCollaboration/hb.png';
import asc7 from '@assets/images/AllStarsCollaboration/ltx.png';
import asc8 from '@assets/images/AllStarsCollaboration/thq.png';
import asc9 from '@assets/images/AllStarsCollaboration/todak.png';
import asc10 from '@assets/images/AllStarsCollaboration/rsgmy.png';
import asc11 from '@assets/images/AllStarsCollaboration/flash.png';
import asc12 from '@assets/images/AllStarsCollaboration/hbsg.png';
import asc13 from '@assets/images/AllStarsCollaboration/stlk.png';
import asc14 from '@assets/images/AllStarsCollaboration/rsgsg.png';

import rsgsg from '@assets/images/Team-Rewards/rsgsg.png';
import blck from '@assets/images/Team-Rewards/blck.png';
import onic from '@assets/images/Team-Rewards/onic.png';
import todak from '@assets/images/Team-Rewards/todak.png';
import thq from '@assets/images/Team-Rewards/thq.png';
import ltx from '@assets/images/Team-Rewards/ltx.png';
import rsgph from '@assets/images/Team-Rewards/rsgph.png';
import echo from '@assets/images/Team-Rewards/echo.png';
import tnc from '@assets/images/Team-Rewards/tnc.png';
import stlk from '@assets/images/Team-Rewards/stlk.png';
import hbsg from '@assets/images/Team-Rewards/hbsg.png';
import flash from '@assets/images/Team-Rewards/flash.png';
import rsgmy from '@assets/images/Team-Rewards/rsgmy.png';
import hbmy from '@assets/images/Team-Rewards/hbmy.png';

import active_blck from '@assets/images/Team-Rewards/active-btn/active_blck.png';
import active_echo from '@assets/images/Team-Rewards/active-btn/active_echo.png';
import active_flash from '@assets/images/Team-Rewards/active-btn/active_flash.png';
import active_hbmy from '@assets/images/Team-Rewards/active-btn/active_hbmy.png';
import active_hbsg from '@assets/images/Team-Rewards/active-btn/active_hbsg.png';
import active_ltx from '@assets/images/Team-Rewards/active-btn/active_ltx.png';
import active_onic from '@assets/images/Team-Rewards/active-btn/active_onic.png';
import active_rsgmy from '@assets/images/Team-Rewards/active-btn/active_rsgmy.png';
import active_rsgsg from '@assets/images/Team-Rewards/active-btn/active_rsgsg.png';
import active_rsgph from '@assets/images/Team-Rewards/active-btn/active_rsgph.png';
import active_thq from '@assets/images/Team-Rewards/active-btn/active_thq.png';
import active_tnc from '@assets/images/Team-Rewards/active-btn/active_tnc.png';
import active_todak from '@assets/images/Team-Rewards/active-btn/active_todak.png';
import active_stlk from '@assets/images/Team-Rewards/active-btn/active_stlk.png';

import rsgsg__logo from '@assets/images/Team-Rewards/logo/rsgsg__logo.png';
import stlk_logo from '@assets/images/Team-Rewards/logo/stlk_logo.png';
import hbsg_logo from '@assets/images/Team-Rewards/logo/hbsg_logo.png';
import flash_logo from '@assets/images/Team-Rewards/logo/flash_logo.png';
import rsgmy_logo from '@assets/images/Team-Rewards/logo/rsgmy_logo.png';
import hbmy_logo from '@assets/images/Team-Rewards/logo/hbmy_logo.png';
import todak_logo from '@assets/images/Team-Rewards/logo/todak_logo.png';
import thq_logo from '@assets/images/Team-Rewards/logo/thq_logo.png';
import ltx_logo from '@assets/images/Team-Rewards/logo/ltx_logo.png';
import rsgph_logo from '@assets/images/Team-Rewards/logo/rsgph_logo.png';
import echo_logo from '@assets/images/Team-Rewards/logo/echo_logo.png';
import tnc_logo from '@assets/images/Team-Rewards/logo/tnc_logo.png';
import blck_logo from '@assets/images/Team-Rewards/logo/blck_logo.png';
import onic_logo from '@assets/images/Team-Rewards/logo/onic_logo.png';

import { useEffect, useRef, useState } from 'react';
import { ModalLayout } from '..';

export function TeamRewards() {
  const images = [asc1, asc2, asc3, asc4, asc5, asc6, asc7, asc8, asc9, asc10];
  const activeImg = [
    active_blck,
    active_echo,
    active_onic,
    active_tnc,
    active_rsgph,
    active_hbmy,
    active_ltx,
    active_thq,
    active_todak,
    active_rsgmy,
  ];
  const images2 = [asc11, asc12, asc13, asc14];
  const activeImg2 = [active_flash, active_hbsg, active_stlk, active_rsgsg];

  const firstRow = images.map((image, index) => ({
    inactive: image,
    active: activeImg[index],
  }));

  const secondRow = images2.map((image, index) => ({
    inactive: image,
    active: activeImg2[index],
  }));

  const XLImgRef = useRef<HTMLDivElement | null>(null);
  const [XLDimensions, setXLDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const displayTeamRewards = (i: number) => setIndex(i);
  const openModal = (i: number) => {
    displayTeamRewards(i);
    setIsOpen(true);
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (XLImgRef.current) {
        const { width, height } = XLImgRef.current.getBoundingClientRect();
        setXLDimensions({ width, height });
      }
    };

    updateDimensions();

    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [XLImgRef.current]);

  const data = [
    {
      buttonInactive: asc1,
      buttonActive: active_blck,
      banner: blck,
      logo: blck_logo,
      name: 'BLACKLIST',
      desc: [
        {
          text: 'Online Meet and Greet',
          quantity: 'x10',
        },
      ],
    },
    {
      buttonInactive: asc2,
      buttonActive: active_echo,
      banner: echo,
      logo: echo_logo,
      name: 'ECHO',
      desc: [
        {
          text: 'Hair Salon date with team',
          quantity: '',
        },
        {
          text: 'Ranked game with 2-3 players',
          quantity: '',
        },
        {
          text: '5 to 10 minutes video call with player',
          quantity: '',
        },
        {
          text: '10 seconds from all players',
          quantity: '',
        },
        {
          text: 'Bootcamp Tour',
          quantity: '',
        },
        {
          text: 'Sunnies Shopping with player',
          quantity: '',
        },
        {
          text: 'Arcade outing with team',
          quantity: '',
        },
        {
          text: 'Archery with team',
          quantity: '',
        },
        {
          text: 'KBBQ dinner with team',
          quantity: '',
        },
        {
          text: 'Movie date with team',
          quantity: '',
        },
      ],
    },
    {
      buttonInactive: asc3,
      buttonActive: active_onic,
      banner: onic,
      logo: onic_logo,
      name: 'ONIC',
      desc: [
        {
          text: '3 minutes video call with players x3',
          quantity: '',
        },
        {
          text: 'Video greet from favourite player',
          quantity: '',
        },
        {
          text: 'Livestream MLBB classic match with players',
          quantity: '',
        },
        {
          text: 'In-game custom MLBB match video content with favourite player',
          quantity: '',
        },
        {
          text: 'MCL match with players',
          quantity: '',
        },
        {
          text: 'Online fan sign with favourite player',
          quantity: '',
        },
        {
          text: 'Fan experience posted on FB page',
          quantity: '',
        },
        {
          text: 'Fan group chat inclusion with players',
          quantity: '',
        },
      ],
    },
    {
      buttonInactive: asc4,
      buttonActive: active_tnc,
      banner: tnc,
      logo: tnc_logo,
      name: 'TNC',
      desc: [
        {
          text: 'Autograph and picture with team',
          quantity: 'x3',
        },
        {
          text: 'TikTok with team',
          quantity: 'x2',
        },
        {
          text: 'Visit TNC bootcamp',
          quantity: '',
        },
        {
          text: 'Free MLBB epic skin',
          quantity: '',
        },
        {
          text: 'Player follows fan social media account',
          quantity: '',
        },
        {
          text: 'Video greet OR Shout out',
          quantity: '',
        },
        {
          text: 'Friendly match with TNC player',
          quantity: '',
        },
      ],
    },
    {
      buttonInactive: asc5,
      buttonActive: active_rsgph,
      banner: rsgph,
      logo: rsgph_logo,
      name: 'RSG PH',
      desc: [
        {
          text: 'Ask Me Anything OR Chill Video Chat with 1 Player OR Coach',
          quantity: 'x10',
        },
      ],
    },
    {
      buttonInactive: asc6,
      buttonActive: active_hbmy,
      banner: hbmy,
      logo: hbmy_logo,
      name: 'HOMEBOIS',
      desc: [
        {
          text: 'Movie night with team',
          quantity: 'x3',
        },
        {
          text: 'Facetime with favourite player',
          quantity: 'x3',
        },
        {
          text: 'Dinner with favourite playe',
          quantity: 'x2',
        },
        {
          text: 'BBQ night with team',
          quantity: 'x2',
        },
      ],
    },
    {
      buttonInactive: asc7,
      buttonActive: active_ltx,
      banner: ltx,
      logo: ltx_logo,
      name: 'LUNATIX',
      desc: [
        {
          text: 'Friendly match with players',
          quantity: 'x2',
        },
        {
          text: 'Special gaming tips and talks with favourite player',
          quantity: 'x2',
        },
        {
          text: 'Play 3 ranked games with favourite player',
          quantity: 'x2',
        },
        {
          text: 'Google Meet with all Lunatix players',
          quantity: 'x2',
        },
        {
          text: 'Hang out with whole team',
          quantity: '',
        },
        {
          text: 'Favourite player follow fan on their MLBB account ',
          quantity: '',
        },
      ],
    },
    {
      buttonInactive: asc8,
      buttonActive: active_thq,
      banner: thq,
      logo: thq_logo,
      name: 'TEAM HAQ',
      desc: [
        {
          text: 'Meet and Greet with players',
          quantity: 'x2',
        },
        {
          text: 'Special gaming tips from players',
          quantity: '',
        },
        {
          text: 'Special wish from players for celebration',
          quantity: '',
        },
        {
          text: 'Specific social media content with player',
          quantity: '',
        },
        {
          text: 'Fun match with player',
          quantity: '',
        },
        {
          text: 'Livestream with player',
          quantity: '',
        },
        {
          text: 'Interview session with players',
          quantity: '',
        },
        {
          text: 'Gaming house tour with players',
          quantity: '',
        },
        {
          text: 'Official merchandise giveaway',
          quantity: '',
        },
      ],
    },
    {
      buttonInactive: asc9,
      buttonActive: active_todak,
      banner: todak,
      logo: todak_logo,
      name: 'TODAK',
      desc: [
        {
          text: 'Learn your lane class',
          quantity: 'x10',
        },
      ],
    },
    {
      buttonInactive: asc10,
      buttonActive: active_rsgmy,
      banner: rsgmy,
      logo: rsgmy_logo,
      name: 'RSG MY',
      desc: [
        {
          text: 'Ask Me Anything OR Chill Video Chat with 1 Player OR Coach',
          quantity: 'x10',
        },
      ],
    },
    {
      buttonInactive: asc11,
      buttonActive: active_flash,
      banner: flash,
      logo: flash_logo,
      name: 'FLASH',
      desc: [
        {
          text: 'Rank Mobile Legend match with player of your choice',
          quantity: 'x2',
        },
        {
          text: 'Favourite player follows user on Mobile Legends',
          quantity: 'x2',
        },
        {
          text: 'Visit team headquarter with players of your choice around',
          quantity: 'x2',
        },
        {
          text: 'Going out for a meal with players of your choice',
          quantity: 'x2',
        },
        {
          text: 'Hang out with players of your choice',
          quantity: 'x2',
        },
      ],
    },
    {
      buttonInactive: asc12,
      buttonActive: active_hbsg,
      banner: hbsg,
      logo: hbsg_logo,
      name: 'HOMEBOIS SG',
      desc: [
        {
          text: 'Movie night with team',
          quantity: 'x3',
        },
        {
          text: 'Facetime with favourite player',
          quantity: 'x3',
        },
        {
          text: 'Dinner with favourite player',
          quantity: 'x2',
        },
        {
          text: 'BBQ night with team',
          quantity: 'x2',
        },
      ],
    },
    {
      buttonInactive: asc13,
      buttonActive: active_stlk,
      banner: stlk,
      logo: stlk_logo,
      name: 'STELLARK',
      desc: [
        {
          text: 'Friendly Mobile Legend Match with Players',
          quantity: 'x3',
        },
        {
          text: 'Favourite player does a short video shoutout to user',
          quantity: 'x2',
        },
        {
          text: `Short Instagram/Tiktok livestream interaction with user via Stellark SG's social media platforms`,
          quantity: '',
        },
        {
          text: 'Dedicated birthday message from favourite player in the form of an e-greeting graphic on their birthday.',
          quantity: '',
        },
        {
          text: 'Exclusive wallpaper featuring favourite player',
          quantity: '',
        },
        {
          text: 'Priority invite to meet players at meet-and-greet Sessions',
          quantity: '',
        },
        {
          text: 'Stands a chance to be invited to watch favourite player at tournaments',
          quantity: '',
        },
      ],
    },
    {
      buttonInactive: asc14,
      buttonActive: active_rsgsg,
      banner: rsgsg,
      logo: rsgsg__logo,
      name: 'RSG SG',
      desc: [
        {
          text: 'Ask Me Anything OR Chill Video Chat with 1 Player OR Coach',
          quantity: 'x10',
        },
      ],
    },
  ];

  const style: React.CSSProperties = {
    width: 'auto',
    height: '100%',
    // width: '100%',
    // height: 'auto',
    objectFit: 'cover',
    backgroundImage: `${index ? `url(${data[index as number].banner})` : `url(${data[0].banner})`}`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  };

  return (
    <div className="flex flex-col items-center justify-center py-[5rem] lg:py-[10rem]">
      {/* mobile */}
      <div className="mx-12 xl:hidden">
        <p className="text-prize roboto-bold text-[24px] lg:text-[48px]">TEAM REWARDS</p>
        <p className="roboto-condensed mt-8 text-center text-[20px] text-base sm:mx-8 lg:mx-[5rem] lg:text-[24px]">
          Click on your favourite team to view what rewards they have to offer.
        </p>
        <p className="roboto-condensed mt-4 text-center text-[20px] text-base sm:mx-8 lg:mx-[5rem] lg:text-[24px]">
          Stand the chance to get close and personal with your favourite player!
        </p>
        <div className="bg-team-rewards logo-shadow mt-10 grid grid-cols-4 gap-4 py-4 sm:px-20 md:px-36">
          {data.map((item, i) => (
            <button className={i === 12 ? 'col-start-2' : ''} onClick={() => openModal(i)}>
              <img src={item.buttonInactive} alt="" />
            </button>
          ))}
        </div>
      </div>

      <div className="xl:hidden">
        <ModalLayout
          modalState={isOpen}
          handleClose={() => {
            setIsOpen(false);
          }}
        >
          <div className="h-[70vh] sm:h-[80vh] lg:h-[90vh]">
            <div style={style} className="flex flex-col justify-between py-20">
              <div className="flexcenter">
                <img src={data[index].logo} alt="" />
              </div>
              <div className="roboto-condensed px-8 xs:px-28 sm:px-36 md:px-48 lg:px-80">
                {data[index].desc.map(item => (
                  <li className="mt-1 text-[15px] text-[#0185FF] sm:text-[16px] lg:text-[18px]">
                    <>
                      <span className="-ml-2 text-white">{item.text}</span>
                      <span className="roboto-condensed-bold pl-2 text-white">{item?.quantity}</span>
                    </>
                  </li>
                ))}
              </div>
              <div className="roboto-condensed-bold text-center text-[15px] sm:text-[16px] lg:text-[18px]">
                {data[index].name}
              </div>
            </div>
          </div>
        </ModalLayout>
      </div>

      {/* dekstop */}
      <div className="mx-20 hidden grid-cols-2 gap-5 pb-10 xl:grid">
        <div>
          <p className="text-prize roboto-bold text-[24px] lg:text-[48px]">TEAM REWARDS</p>
        </div>
        <div></div>
        <div className="">
          <p className="mt-6 text-center">
            Click on your favourite team to view what rewards they have to offer. Stand the chance to get close and
            personal with your favourite player.
          </p>
          <div className="logo-shadow mt-10 grid grid-cols-5 gap-5 4k:gap-20">
            {firstRow.map((image, i) => (
              <button onClick={() => displayTeamRewards(i)}>
                <div ref={XLImgRef}>
                  <img src={index === i ? image.active : image.inactive} alt="" />
                </div>
              </button>
            ))}
          </div>
          <div className="flexcenter mt-[1.25rem] gap-5">
            {secondRow.map((img, i) => (
              <button onClick={() => displayTeamRewards(i + 10)}>
                <img
                  style={{ width: XLDimensions.width, height: XLDimensions.height }}
                  src={index === i + 10 ? img.active : img.inactive}
                  alt=""
                />
              </button>
            ))}
          </div>
          <p className="mb-6 mt-20 text-center text-[16px]">*All rewards will be disbursed after 30th November 2023</p>
        </div>
        <div className="bg-team-rewards ">
          <div className="flex flex-col justify-between py-10" style={style}>
            <div className="flexcenter">
              <img src={data[index].logo} alt="" />
            </div>
            <div className="roboto-condensed xl:px-24 2xl:px-[10rem] sxl:px-52">
              {data[index].desc.map(item => (
                <li className="mt-2 text-[15px] text-[#0185FF] xl:text-[17px]">
                  <>
                    <span className="-ml-2 text-white">{item.text}</span>
                    <span className="roboto-condensed-bold pl-2 text-white">{item?.quantity}</span>
                  </>
                </li>
              ))}
            </div>
            <div className="roboto-condensed-bold text-center">{data[index].name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
