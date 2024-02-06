import { useBoundStore } from '../../store';

interface Props {
  index?: number;
  seq?: boolean;
  title: string;
  firstLine: string;
  secondLine?: string;
  children?: React.ReactNode;
}

export function TextDescription({ index, title, firstLine, secondLine, children, seq }: Props) {
  const { setTutorialState, tutorial } = useBoundStore();

  const handleClick = () => {
    seq ? setTutorialState({ seqIndex: tutorial.seqIndex + 1 }) : setTutorialState({ selectIndex: index });
  };

  return (
    <>
      <div className="roboto-condensed relative h-full w-full px-4 text-[14px] lg:text-[22px]">
        <div className="flexcenter flex flex-col items-start justify-center">
          <p className="deadjim mt-8 pb-2 text-[20px] lg:text-[40px]">{title}</p>
          <p>{firstLine} </p>
          <p className="mt-2">{secondLine} </p>
        </div>
        <div className="absolute bottom-5 right-2 mt-3 flex w-full justify-end px-5">
          {children}
          {(index || seq) && (
            <button onClick={handleClick} className="rounded-md border-2 border-white bg-black p-1 px-4">
              <p className="font-bold text-[#0185FF]">Next</p>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
