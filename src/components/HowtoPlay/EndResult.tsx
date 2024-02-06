import { useSequentialRendering } from '../../hook';
// import season1 from '@assets/images/Tutorial/season1.png';
// import season2 from '@assets/images/Tutorial/season2.png';
import season3 from '@assets/images/Tutorial/season3.png';
import { DoubleBorder, TextDescription } from '..';

// function Part1() {
//   return (
//     <div className="appear flexcenter relative h-full bg-black">
//       <img width={'400px'} className="absolute right-1/2 top-72 translate-x-1/2 scale-[1.4]" src={season1} alt="" />
//     </div>
//   );
// }

// function Part2() {
//   return (
//     <div className="flexcenter relative h-full bg-black">
//       <img width={'400px'} className="top-30 absolute right-1/2 translate-x-1/2 scale-[1.2]" src={season2} alt="" />
//     </div>
//   );
// }

function Part3() {
  return (
    <div className="flexcenter relative h-full bg-black">
      <img width={'400px'} className="top-30 absolute right-1/2 translate-x-1/2 scale-[1.2]" src={season3} alt="" />
      <div className="appear roboto-condensed  absolute -left-72 top-28 px-7 py-4 text-[22px]">
        <div className="z-50">
          <DoubleBorder>
            <TextDescription
              index={12}
              title="SEASON POINTS"
              firstLine="After locking, sit back and relax as we update the match results after game."
              secondLine="Check back in after a couple of minutes!"
            />
          </DoubleBorder>
        </div>
      </div>
    </div>
  );
}

export function EndResult() {
  const parts: React.ReactNode[] = [ <Part3 />];

  // const hasTextValues: boolean[] = [false, false, true, true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}

// function Part1Mobile() {
//   return (
//     <div className="appear parent-image">
//       <img className="image-mobile w-64" src={season1} alt="" />
//     </div>
//   );
// }

// function Part2Mobile() {
//   return (
//     <div className="appear parent-image">
//       <img className="image-mobile w-40" src={season2} alt="" />
//     </div>
//   );
// }

function Part3Mobile() {
  return (
    <div className="parent-image">
      <img className="image-mobile w-40" src={season3} alt="" />
    </div>
  );
}

export function EndResultText() {
  return (
    <TextDescription
      index={12}
      title="SEASON POINTS"
      firstLine="After locking, sit back and relax as we update the match results after game."
      secondLine="Check back in after a couple of minutes!"
    />
  );
}

export function EndResultMobile() {
  const parts: React.ReactNode[] = [ <Part3Mobile />];

  // const hasTextValues: boolean[] = [false, false, true, true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}
