import { useSequentialRendering } from '../../hook';
import first from '@assets/images/Tutorial/first.png';
import { DoubleBorder, TextDescription } from '..';

function Part1() {
  return (
    <div className="flexcenter relative h-screen">
      <img width={'400px'} className="absolute right-1/2 top-5 translate-x-1/2" src={first} alt="" />
      <div className="z-50">
        <DoubleBorder>
          <TextDescription
            index={1}
            title="INTRODUCTION"
            firstLine="Welcome to Locker. A prediction based collectible card game. It is easy to learn, difficult to master."
          />
        </DoubleBorder>
      </div>
    </div>
  );
}

function Part1Mobile() {
  return (
    <div className="parent-image">
      <img className="image-mobile h-64" src={first} alt="" />
    </div>
  );
}

export function TextIntroduction() {
  return (
    <>
      <TextDescription
        index={1}
        title="INTRODUCTION"
        firstLine="Welcome to Locker. A prediction based collectible card game. It is easy to learn, difficult to master."
      />
    </>
  );
}

export function Introduction() {
  const parts: React.ReactNode[] = [<Part1 />, <Part1 />];

  // const hasTextValues: boolean[] = [false, true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}

export function IntroductionMobile() {
  const parts: React.ReactNode[] = [<Part1Mobile />, <Part1Mobile />];

  // const hasTextValues: boolean[] = [false, true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}
