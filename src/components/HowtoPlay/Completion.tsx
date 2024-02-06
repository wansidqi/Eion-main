import { useSequentialRendering } from '../../hook';
import season1 from '@assets/images/Tutorial/season4.png';
import complete from '@assets/images/Tutorial/complete-button.png';
import { TextDescription } from '..';

function Part1() {
  return (
    <div className="flexcenter relative h-full bg-black">
      <img width={'400px'} className="top-30 absolute right-1/2 translate-x-1/2 scale-[1.2]" src={season1} alt="" />
      <div className="appear roboto-condensed box-congrats absolute left-52 top-72 px-7 py-8 text-[22px] font-extrabold">
        <b className="deadjim mt-5 text-[40px]">CONGRATULATIONS!</b>
        <p className="mt-2">You've completed the guide!</p>
        <p className="mt-0">Good luck and welcome to Eion!</p>
        <div className="flex items-center justify-center">
          <a href="https://play.eion.gg" target="_blank" className="absolute bottom-5">
            <img src={complete} />
          </a>
        </div>
      </div>
    </div>
  );
}

export function Completion() {
  const parts: React.ReactNode[] = [<Part1 />];

  // const hasTextValues: boolean[] = [true];

  const currentIndex = useSequentialRendering(parts, );

  return <>{parts[currentIndex]}</>;
}

function Part1Mobile() {
  return (
    <div className="parent-image">
      <img className="image-mobile w-40" src={season1} alt="" />
    </div>
  );
}

export function CompletionText() {
  return (
    <TextDescription
      title="CONGRATULATIONS!"
      firstLine={`You've completed the guide!`}
      secondLine={`Good luck and welcome to Eion!`}
      children={
        <div className="mt-5">
          <div className="flexcenter">
            <a href="https://play.eion.gg" target="_blank" className="w-32">
              <img src={complete} />
            </a>
          </div>
        </div>
      }
    />
  );
}

export function CompletionMobile() {
  const parts: React.ReactNode[] = [<Part1Mobile />];

  // const hasTextValues: boolean[] = [true];

  const currentIndex = useSequentialRendering(parts, );

  return <>{parts[currentIndex]}</>;
}
