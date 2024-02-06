import { useSequentialRendering } from '../../hook';
// import point1 from '@assets/images/Tutorial/point1.png';
import point2 from '@assets/images/Tutorial/point2.png';
import { DoubleBorder, TextDescription } from '..';

// function Part1() {
//   return (
//     <div className="appear flexcenter relative h-full bg-black">
//       <img width={'400px'} className="absolute right-1/2 top-40 translate-x-1/2 scale-[1.4]" src={point1} alt="" />
//     </div>
//   );
// }

function Part2() {
  return (
    <div className="flexcenter relative h-full bg-black">
      <img width={'400px'} className="absolute right-1/2 top-40 translate-x-1/2 scale-[1.4]" src={point2} alt="" />
      <div className="appear roboto-condensed absolute left-0 top-44 px-7 py-4 text-[22px]">
        <div className="z-50">
          <DoubleBorder>
            <TextDescription
              index={10}
              title="POINTS"
              firstLine="Use the Estimated Point Calculator as a score prediction guide"
              secondLine="IMPORTANT NOTE: These are just estimations and may not reflect your final points earned!"
            />
          </DoubleBorder>
        </div>
      </div>
    </div>
  );
}

export function Point() {
  const parts: React.ReactNode[] = [ <Part2 />];

  // const hasTextValues: boolean[] = [false, true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}

// function Part1Mobile() {
//   return (
//     <div className="parent-image appear">
//       <img className="image-mobile w-64" src={point1} alt="" />
//     </div>
//   );
// }

function Part2Mobile() {
  return (
    <div className="parent-image">
      <img className="image-mobile w-64" src={point2} alt="" />
    </div>
  );
}

export function PointText() {
  return (
    <TextDescription
      index={10}
      title="POINTS"
      firstLine="Use the Estimated Point Calculator as a score prediction guide."
      secondLine="IMPORTANT NOTE: These are just estimations and may not reflect your final points earned!"
    />
  );
}

export function PointMobile() {
  const parts: React.ReactNode[] = [ <Part2Mobile />];

  // const hasTextValues: boolean[] = [false, true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}
