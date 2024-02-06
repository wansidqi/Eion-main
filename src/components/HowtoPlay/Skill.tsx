import { useSequentialRendering } from '../../hook';
import skill from '@assets/images/Tutorial/skill.png';
import { DoubleBorder, TextDescription } from '..';

// function Part1() {
//   return (
//     <div className="appear flexcenter relative h-full bg-black">
//       <img width={'400px'} className="absolute right-1/2 top-40 translate-x-1/2 scale-[1.4]" src={skill} alt="" />
//     </div>
//   );
// }

function Part2() {
  return (
    <div className="flexcenter relative h-full bg-black">
      <img width={'400px'} className="absolute right-1/2 top-40 translate-x-1/2 scale-[1.4]" src={skill} alt="" />
      <div className="appear roboto-condensed absolute -right-16 top-36 px-7 py-4 text-[22px]">
        <div className="z-50">
          <DoubleBorder>
            <TextDescription
              index={7}
              title="SKILL"
              firstLine="For each player card you’ve chosen, you can equip a skill card to them. Skill cards awards points for
            achievements or records achieved by the player."
            />
          </DoubleBorder>
        </div>
      </div>
    </div>
  );
}

export function Skill() {
  const parts: React.ReactNode[] = [<Part2 />];

  // const hasTextValues: boolean[] = [true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}
// function Part1Mobile() {
//   return (
//     <div className="appear parent-image">
//       <img className="image-mobile w-52" src={skill} alt="" />
//     </div>
//   );
// }

function Part2Mobile() {
  return (
    <div className="parent-image">
      <img className="image-mobile w-52" src={skill} alt="" />
    </div>
  );
}

export function SkillText() {
  return (
    <TextDescription
      index={7}
      title="SKILL"
      firstLine="For each player card you’ve chosen, you can equip a skill card to them. Skill cards awards points for
  achievements or records achieved by the player."
    />
  );
}

export function SkillMobile() {
  const parts: React.ReactNode[] = [<Part2Mobile />];

  // const hasTextValues: boolean[] = [ true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}
