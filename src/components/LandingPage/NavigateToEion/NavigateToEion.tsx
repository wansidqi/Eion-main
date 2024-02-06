// import { useState} from 'react';
import locker from '@assets/images/NavigateIntoEion/locker.png';
import refinement from '@assets/images/NavigateIntoEion/refinement-new.png';
import leaderboard from '@assets/images/NavigateIntoEion/leaderboard-new.png';
import invoke from '@assets/images/NavigateIntoEion/invoke.png';
import cornerTopLeft from '@assets/images/NavigateIntoEion/corner-top-left.png';
import cornerTopRight from '@assets/images/NavigateIntoEion/corner-top-right.png';
import cornerBottomLeft from '@assets/images/NavigateIntoEion/corner-bottom-left-latest.png';
import cornerBottomRight from '@assets/images/NavigateIntoEion/corner-bottom-right.png';

// import { AllStarCollaboration } from '../..';

export function NavigateToEion() {
  const plainCard = [
    {
      image: invoke,
      title: 'Prediction',
      description: 'Unleash Your Strategy: Predict, Play, Prevail in the World of Locker!',
    },
    {
      image: locker,
      title: 'esports manager',
      description: 'Coming Soon',
      style: 'text-center flexcenter',
    },
    {
      image: leaderboard,
      title: 'Leaderboard',
      description:
        'Embark on an exhilarating journey to conquer the seasonal leaderboard, claim epic weekly and seasonal rewards!',
    },
    {
      image: refinement,
      title: 'Card Advancement',
      description:
        'Refine duplicate cards, and level them up as you embark on an adrenaline-pumping journey to earn exclusive experiences!',
    },
  ];

  return (
    <>
      <div className="bg-section-2 relative lg:-mt-4">
        <div className="absolute -top-4 flex w-full flex-row items-center justify-between md:-top-10">
          <img src={cornerTopLeft} className="-ml-2  w-[10rem] md:w-[20rem] lg:w-[30rem] " />
          <img src={cornerTopRight} className="-mr-2 w-[10rem] md:w-[20rem] lg:w-[30rem]" />
        </div>
        <div className=" flex flex-col items-center justify-center py-14 lg:h-screen lg:py-10">
          <div className="container mx-auto w-3/4">
            <div className="flex flex-col pb-4 pt-10 lg:py-24">
              <div className=" mb-8 w-full ">
                <p className="deadjim-shadow text-center text-4xl font-bold tracking-wide lg:text-4xl">
                  NAVIGATE INTO EION
                </p>
                <p className="roboto-condensed text-center text-[16px] lg:text-[20px] ">Adventure Awaits!</p>
              </div>

              <div className="grid grid-cols-2 gap-8  md:grid-cols-4">
                {plainCard.map((details, i) => {
                  return (
                    <div className="flex flex-col gap-y-4">
                      <img key={i} src={details.image} className="" />
                      <p className="deadjim text-center text-[14px] tracking-wide  md:text-[26px]">{details.title}</p>
                      <p className={`roboto-condensed-no-shadow  text-sm font-extralight${details.style}`}>
                        {details.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* mobile */}
              {/* <div className="grid grid-cols-2 gap-4 lg:hidden">
                {plainCard.map(details => {
                  return (
                    <div className="items-center lg:mx-3 lg:my-4 lg:w-1/2">
                      <img key={details.id} src={details.image} className="" />
                      <p className="deadjim-shadow py-2 text-center text-[26px] text-sm tracking-wider">
                        {details.title}
                      </p>
                      <p className="roboto-condensed  text-[11px] leading-none ">{details.description}</p>
                    </div>
                  );
                })}
              </div> */}
            </div>
          </div>
        </div>
        <div className="absolute -bottom-4 flex w-full flex-row items-center justify-between md:-bottom-10 lg:-bottom-16">
          <img src={cornerBottomLeft} className="-ml-6 w-[10rem] md:w-[20rem] lg:w-[30rem] " />
          <img src={cornerBottomRight} className="-mr-6 w-[10rem]  md:w-[20rem] lg:w-[30rem]" />
        </div>
      </div>
    </>
  );
}
