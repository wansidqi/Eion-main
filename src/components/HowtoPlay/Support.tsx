import { useSequentialRendering } from '../../hook';
// import support1 from '@assets/images/Tutorial/support1.png';
import support2 from '@assets/images/Tutorial/support2.png';
import support3 from '@assets/images/Tutorial/support3.png';
import { DoubleBorder, TextDescription } from '..';

// function Part1() {
//   return (
//     <div className="appear flexcenter relative h-full bg-black">
//       <img width={'400px'} className="absolute right-1/2 top-40 translate-x-1/2 scale-[1.4]" src={support1} alt="" />
//     </div>
//   );
// }

function Part2() {
  return (
    <div className="flexcenter relative h-full bg-black">
      <img width={'400px'} className="absolute right-1/2 top-40 translate-x-1/2 scale-[1.4]" src={support2} alt="" />
      <div className="appear roboto-condensed absolute -right-16 top-96 px-7 py-4 text-[22px]">
        <div className="z-50">
          <DoubleBorder>
            <TextDescription
              seq={true}
              title="SUPPORT"
              firstLine="Now, choose your support cards. Support cards awards points for events or situations that happens in and
            outside of game."
            />
          </DoubleBorder>
        </div>
      </div>
    </div>
  );
}

function Part3() {
  return (
    <div className="flexcenter relative h-full bg-black">
      <img
        width={'400px'}
        className="appear absolute right-1/2 top-40 translate-x-1/2 scale-[1.4]"
        src={support3}
        alt=""
      />
      <div className="roboto-condensed absolute -right-16 top-96 px-7 py-4 text-[22px]">
        <div className="z-50">
          <DoubleBorder>
            <TextDescription
              index={8}
              title="SUPPORT"
              firstLine="Now, choose your support cards. Support cards awards points for events or situations that happens in and
            outside of game."
            />
          </DoubleBorder>
        </div>
      </div>
    </div>
  );
}

export function Support() {
  const parts: React.ReactNode[] = [<Part2 />, <Part3 />];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}

// function Part1Mobile() {
//   return (
//     <div className="appear parent-image">
//       <img className="image-mobile w-52" src={support1} alt="" />
//     </div>
//   );
// }

function Part2Mobile() {
  return (
    <div className="parent-image">
      <img className="image-mobile w-52" src={support2} alt="" />
    </div>
  );
}

function Part3Mobile() {
  return (
    <div className="appear parent-image">
      <img className="image-mobile w-52" src={support3} alt="" />
    </div>
  );
}

function Text1() {
  return (
    <TextDescription
      seq={true}
      title="SUPPORT"
      firstLine="Now, choose your support cards. Support cards awards points for events or situations that happens in and
  outside of game."
    />
  );
}

function Text2() {
  return (
    <TextDescription
      index={8}
      title="SUPPORT"
      firstLine="Now, choose your support cards. Support cards awards points for events or situations that happens in and
  outside of game."
    />
  );
}

export function SupportMobile() {
  const parts: React.ReactNode[] = [<Part2Mobile />, <Part3Mobile />];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}

export function SupportText() {
  const parts: React.ReactNode[] = [<Text1 />, <Text2 />];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}
