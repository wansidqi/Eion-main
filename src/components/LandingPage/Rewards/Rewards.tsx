// import prizepool from '@assets/images/Rewards/prizePool.png';
import fanExperience from '@assets/images/Rewards/fan experience 2 1.png';
import boosterPack from '@assets/images/Rewards/3cardss.png';
import '../../../css/animation.css';
import '../../../css/body.css';
import '../../../css/color.css';
import { PlayNow } from '../..';

export function Reward() {
  const data = [
    // {
    //   id: 1,
    //   image: prizepool,
    //   title: 'SEASONAL AND WEEKLY PRIZE POOL',
    // },
    {
      id: 2,
      image: fanExperience,
      title: 'FAN EXPERIENCES',
    },
    {
      id: 3,
      image: boosterPack,
      title: 'BOOSTER PACKS',
    },
  ];

  return (
    <div className="bg-end mt-1">
      <div className="mx-auto -mt-1 h-screen py-[6rem] text-center md:flex md:flex-col md:items-center md:justify-center md:py-0 lg:w-3/4 lg:pt-52 xl:pt-72">
        <div>
          <h1 className="deadjim-shadow  text-center text-4xl font-bold tracking-wider  lg:text-[48px] sxl:mt-12">
            EARN EPIC REWARDS!
          </h1>
        </div>

        <div className="flex items-center justify-center">
          <p className="roboto-condensed w-5/6 py-8 text-center text-base font-semibold lg:w-3/5 lg:text-[20px]">
            Unleash your competitive spirit, ascend the leader board, and be rewarded with exciting cash prizes! Plus,
            Immerse yourself in an unforgettable fan experience alongside your adored team!
          </p>
        </div>
        <div className="grid grid-rows-2 ">
          <div className="grid grid-cols-2 items-center justify-center xl:gap-10">
            <>
              {data.map((datas, index) => (
                <>
                  {index === 0 && (
                    <>
                      <div className="mx-auto flex items-center justify-center">
                        <img src={datas.image} className="w-2/3 lg:w-auto" key={index} />
                      </div>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <div className="mx-auto flex items-center justify-center">
                        <img src={datas.image} className="w-2/3 lg:w-auto" key={index} />
                      </div>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <div className="mx-auto flex items-center justify-center">
                        <img src={datas.image} className="w-[90%] lg:mt-8 lg:w-auto" key={index} />
                      </div>
                    </>
                  )}
                </>
              ))}
            </>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 items-start justify-center gap-10">
            {data.map((datas, index) => (
              <>
                {index === 0 && (
                  <>
                    <div className="flex items-center justify-center">
                      <p className="deadjim  w-9/12  text-center text-[14px]  tracking-wider lg:text-[32px]">
                        {datas.title}
                      </p>
                    </div>
                  </>
                )}
                {index === 1 && (
                  <>
                    <div className="flex items-center justify-center ">
                      <p className="deadjim w-9/12  text-center text-[14px]  tracking-wider lg:text-[32px]">
                        {datas.title}
                      </p>
                    </div>
                  </>
                )}
                {index === 2 && (
                  <>
                    <div className="flex items-center justify-center">
                      <p className="deadjim w-9/12 text-center text-[14px] tracking-wider lg:text-[32px]">
                        {datas.title}
                      </p>
                    </div>
                  </>
                )}
              </>
            ))}
            <div className="col-span-3 -mt-6 flex items-start justify-center lg:-mt-10">
              <p className="roboto-condensed w-5/6 text-center text-xs font-semibold lg:w-3/5  lg:text-[20px] xl:-mt-14 sxl:mt-0">
                *Upcoming rewards in Q1 2024
              </p>
            </div>
          </div>
        </div>

        {/* <div className="hidden lg:flex lg:flex-row lg:justify-around">
          {data.map((datas, index) => (
            <>
              <div className="flex flex-col py-5">
                {index === 0 && (
                  <>
                    <div className="flex items-center justify-center">
                      <img src={datas.image} className=" w-2/3 lg:w-8/12" key={index} />
                    </div>

                    <div className="flex items-center justify-center py-6">
                      <p className="deadjim-shadow  w-8/12 text-center text-[32px] tracking-wider">{datas.title}</p>
                    </div>
                  </>
                )}
                {index === 1 && (
                  <>
                    <div className="flex items-center justify-center">
                      <img src={datas.image} className=" w-2/3 lg:w-10/12" key={index} />
                    </div>
                    <div className="flex items-center justify-center py-2">
                      <p className="deadjim-shadow my-2 text-center text-[32px] tracking-wider">{datas.title}</p>
                    </div>
                  </>
                )}
                {index === 2 && (
                  <>
                    <div className="flex items-center justify-center py-2">
                      <img src={datas.image} className="w-2/3 lg:my-4 lg:w-10/12" key={index} />
                    </div>
                    <div className="flex items-center justify-center py-6">
                      <p className="deadjim-shadow my-2 w-4/6 text-center text-[32px] tracking-wider">{datas.title}</p>
                    </div>
                  </>
                )}
              </div>
            </>
          ))}
        </div> */}

        {/* mobile */}

        {/* <div className="flex flex-row lg:hidden">
          {data.map((datas, index) => (
            <>
              <div className="flex w-1/3 flex-col  py-5 md:w-auto">
                {index === 0 && (
                  <div className="">
                    <div className="mx-10 flex items-center justify-center">
                      <img src={datas.image} className="w-24 md:w-[10rem]" key={index} />
                    </div>
                    <div className="flex items-center justify-center py-5">
                      <p className="deadjim w-9/12 text-center text-[10px] tracking-wider">{datas.title}</p>
                    </div>
                  </div>
                )}
                {index === 1 && (
                  <>
                    <div className="flex items-center justify-center">
                      <img src={datas.image} className="mx-10 -mt-2 w-20 md:w-[9rem]" key={index} />
                    </div>
                    <div className="flex items-center justify-center py-7">
                      <p className="deadjim w-9/12 text-center text-[10px] tracking-wider">{datas.title}</p>
                    </div>
                  </>
                )}
                {index === 2 && (
                  <>
                    <div className="mx-10 flex items-center justify-center">
                      <img src={datas.image} className="w-28   md:w-[11rem]" key={index} />
                    </div>
                    <div className="flex items-center justify-center py-8">
                      <p className="deadjim w-4/6 text-center text-[10px] tracking-wider">{datas.title}</p>
                    </div>
                  </>
                )}
              </div>
            </>
          ))}
        </div> */}
      </div>
      <PlayNow />
    </div>
  );
}

{
  /* <div className="grid-row-2 grid grid-cols-3 gap-7 px-4">
          {data.map((datas, index) => (
            <>
              <div className="test flexcenter-col relative">
                <img className="scale-[0.9]" src={datas.image} key={index} />
                <p className='absolute bottom-0'>hi</p>
              </div>
            </>
          ))}
        </div> */
}
