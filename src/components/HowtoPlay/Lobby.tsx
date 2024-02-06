import { useSequentialRendering } from '../../hook';
// import lobby1 from '@assets/images/Tutorial/lobby1.png';
import lobby2 from '@assets/images/Tutorial/lobby2.png';
import { DoubleBorder, TextDescription } from '..';

// function Part1() {
//   return (
//     <div className="flexcenter relative h-full bg-black">
//       {/* <img width={'530px'} className="absolute right-1/2 top-40 translate-x-1/2 scale-[1.2]" src={lobby1} alt="" /> */}
//       <img className="absolute right-1/2 top-40 translate-x-1/2 scale-[0.8]" src={lobby1} alt="" />
//     </div>
//   );
// }

// function Part1Mobile() {
//   return (
//     <div className="parent-image">
//       <img className="image-mobile h-72 w-52" src={lobby1} alt="" />
//     </div>
//   );
// }

function Part2() {
  return (
    <div className="flexcenter relative h-full bg-black">
      <img className="swing absolute right-1/2 top-40 translate-x-1/2 scale-[0.8]" src={lobby2} alt="" />

      <div className="appear roboto-condensed  absolute -left-72 -translate-y-1/2 px-7 py-4 text-[22px]">
        <div className="z-50">
          <DoubleBorder>
            <TextDescription
              index={2}
              title="LOBBY"
              firstLine="The Play section is where you navigate through different types of matches from different regions."
            />
          </DoubleBorder>
        </div>
      </div>
    </div>
  );
}

function Part2Mobile() {
  return (
    <div className="appear parent-image">
      <img className="image-mobile h-72 w-52" src={lobby2} alt="" />
    </div>
  );
}

export function TextLobby() {
  return (
    <>
      <TextDescription
        index={2}
        title="LOBBY"
        firstLine="The Play section is where you navigate through different types of matches from different regions."
      />
    </>
  );
}

export function Lobby() {
  const parts: React.ReactNode[] = [<Part2 />];

  // const hasTextValues: boolean[] = [true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}

export function LobbyMobile() {
  const parts: React.ReactNode[] = [<Part2Mobile />];

  // const hasTextValues: boolean[] = [true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}
