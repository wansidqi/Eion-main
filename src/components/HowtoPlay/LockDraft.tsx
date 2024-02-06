import { useSequentialRendering } from '../../hook';
// import lockdraft1 from '@assets/images/Tutorial/lockdraft1.png';
import lockdraft2 from '@assets/images/Tutorial/lockdraft2.png';
import { DoubleBorder, TextDescription } from '..';

// function Part1() {
//   return (
//     <div className="appear flexcenter relative h-full bg-black">
//       <img width={'400px'} className="absolute right-1/2 top-56 translate-x-1/2 scale-[1.8]" src={lockdraft1} alt="" />
//     </div>
//   );
// }

function Part2() {
  return (
    <div className="flexcenter relative h-full bg-black">
      <img width={'400px'} className="absolute right-1/2 top-56 translate-x-1/2 scale-[1.8]" src={lockdraft2} alt="" />
      <div className="appear roboto-condensed absolute -left-44 top-96 px-7 py-4 text-[22px]">
        <div className="z-50">
          <DoubleBorder>
            <TextDescription
              index={9}
              title="LOCK"
              firstLine="Lastly, lock your draft and enjoy the game!"
              secondLine="If you get any of the cards correct, it will automatically tabulated at the end of the game."
            />
          </DoubleBorder>
        </div>
      </div>
    </div>
  );
}

export function LockDraft() {
  const parts: React.ReactNode[] = [ <Part2 />];

  // const hasTextValues: boolean[] = [false, true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}

// function Part1Mobile() {
//   return (
//     <div className="parent-image appear">
//       <img className="image-mobile scale-[2]" src={lockdraft1} alt="" />
//     </div>
//   );
// }

function Part2Mobile() {
  return (
    <div className="appear parent-image">
      <img className="image-mobile scale-[2]" src={lockdraft2} alt="" />
    </div>
  );
}

export function LockDraftStatus() {
  return (
    <TextDescription
      index={9}
      title="LOCK"
      firstLine="If you get any of the cards correct, it will automatically tabulated at the end of the game."
    />
  );
}

export function LockDraftMobile() {
  const parts: React.ReactNode[] = [ <Part2Mobile />];

  // const hasTextValues: boolean[] = [false, true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}
