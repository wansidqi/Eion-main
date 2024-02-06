import { TextBlue } from '..';
import leaderboard from '@assets/images/Reward Page/newlb.png';

export function Seasonal() {
  return (
    <div className="bg-mainreward smoky-shadow flex flex-col items-center justify-center">
      <h1 className="text-seasonal roboto-bold pb-4 text-center text-[24px] lg:text-[48px] mt-10 lg:mt-20">
        CONQUER THE SEASONAL LEADERBOARD
      </h1>
      {/* <b className="text-dollar2 roboto-bold my-6 text-center text-[20px] lg:text-[48px]">
        US$ 2,500 + 25% Booster Pack Sale
      </b> */}
      <p className="roboto-condensed mx-8 mt-8 text-base lg:mx-[6rem] xl:mx-[12rem] lg:mt-10 lg:text-center lg:text-xl">
        Begin an exciting journey to dominate the Seasonal Leaderboard and earn the right to claim a{' '}
        <TextBlue content="TEAM REWARD" /> of your choice!
      </p>
      <p className="roboto-condensed mx-8 mt-4 text-base lg:mx-[6rem] xl:mx-[12rem] lg:mt-10 lg:text-center lg:text-xl">
        Each team has offered 10 incredible intangible experiences that you can win while progressing through the
        Seasonal Leaderboard Ranks. The top 140 players will have the opportunity to win these experiences.
      </p>
      <div className="scale-[0.8] lg:mt-20 lg:scale-[1]">
        <img src={leaderboard} alt="" />
      </div>
    </div>
  );
}
