import { useBoundStore } from '../../store';
import first from '@assets/images/Tutorial/first.png';
import begin from '@assets/images/HowtoPlay/begin-btn.png';

export function BeginTutorial() {
  const { setTutorialState } = useBoundStore();

  return (
    <div className="flexcenter-col relative h-auto">
      <img width={'400px'} className="absolute right-1/2 top-5 translate-x-1/2" src={first} alt="" />
      <div className="flexcenter-col z-10">
        <b className="deadjim mt-44 text-[110px]">HOW TO PLAY</b>
        <p className="roboto-condensed w-[400px] text-center text-[16px]">
          Unveil the Secrets of the Game. Develop Your Skills, Make Accurate Forecasts, and Claim the Title of Champion
          and Reap the Rewards!
        </p>
        <button onClick={() => setTutorialState({ selectIndex: 0 })} className=" mt-8 px-12 py-4">
          <img src={begin} />
        </button>
      </div>
    </div>
  );
}

export function BeginTutorialMobile() {
  const { setTutorialState } = useBoundStore();

  return (
    <div className="parent-image">
      <img className="image-mobile h-72" src={first} alt="" />
      <div className="flexcenter-col z-10">
        <b className="deadjim text-[20px]">HOW TO PLAY</b>
        <p className="roboto-condensed mx-14 mb-4 mt-2 text-center text-[12px] sm:mx-40 md:mx-64">
          Unveil the Secrets of the Game. Develop Your Skills, Make Accurate Forecasts, and Claim the Title of Champion
          and Reap the Rewards!
        </p>
        <button onClick={() => setTutorialState({ selectIndex: 0 })} className="w-[50%] sm:w-[30%] md:w-[25%] px-12">
          <img src={begin} />
        </button>
      </div>
    </div>
  );
}
