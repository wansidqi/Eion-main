/* eslint-disable no-irregular-whitespace */
import { useSequentialRendering } from '../../hook';
// import leader1 from '@assets/images/Tutorial/leader1.png';
// import leader2 from '@assets/images/Tutorial/leader2.png';

import leader3 from '@assets/images/Tutorial/leader3.png';
import leader4 from '@assets/images/Tutorial/leader4.png';
import leader5 from '@assets/images/Tutorial/leader5.png';
import leader6 from '@assets/images/Tutorial/leader6.png';
// import leader7 from '@assets/images/Tutorial/leader7.png';

import { DoubleBorder, TextDescription } from '..';

// function Part1() {
//   return (
//     <div className="appear flexcenter relative h-full bg-black">
//       <img width={'400px'} className="absolute right-1/2 top-60 translate-x-1/2 scale-[1.4]" src={leader1} alt="" />
//     </div>
//   );
// }

// function Part2() {
//   return (
//     <div className="flexcenter relative h-full bg-black">
//       <img width={'400px'} className="absolute right-1/2 top-60 translate-x-1/2 scale-[1.4]" src={leader2} alt="" />
//     </div>
//   );
// }

function Part3() {
  return (
    <div className="flexcenter relative h-full bg-black">
      <img width={'400px'} className="absolute right-1/2 top-60 translate-x-1/2 scale-[1.4]" src={leader3} alt="" />
      <div className="appear roboto-condensed absolute -left-52 top-0 px-7 py-4 text-[22px]">
        <div className="z-50">
          <DoubleBorder>
            <TextDescription
              seq={true}
              title="LEADER"
              firstLine="Choose your leader card. The leader card depicts the team composition you are going to play."
            />
          </DoubleBorder>
        </div>
      </div>
    </div>
  );
}

function Part4() {
  return (
    <div className="flexcenter relative h-full bg-black">
      <img width={'400px'} className="top-30 absolute scale-[1]" src={leader4} alt="" />
      <div className="appear roboto-condensed absolute -left-72 top-20 px-7 py-4 text-[22px]">
        <div className="z-50">
          <DoubleBorder>
            <TextDescription seq={true} title="LEADER" firstLine="You can only play one leader card per draft." />
          </DoubleBorder>
        </div>
      </div>
    </div>
  );
}

function Part5() {
  return (
    <div className="flexcenter relative h-full bg-black">
      <img width={'400px'} className="top-30 absolute right-1/2 translate-x-1/2 scale-[1]" src={leader5} alt="" />
      <div className="appear roboto-condensed absolute -left-72 top-[500px] px-7 py-4 text-[22px]">
        <div className="z-50">
          <DoubleBorder>
            <TextDescription
              seq={true}
              title="LEADER"
              firstLine="NOTE:"
              secondLine="Use this section to play rare cards."
            />
          </DoubleBorder>
        </div>
      </div>
    </div>
  );
}

function Part6() {
  return (
    <div className="flexcenter relative h-full bg-black">
      <img width={'400px'} className="top-30 absolute right-1/2 translate-x-1/2 scale-[1.4]" src={leader6} alt="" />
      <div className="appear roboto-condensed absolute -left-40 top-10 px-7 py-4 text-[22px]">
        <div className="z-50">
          <DoubleBorder>
            <TextDescription
              index={5}
              title="LEADER"
              firstLine="In this example we picked “Heroic Ally” as our Leader."
              secondLine={`It requires you to play 2 Roamer Player Cards to earn "Season Points".`}
            />
          </DoubleBorder>
        </div>
      </div>
    </div>
  );
}

// function Part7() {
//   const { setTutorialState } = useBoundStore();

//   return (
//     <div className="appear flexcenter relative h-full bg-black">
//       <img width={'400px'} className="absolute right-1/2 top-60 translate-x-1/2 scale-[1.4]" src={leader7} alt="" />
//       <button
//         onClick={() => setTutorialState({ selectIndex: 5 })}
//         className="absolute bottom-3 right-3 rounded-md border-2 border-white bg-black p-1 px-4"
//       >
//         <p className="font-bold text-[#0185FF]">Next</p>
//       </button>
//     </div>
//   );
// }

export function Leader() {
  const parts: React.ReactNode[] = [<Part3 />, <Part4 />, <Part5 />, <Part6 />];

  // const hasTextValues: boolean[] = [true, true, true, true, true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}

// function Part2Mobile() {
//   return (
//     <div className="parent-image ">
//       <img className="image-mobile w-52" src={leader2} alt="" />
//     </div>
//   );
// }

function Part3Mobile() {
  return (
    <div className="parent-image ">
      <img className="image-mobile w-52" src={leader3} alt="" />
    </div>
  );
}

function Part4Mobile() {
  return (
    <div className="parent-image">
      <img className="image-mobile w-40" src={leader4} alt="" />
    </div>
  );
}
function Part5Mobile() {
  return (
    <div className="parent-image ">
      <img className="image-mobile w-40" src={leader5} alt="" />
    </div>
  );
}
function Part6Mobile() {
  return (
    <div className="parent-image ">
      <img className="image-mobile w-52" src={leader6} alt="" />
    </div>
  );
}
// function Part7Mobile() {
//   return (
//     <div className="parent-image appear ">
//       <img className="image-mobile w-52" src={leader7} alt="" />
//     </div>
//   );
// }

export function LeaderMobile() {
  const parts: React.ReactNode[] = [
    // <Part2Mobile />,
    <Part3Mobile />,
    <Part4Mobile />,
    <Part5Mobile />,
    <Part6Mobile />,
    // <Part7Mobile />,
  ];

  // const hasTextValues: boolean[] = [true, true, true, true, true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}

function Text3() {
  return (
    <TextDescription
      seq={true}
      title="LEADER"
      firstLine="Choose your leader card. The leader card depicts the team composition you are going to play. "
    />
  );
}

function Text4() {
  return <TextDescription seq={true} title="LEADER" firstLine="You can only play one leader card per draft." />;
}

function Text5() {
  return (
    <TextDescription seq={true} title="LEADER" firstLine="NOTE: " secondLine="Use this section to play rare cards." />
  );
}

// function Text6() {
//   return (
//     <TextDescription
//       title="LEADER"
//       firstLine="In this example we picked “Heroic Ally” as our Leader."
//       secondLine={`It requires you to play 2 Roamer Player Cards to earn "Season Points.”.`}
//     />
//   );
// }

function Text7() {
  return (
    <TextDescription
      index={5}
      title="LEADER"
      firstLine="In this example we picked “Heroic Ally” as our Leader."
      secondLine={`It requires you to play 2 Roamer Player Cards to earn "Season Points.”.`}
    />
  );
}

export function LeaderText() {
  const parts: React.ReactNode[] = [<Text3 />, <Text4 />, <Text5 />, <Text7 />];

  // const hasTextValues: boolean[] = [false, false, true, true, true, true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}
