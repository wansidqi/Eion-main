import { useState, useEffect, useRef } from 'react';
// icons images
import inactiveLeader from '@assets/images/Rarity-Icon/leader-inactive.svg';
import activeLeader from '@assets/images/Rarity-Icon/leader-active.svg';
import inactivePlayer from '@assets/images/Rarity-Icon/inactive-player.svg';
import inactiveSkill from '@assets/images/Rarity-Icon/inactive-skill.svg';
import inactiveSupport from '@assets/images/Rarity-Icon/inactive-support.svg';
import inactiveLock from '@assets/images/Rarity-Icon/inactive-lock.svg';
import activePlayer from '@assets/images/Rarity-Icon/active-player.svg';
import activeSkill from '@assets/images/Rarity-Icon/active-skill.svg';
import activeSupport from '@assets/images/Rarity-Icon/active-support.svg';
import activeLock from '@assets/images/Rarity-Icon/active-lock.svg';

import inactiveDots from '@assets/images/LandingPage/inactive-dots.png';
import activeDots from '@assets/images/LandingPage/active-dots.png';
// card rarity images in new png
import leaderAA from '@assets/images/CardRarity/new-png/11. The Wizard (Ultra Rare).png';
import leaderBasic from '@assets/images/CardRarity/new-png/11. The Wizard.png';
import leaderGold from '@assets/images/CardRarity/new-png/11. The Wizard (Super Rare).png';
import playerBasic from '@assets/images/CardRarity/new-png/PH12-026 SR_compressed-40b362ca.png';
import playerGold from '@assets/images/CardRarity/new-png/MY12-006 C_compressed-1b80c849.png';
import skillBasic from '@assets/images/CardRarity/new-png/17. Secret Ritual (Common).png';
import skillSilver from '@assets/images/CardRarity/new-png/17. Secret Ritual (Rare).png';
import skillGold from '@assets/images/CardRarity/new-png/17. Secret Ritual (Super Rare).png';
import supportBasic from '@assets/images/CardRarity/new-png/36. Item Showcase (Common).png';
import supportSilver from '@assets/images/CardRarity/new-png/35. Item Showcase.png';
import lock from '@assets/images/CardRarity/new-png/Lock.png';

// import comingsoon from '@assets/images/CardRarity/lock-coming-soon.png';
import learntoplay from '@assets/images/CardRarity/learn-to-play.png';
import cardAlbum from '@assets/images/CardRarity/card-album.png';

import '../../../css/button.css';
import '../../../css/color.css';
import '../../../css/body.css';
import { useNavigate } from 'react-router-dom';

const details = [
  {
    title: 'LEADER CARDS',
    inactiveButton: inactiveLeader,
    activeButton: activeLeader,
    description:
      'Forge an indomitable alliance with mythical leaders, shaping your dream team’s destiny and reaping extraordinary rewards as an esports manager',
  },
  {
    title: 'PLAYER CARDS',
    inactiveButton: inactivePlayer,
    activeButton: activePlayer,
    description:
      'Choose your star players as they accumulate points that reflect their prowess in the game. Earn points based on their Kills, Assists, and Deaths, and the longer the game goes, the more opportunities for points!',
  },
  {
    title: 'SKILL CARDS',
    inactiveButton: inactiveSkill,
    activeButton: activeSkill,
    description:
      'Personalize each player’s cards to greatness with skill cards, awarding points for personal achievements and records gained during the game!',
  },
  {
    title: 'SUPPORT CARDS',
    inactiveButton: inactiveSupport,
    activeButton: activeSupport,
    description:
      'Strategically deploy support cards to orchestrate game-changing situations in the game, earning precious points as your team overcomes adversity.',
  },
  {
    title: 'COMING SOON',
    inactiveButton: inactiveLock,
    activeButton: activeLock,

    description: 'Stay tuned!',
  },
];

const leaderImages = [leaderBasic, leaderGold, leaderAA];
const playerImages = [playerBasic, playerGold];
const skillImages = [skillBasic, skillSilver, skillGold];
const supportImages = [supportBasic, supportSilver];
const lockImages = [lock];

export function CardRarity() {
  // const [selectedCard, setSelectedCard] = useState<string>('');
  // const [_, setIsActive] = useState(false);
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string[]>(playerImages);
  const [button, setButton] = useState('PLAYER CARDS');
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const card = details.find(card => card.title.includes(button));

  const goToNext = () => {
    const isLastSlide = currentIndex == selectedImage.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const selectSliderIndex = (i: number) => {
    setCurrentIndex(i);
  };

  // const toggleButton = () => {
  //   setIsActive(prevIsActive => !prevIsActive);
  // };

  // const goToSlide = (slideIndex: any) => {
  //   setCurrentIndex(slideIndex);
  // };

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    const timerId = setTimeout(() => {
      goToNext();
    }, 3000);
    timerRef.current = timerId;

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  });
  // const toggleButton = () => {
  //   setIsActive(prevIsActive => !prevIsActive);
  // };

  const handleCardClick = (content: string) => {
    setButton(content);
    setCurrentIndex(0);
    switch (content) {
      case 'LEADER CARDS':
        setSelectedImage(leaderImages);
        break;
      case 'PLAYER CARDS':
        setSelectedImage(playerImages);
        break;
      case 'SKILL CARDS':
        setSelectedImage(skillImages);
        break;
      case 'SUPPORT CARDS':
        setSelectedImage(supportImages);
        break;
      case 'COMING SOON':
        setSelectedImage(lockImages);
        break;
    }
    // toggleButton();
    // active || inactive
    // setSelectedCard(id);
  };

  return (
    <>
      {/* desktop */}
      <div className="card-rarity-bg hidden md:block">
        <div className="mx-auto -mt-[0.5rem] flex h-auto w-full flex-col md:scale-[1.1] md:flex-row 2xl:scale-[1.3]">
          {/* displays card leader/player/skills */}
          <div className="flex flex-row justify-end py-10 md:w-full lg:w-[45%]">
            <div className="py-32">
              {/* auto slide */}
              <div className="containerStyle">
                <div className="relative h-auto">
                  <div className="relative h-[380px] w-64 items-center">
                    <img
                      key={currentIndex}
                      src={selectedImage?.[currentIndex]}
                      className="flexcenter relative"
                      // className="flexcenter relative h-[340px] w-[375px]"
                    />

                    <div className="w-fixed absolute bottom-0 flex w-64 flex-row justify-center">
                      {selectedImage.map((slideIndex, i) => (
                        <>
                          <img
                            width={'20px'}
                            key={slideIndex}
                            src={i === currentIndex ? activeDots : inactiveDots}
                            onClick={() => selectSliderIndex(i)}
                            className="flexcenter relative"
                          />
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* auto slide finish */}
            </div>
          </div>

          <div className="mx-20 my-6 flex flex-col items-start justify-center py-32 lg:w-[35%] xl:w-[22%]">
            <div className="py-6">
              {card && (
                <p className="deadjim text-[40px] font-bold tracking-[.10em] drop-shadow-xl lg:text-[38px]">
                  {card.title}
                </p>
              )}
            </div>
            <div className="flex h-[66px] flex-row justify-center gap-1">
              {details.map(item => (
                <button onClick={() => handleCardClick(item.title)} className="flex items-center justify-center">
                  <img src={item.title === button ? item.activeButton : item.inactiveButton} alt="" />
                </button>
              ))}
            </div>
            <div className="flex h-20 justify-start py-4">
              {card && <p className="roboto-condensed  text-justify text-[12px]">{card.description}</p>}
            </div>

            <div className="flex flex-row gap-4 py-8">
              <button onClick={() => navigate('/how-to-play')} className="w-36">
                <img src={learntoplay} />
              </button>
              <button onClick={() => navigate('/card-album')} className="w-36">
                <img src={cardAlbum} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="card-rarity-bg block w-screen bg-black md:hidden">
        <div className="container mx-auto flex h-auto w-full flex-col py-7">
          {/* displays card leader/player/skills */}
          <div className="flexcenter mt-10 text-[32px]">
            {card && <p className="deadjim text-[36px] font-bold tracking-[.10em]">{card.title}</p>}
          </div>
          <div className="mx-10 my-4 flex h-[66px] flex-row justify-center gap-1">
            {details.map(item => (
              <button onClick={() => handleCardClick(item.title)} className="flex items-center justify-center">
                <img src={item.title === button ? item.activeButton : item.inactiveButton} alt="" className="" />
              </button>
            ))}
          </div>
          <div className="flex flex-row justify-center">
            <div className="flexcenter">
              {/* auto slide */}
              <div className="containerStyle">
                <div className="relative h-auto">
                  <div className="relative h-[390px] w-64 items-center">
                    <img
                      key={currentIndex}
                      src={selectedImage?.[currentIndex]}
                      className="flexcenter relative h-[380px] w-[375px]"
                      // className="flexcenter relative h-[340px] w-[375px]"
                    />
                    <div className="w-fixed absolute bottom-0 flex w-64  flex-row justify-center">
                      {selectedImage.map((slideIndex, i) => (
                        <>
                          <img
                            width={'20px'}
                            key={slideIndex}
                            src={i === currentIndex ? activeDots : inactiveDots}
                            onClick={() => selectSliderIndex(i)}
                            className="flexcenter"
                          />
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* auto slide finish */}
            </div>
          </div>
          <div className="mx-8 mt-36 flex h-20 justify-center">
            {card && <p className="roboto-condensed text-center text-sm">{card.description}</p>}
          </div>
          <div className="flexcenter my-5">
            <button onClick={() => navigate('/how-to-play')} className="w-36">
              <img src={learntoplay} />
            </button>
            <button onClick={() => navigate('/card-album')} className="w-36 ">
              <img src={cardAlbum} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
