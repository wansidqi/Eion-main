import { useSequentialRendering } from '../../hook';
// import gamenav1 from '@assets/images/Tutorial/gamenav1.png';
import gamenav2 from '@assets/images/Tutorial/gamenav2.png';
import { DoubleBorder, TextDescription } from '..';

// function Part1() {
//   return (
//     <div className="appear flexcenter relative h-full bg-black">
//       <img width={'500px'} className="absolute right-1/2 top-80 translate-x-1/2 scale-[1.4]" src={gamenav1} alt="" />
//     </div>
//   );
// }

function Part2() {
  return (
    <div className="flexcenter relative h-full bg-black">
      <img width={'600px'} className="absolute right-1/2 top-80 translate-x-1/2 scale-[1.4]" src={gamenav2} alt="" />
      <div className="appear roboto-condensed absolute top-20 px-7 py-4 text-[22px]">
        <div className="z-50">
          <DoubleBorder>
            <TextDescription
              index={11}
              title="GAME NAVIGATION"
              firstLine="A match with a Best of three(BO3)?"
              secondLine="Navigate through the side arrows to view and draft the next games."
            />
          </DoubleBorder>
        </div>
      </div>
    </div>
  );
}

export function GameNavigation() {
  const parts: React.ReactNode[] = [<Part2 />];

  // const hasTextValues: boolean[] = [false, true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}

// function Part1Mobile() {
//   return (
//     <div className="appear parent-image">
//       <img className="image-mobile w-72" src={gamenav1} alt="" />
//     </div>
//   );
// }

function Part2Mobile() {
  return (
    <div className="parent-image">
      <img className="image-mobile w-72" src={gamenav2} alt="" />
    </div>
  );
}

export function GameNavigationText() {
  return (
    <TextDescription
      index={11}
      title="GAME NAVIGATION"
      firstLine="A match with a Best of three(BO3)?"
      secondLine="Navigate through the side arrows to view and draft the next games."
    />
  );
}

export function GameNavigationMobile() {
  const parts: React.ReactNode[] = [<Part2Mobile />];

  // const hasTextValues: boolean[] = [false, true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}
