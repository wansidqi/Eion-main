// import field from '@assets/images/Tutorial/prediction2-img.png';
import field2 from '@assets/images/Tutorial/field2.png';
import prediction3 from '@assets/images/Tutorial/prediction3-img.png';
import { useSequentialRendering } from '../../hook';
import { DoubleBorder, TextDescription } from '..';

// function Part1() {
//   return (
//     <div className="flexcenter relative h-full bg-black">
//       <img width={'400px'} className="absolute top-20" src={field} alt="" />
//     </div>
//   );
// }

function Part2() {
  return (
    <div className="flexcenter relative h-full bg-black">
      <img width={'430px'} className=" absolute top-20" src={field2} alt="" />
      <div className="roboto-condensed entrance absolute -left-72 top-20 px-7 py-4 text-[22px]">
        <div className="z-50">
          <DoubleBorder>
            <TextDescription
              seq={true}
              title="FIELD"
              firstLine="The Playmat field is where you’ll draft your rosters and match predictions."
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
      <img width={'400px'} className="absolute top-60" src={prediction3} alt="" />
      <div className="entrance roboto-condensed absolute right-0 top-10 px-7 py-4 text-[22px]">
        <div className="z-50">
          <DoubleBorder>
            <TextDescription
              index={4}
              title="FIELD"
              firstLine="At the Team Prediction field, you are able to change your prediction by toggling between the Esports Teams."
            />
          </DoubleBorder>
        </div>
      </div>
    </div>
  );
}

export function Field() {
  const parts: React.ReactNode[] = [<Part2 />, <Part3 />];

  // const hasTextValues: boolean[] = [true, true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}

// function Part1Mobile() {
//   return (
//     <div className="parent-image">
//       <img className="image-mobile h-64 w-52" src={field} alt="" />
//     </div>
//   );
// }

function Part2Mobile() {
  return (
    <div className="parent-image ">
      <img className="image-mobile h-64 w-52 duration-300 ease-in" src={field2} alt="" />
    </div>
  );
}

function Part3Mobile() {
  return (
    <div className="parent-image appear relative">
      <img className="image-mobile h-64 w-52 transform duration-300 ease-out" src={prediction3} alt="" />
    </div>
  );
}

function Text() {
  return (
    <TextDescription
      seq={true}
      title="FIELD"
      firstLine="The Playmat field is where you’ll draft your rosters and match predictions."
    />
  );
}

function Text2() {
  return (
    <TextDescription
      title="FIELD"
      firstLine="At the Team Prediction field, you are able to change your prediction by toggling between the Esports Teams."
      index={4}
    />
  );
}

export function FieldMobile() {
  const parts: React.ReactNode[] = [<Part2Mobile />, <Part3Mobile />];

  // const hasTextValues: boolean[] = [true, true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}

export function FieldMobileText() {
  const parts: React.ReactNode[] = [<Text />, <Text2 />];

  // const hasTextValues: boolean[] = [true, true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}
