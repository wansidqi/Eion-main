import { useSequentialRendering } from '../../hook';
import prediction from '@assets/images/Tutorial/prediction-img.png';
import { DoubleBorder, TextDescription } from '..';

function Part1() {
  return (
    <div className="flexcenter relative h-full bg-black">
      <img width={'400px'} className="absolute right-1/2 top-0 translate-x-1/2" src={prediction} alt="" />
      <div className="appear roboto-condensed translate-y-1/5 absolute -left-72 top-[calc(50%-306px/2-87px)] px-7 py-4 text-[22px]">
        <div className="z-50">
          <DoubleBorder>
            <TextDescription
              index={3}
              title="PREDICTION"
              firstLine="Boost your score by accurately predicting the winning team for every game and earn valuable bonus points."
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
      <img className="image-mobile h-72 w-40" src={prediction} alt="" />
    </div>
  );
}

export const PredictionText = () => {
  return (
    <>
      <TextDescription
        index={3}
        title="PREDICTION"
        firstLine="Boost your score by accurately predicting the winning team for every game and earn valuable bonus points."
      />
    </>
  );
};

export function Prediction() {
  const parts: React.ReactNode[] = [<Part1 />];

  // const hasTextValues: boolean[] = [true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}

export function PredictionMobile() {
  const parts: React.ReactNode[] = [<Part1Mobile />];

  // const hasTextValues: boolean[] = [true];

  const currentIndex = useSequentialRendering(parts);

  return <>{parts[currentIndex]}</>;
}
