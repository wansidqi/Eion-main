import { useState, useEffect, useRef } from 'react';
import leader from '@assets/images/LandingPage/leader.png';
import player from '@assets/images/LandingPage/player.png';
import skills from '@assets/images/LandingPage/skills.png';
import fire from '@assets/images/LandingPage/fire.png';
import lock from '@assets/images/LandingPage/lock.png';
import inactiveDots from '@assets/images/LandingPage/inactive-dots.png';
import activeDots from '@assets/images/LandingPage/active-dots.png';
import leaderAA from '@assets/images/LandingPage/leader_aa_copy.png';
import leaderBasic from '@assets/images/LandingPage/leader_basic_copy.png';
import leaderGold from '@assets/images/LandingPage/leader_gold_copy.png';
import playerBasic from '@assets/images/LandingPage/player_basic_copy.png';
import playerGold from '@assets/images/LandingPage/player_gold_copy.png';
import skillBasic from '@assets/images/LandingPage/skill_basic_copy.png';
import skillSilver from '@assets/images/LandingPage/skill_silver_copy.png';
import skillGold from '@assets/images/LandingPage/skill_gold_copy.png';
import supportBasic from '@assets/images/LandingPage/support_basic_copy.png';
import supportSilver from '@assets/images/LandingPage/support_silver_copy.png';

// import '../../../css/button.css';
// import '../../../css/color.css';
// import '../../../css/body.css';

const details = [
  {
    // id: 1,
    title: 'LEADER CARDS',
    description:
      'Forge an indomitable alliance with mythical leaders, shaping your dream team’s destiny and reaping extraordinary rewards as an esports manager',
  },
  {
    // id: 2,
    title: 'PLAYER CARDS',
    description:
      'Choose your star players as they accumulate points that reflect their prowess in the game. Earn points based on their Kills, Assists, and Deaths, and the longer the game goes, the more opportunities for points!',
  },
  {
    // id: 3,
    title: 'SKILL CARDS',
    description:
      'Personalize each player’s cards to greatness with skill cards, awarding points for personal achievements and records gained during the game!',
  },
  {
    // id: 4,
    title: 'SUPPORT CARDS',
    description:
      'Strategically deploy support cards to orchestrate game-changing situations in the game, earning precious points as your team overcomes adversity.',
  },
];

const leaderImages = [leaderAA, leaderBasic, leaderGold];
const playerImages = [playerBasic, playerGold];
const skillImages = [skillBasic, skillSilver, skillGold];
const supportImages = [supportBasic, supportSilver];

export function ImageSlider() {
  const [selectedImage, setSelectedImage] = useState<string[]>(leaderImages);
  const [isActive, setIsActive] = useState(false);

  const [button, setButton] = useState('player');
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // const goToPrevious = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? selectedImage.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  const goToNext = () => {
    const isLastSlide = currentIndex == selectedImage.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

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

  const toggleButton = () => {
    setIsActive(prevIsActive => !prevIsActive);
  };

  const handleCardClick = (content: string) => {
    setButton(content);
    switch (content) {
      case 'leader':
        setSelectedImage(leaderImages);
        break;
      case 'player':
        setSelectedImage(playerImages);
        break;
      case 'skills':
        setSelectedImage(skillImages);
        break;
      case 'fire':
        setSelectedImage(supportImages);
        break;
    }
    toggleButton();
    // active || inactive
    // setSelectedCard(id);
  };

  console.log(currentIndex);

  return (
    <>
      {/* desktop */}
      <div className=" hidden lg:block">
        <div className="container mx-auto flex h-auto w-full flex-row">
          {/* displays card leader/player/skills */}
          <div className="flex w-[40%] flex-row justify-end py-10">
            <div className="py-40">
              {/* auto slide */}
              <div className="containerStyle">
                <div className="relative h-auto">
                  <div className="relative h-full w-72 items-center">
                    <img
                      key={currentIndex}
                      src={selectedImage?.[currentIndex]}
                      className="relative w-fit items-center"
                    />
                    <div className="w-fixed flex  w-72 flex-row justify-center">
                      {selectedImage.map(slideIndex => (
                        <img key={slideIndex} src={inactiveDots} onClick={() => goToNext()} className="px-1 py-2" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* auto slide finish */}
            </div>
          </div>

          <div className="py-42 my-6 flex w-[60%] flex-col items-center justify-center">
            <div className="py-6">
              {button == 'leader' && (
                <p className="text-['Roboto Condensed']  text-3xl font-bold tracking-[.10em] drop-shadow-xl">
                  {details[0].title}
                </p>
              )}

              {button == 'player' && (
                <p className="text-['Roboto Condensed']  text-3xl font-bold tracking-[.10em] drop-shadow-xl">
                  {details[1].title}
                </p>
              )}
              {button == 'skills' && (
                <p className="text-['Roboto Condensed']  text-3xl font-bold tracking-[.10em] drop-shadow-xl">
                  {details[2].title}
                </p>
              )}

              {button == 'fire' && (
                <p className="text-['Roboto Condensed']  text-3xl font-bold tracking-[.10em] drop-shadow-xl">
                  {details[3].title}
                </p>
              )}
            </div>

            <div className="flex flex-row justify-center gap-4">
              <button className="focus:bg-opacity-700 focus:white bg-black bg-opacity-60 focus:shadow-md focus:shadow-sky-50">
                <img src={leader} className="w-16 bg-black" onClick={() => handleCardClick('leader')} />
              </button>
              <button className="focus:bg-opacity-700 focus:white bg-black bg-opacity-60 focus:shadow-md focus:shadow-sky-50">
                <img src={player} className="w-16" onClick={() => handleCardClick('player')} />
              </button>
              <button className="focus:bg-opacity-700 focus:white bg-black bg-opacity-60 focus:shadow-md focus:shadow-sky-50">
                <img src={skills} className="w-16 " onClick={() => handleCardClick('skills')} />
              </button>
              <button className="focus:bg-opacity-700 focus:white bg-black bg-opacity-60 focus:shadow-md focus:shadow-sky-50">
                <img src={fire} className="w-16" onClick={() => handleCardClick('fire')} />
              </button>
              <button className="focus:bg-opacity-700 focus:white bg-black bg-opacity-60 focus:shadow-md focus:shadow-sky-50">
                <img src={lock} className="w-16" />
              </button>
              <div className="h-14 w-14 bg-white"></div>
            </div>

            <div className="flex justify-center py-4">
              {button == 'leader' && (
                <p className="text-[Open Sans] w-[40%] px-4  text-justify  text-sm">{details[0].description}</p>
              )}

              {button == 'player' && (
                <p className="text-[Open Sans] w-[40%] px-5 text-justify  text-sm">{details[1].description}</p>
              )}
              {button == 'skills' && (
                <p className="text-[Open Sans] w-[40%] px-3   text-justify   text-sm">{details[2].description}</p>
              )}
              {button == 'fire' && (
                <p className="text-[Open Sans] w-[40%] px-6  text-justify  text-sm">{details[3].description}</p>
              )}
            </div>

            <div className="flex flex-row gap-8 py-4">
              <button className=" blue-radial-linear h-30  w-auto p-4 text-sm shadow-md shadow-black">
                <a href="/how-to-play"> LEARN TO PLAY</a>
              </button>

              <button className="purple-linear-gradient h-30 w-auto p-4 text-sm  shadow-md shadow-black">
                <a href="/card-album"> CARD ALBUM</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="lg:bg-cardTypes block scale-90 lg:hidden">
        <div className="flex w-full flex-col">
          <div className="flex flex-col items-center justify-center">
            <div className="flex w-full items-center justify-center py-2">
              {button == 'leader' && (
                <p className="text-['Roboto Condensed']  text-3xl font-bold tracking-[.10em] drop-shadow-xl">
                  {details[0].title}
                </p>
              )}

              {button == 'player' && (
                <p className="text-['Roboto Condensed']  text-3xl font-bold tracking-[.10em] drop-shadow-xl">
                  {details[1].title}
                </p>
              )}
              {button == 'skills' && (
                <p className="text-['Roboto Condensed']  text-3xl font-bold tracking-[.10em] drop-shadow-xl">
                  {details[2].title}
                </p>
              )}

              {button == 'fire' && (
                <p className="text-['Roboto Condensed']  text-3xl font-bold tracking-[.10em] drop-shadow-xl">
                  {details[3].title}
                </p>
              )}
            </div>

            {/* auto slide */}
            <div className="containerStyle hidden">
              <div className="h-auto">
                <div className="h-full w-64 items-center">
                  <img key={currentIndex} src={selectedImage?.[currentIndex]} className="items-center" />
                  <div className="w-fixed flex  w-72 flex-row justify-center">
                    {selectedImage.map(slideIndex => (
                      <img
                        key={slideIndex}
                        src={isActive ? activeDots : inactiveDots}
                        //                         alt={isActive ? 'Active' : 'Inactive'}
                        onClick={() => goToSlide(slideIndex)}
                        className="px-1 py-2"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* end auto slide */}

            <div className="flex flex-row justify-center gap-4">
              <button className="focus:bg-opacity-700 focus:white focus:shadow-white-700 rounded-md bg-opacity-100  focus:shadow-md">
                <img src={leader} className="w-16 bg-black" onClick={() => handleCardClick('leader')} />
              </button>
              <button className="focus:bg-opacity-600 focus:white focus:shadow-silver-600  bg-black bg-opacity-90 focus:shadow-md">
                <img src={player} className="w-16" onClick={() => handleCardClick('player')} />
              </button>
              <button className="focus:bg-opacity-700 focus:white bg-black bg-opacity-60 focus:shadow-md focus:shadow-sky-50">
                <img src={skills} className="w-16 " onClick={() => handleCardClick('skills')} />
              </button>
              <button className="focus:bg-opacity-700 focus:white bg-black  bg-opacity-90 focus:shadow-md focus:shadow-blue-600">
                <img src={fire} className="w-16" onClick={() => handleCardClick('fire')} />
              </button>
              <button className="focus:bg-opacity-700 focus:white bg-black  bg-opacity-90 focus:shadow-md focus:shadow-blue-600">
                <img src={lock} className="w-16" />
              </button>
            </div>

            <div className="w-full py-4 text-center">
              {button == 'leader' && <p className="text-[Open Sans] text-sm">{details[0].description}</p>}

              {button == 'player' && <p className="text-[Open Sans] text-sm">{details[1].description}</p>}
              {button == 'skills' && <p className="text-[Open Sans] text-sm">{details[2].description}</p>}
              {button == 'fire' && <p className="text-[Open Sans] text-sm">{details[3].description}</p>}
            </div>

            <div className="flex flex-row gap-8 py-4">
              <button className=" blue-radial-linear h-30  w-auto p-4 text-sm shadow-md shadow-black">
                <a href="/how-to-play"> LEARN TO PLAY</a>
              </button>

              <button className="purple-linear-gradient h-30 w-auto p-4 text-sm  shadow-md shadow-black">
                <a href="/card-album"> CARD ALBUM</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Old Code

// const details = [
//   {
//     // id: 1,
//     title: 'LEADER CARDS',
//     description:
//       'Forge an indomitable alliance with mythical leaders, shaping your dream team’s destiny and reaping extraordinary rewards as an esports manager',
//   },
//   {
//     // id: 2,
//     title: 'PLAYER CARDS',
//     description:
//       'Choose your star players as they accumulate points that reflect their prowess in the game. Earn points based on their Kills, Assists, and Deaths, and the longer the game goes, the more opportunities for points!',
//   },
//   {
//     // id: 3,
//     title: 'SKILL CARDS',
//     description:
//       'Personalize each player’s cards to greatness with skill cards, awarding points for personal achievements and records gained during the game!',
//   },
//   {
//     // id: 4,
//     title: 'SUPPORT CARDS',
//     description:
//       'Strategically deploy support cards to orchestrate game-changing situations in the game, earning precious points as your team overcomes adversity.',
//   },
// ];

// const leaderImages = [leaderAA, leaderBasic, leaderGold];
// const playerImages = [playerBasic, playerGold];
// const skillImages = [skillBasic, skillSilver, skillGold];
// const supportImages = [supportBasic, supportSilver];

// export function CardRarity() {
//   const [selectedCard, setSelectedCard] = useState<string>('');
//   const [selectedImage, setSelectedImage] = useState<string[]>(leaderImages);
//   const [isActive, setIsActive] = useState(false);
//   const [button, setButton] = useState('leader');

//   const timerRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? selectedImage.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToNext = () => {
//     const isLastSlide = currentIndex == selectedImage.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };
//   const toggleButton = () => {
//     setIsActive(prevIsActive => !prevIsActive);
//   };
//   const goToSlide = (slideIndex: any) => {
//     setCurrentIndex(slideIndex);
//   };

//   const handleCardClick = (content: string) => {
//     setButton(content);
//     switch (content) {
//       case 'leader':
//         setSelectedImage(leaderImages);
//         break;
//       case 'player':
//         setSelectedImage(playerImages);
//         break;
//       case 'skills':
//         setSelectedImage(skillImages);
//         break;
//       case 'fire':
//         setSelectedImage(supportImages);
//         break;
//     }
//     toggleButton();
//     // active || inactive
//     // setSelectedCard(id);
//   };

//   useEffect(() => {
//     timerRef.current = setTimeout(() => {
//       goToNext();
//     }, 4000);
//   });
//   console.log(currentIndex);

//   return (
//     <div className="scale-90 bg-cardTypes">
//       <div className="flex w-full flex-row">
//         {/* displays card leader/player/skills */}
//         <div className="flex w-[40%] flex-row justify-end py-10">
//           <div className="py-40">
//             {/* auto slide */}
//             <div className="containerStyle">
//               <div className="relative h-auto">
//                 <div className="relative h-full w-72 items-center">
//                   <img key={currentIndex} src={selectedImage?.[currentIndex]} className="relative w-fit items-center" />
//                   <div className="w-fixed flex  w-72 flex-row justify-center">
//                     {selectedImage.map((img, slideIndex) => (
//                       <img
//                         key={slideIndex}
//                         src={isActive ? activeDots : inactiveDots}
//                         alt={isActive ? 'Active' : 'Inactive'}
//                         onClick={() => goToSlide(slideIndex)}
//                         className="px-1 py-2"
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* )} */}

//             {/* auto slide finish */}
//           </div>
//         </div>

//         <div className="py-42 my-6 flex w-[60%]  flex-col items-center justify-center">
//           <div className="py-6">
//             {button == 'leader' && (
//               <p className="text-['Roboto Condensed']  text-3xl font-bold tracking-[.10em] drop-shadow-xl">
//                 {details[0].title}
//               </p>
//             )}

//             {button == 'player' && (
//               <p className="text-['Roboto Condensed']  text-3xl font-bold tracking-[.10em] drop-shadow-xl">
//                 {details[1].title}
//               </p>
//             )}
//             {button == 'skills' && (
//               <p className="text-['Roboto Condensed']  text-3xl font-bold tracking-[.10em] drop-shadow-xl">
//                 {details[2].title}
//               </p>
//             )}

//             {button == 'fire' && (
//               <p className="text-['Roboto Condensed']  text-3xl font-bold tracking-[.10em] drop-shadow-xl">
//                 {details[3].title}
//               </p>
//             )}
//           </div>

//           <div className="flex flex-row justify-center gap-4">
//             <button className="focus:bg-opacity-700 focus:white focus:shadow-white-700 bg-opacity-100 focus:shadow-md  rounded-md">
//               <img src={leader} className="w-16 bg-black" onClick={() => handleCardClick('leader')} />
//             </button>
//             <button className="focus:bg-opacity-600 focus:white focus:shadow-silver-600  bg-opacity-90 focus:shadow-md bg-black">
//               <img src={player} className="w-16" onClick={() => handleCardClick('player')} />
//             </button>
//             <button className="focus:bg-opacity-700 focus:white bg-opacity-60 focus:shadow-md focus:shadow-sky-50 bg-black">
//               <img src={skills} className="w-16 " onClick={() => handleCardClick('skills')} />
//             </button>
//             <button className="focus:bg-opacity-700 focus:white bg-opacity-90  focus:shadow-md focus:shadow-blue-600 bg-black">
//               <img src={fire} className="w-16" onClick={() => handleCardClick('fire')} />
//             </button>
//             <button className="focus:bg-opacity-700 focus:white bg-opacity-90  focus:shadow-md focus:shadow-blue-600 bg-black">
//               <img src={lock} className="w-16" />
//             </button>
//           </div>

//           <div className="flex justify-center py-4">
//             {button == 'leader' && (
//               <p className="text-[Open Sans] w-[40%]  text-justify  text-sm">{details[0].description}</p>
//             )}

//             {button == 'player' && (
//               <p className="text-[Open Sans] w-[40%] text-justify  text-sm">{details[1].description}</p>
//             )}
//             {button == 'skills' && (
//               <p className="text-[Open Sans] w-[40%]   text-justify   text-sm">{details[2].description}</p>
//             )}
//             {button == 'fire' && (
//               <p className="text-[Open Sans] w-[40%]   text-justify  text-sm">{details[3].description}</p>
//             )}
//           </div>

//           <div className="flex flex-row gap-8 py-4">
//             <button className=" blue-radial-linear h-30  w-auto p-4 text-sm shadow-md shadow-black">
//               <a href="#"> LEARN TO PLAY</a>
//             </button>

//             <button className="purple-linear-gradient h-30 w-auto p-4 text-sm  shadow-md shadow-black">
//               <a href="/card-album"> CARD ALBUM</a>
//             </button>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
