import { useSequentialRendering } from '../../hook';
import player1 from '@assets/images/Tutorial/player1.png';
import player2 from '@assets/images/Tutorial/player2.png';
import { DoubleBorder, TextDescription } from '..';

function Part1() {
  return (
    <div className="flexcenter relative h-full bg-black">
      <img width={'400px'} className="absolute right-1/2 top-40 translate-x-1/2 scale-[1.4]" src={player1} alt="" />
      <div className="appear roboto-condensed absolute -left-20 top-20 px-7 py-4 text-[22px]">
        <div className="z-50">
          <DoubleBorder>
            <TextDescription
              seq={true}
              title="PLAYER"
              firstLine="Now choose your player cards, predict which player will perform the best for the game. They will earn points
            based on their Kills/Death/Assist (KDA) for the game."
            />
          </DoubleBorder>
        </div>
      </div>
    </div>
  );
}

function Part2() {
  return (
    <div className="flexcenter relative h-full bg-black">
      <img width={'400px'} className="top-42 absolute right-1/2 translate-x-1/2 scale-[1.4]" src={player2} alt="" />
      <div className="appear roboto-condensed absolute -left-20 top-20 px-7 py-4 text-[22px]">
        <div className="z-50">
          <DoubleBorder>
            <TextDescription
              index={6}
              title="PLAYER"
              firstLine="Now choose your player cards, predict which player will perform the best for the game. They will earn points
              based on their Kills/Death/Assist (KDA) for the game."
            />
          </DoubleBorder>
        </div>
      </div>
    </div>
  );
}

function Part1Mobile() {
  return (
    <div className="parent-image">
      <img className="image-mobile w-52" src={player1} alt="" />
    </div>
  );
}

function Part2Mobile() {
  return (
    <div className="parent-image">
      <img className="image-mobile w-52" src={player2} alt="" />
    </div>
  );
}

function Text1() {
  return (
    <TextDescription
      seq={true}
      title="PLAYER"
      firstLine="Now choose your player cards, predict which player will perform the best for the game. They will earn points
    based on their Kills/Death/Assist (KDA) for the game."
    />
  );
}

function Text2() {
  return (
    <TextDescription
      index={6}
      title="PLAYER"
      firstLine="Now choose your player cards, predict which player will perform the best for the game. They will earn points
      based on their Kills/Death/Assist (KDA) for the game."
    />
  );
}

export function Player() {
  const parts: React.ReactNode[] = [<Part1 />, <Part2 />];

  // const hasTextValues: boolean[] = [true, true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}

export function PlayerMobile() {
  const parts: React.ReactNode[] = [<Part1Mobile />, <Part2Mobile />];

  // const hasTextValues: boolean[] = [true, true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}

export function PlayerText() {
  const parts: React.ReactNode[] = [<Text1 />, <Text2 />];

  // const hasTextValues: boolean[] = [true, true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}
