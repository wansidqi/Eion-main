import React, { useRef, useState } from 'react';
import '../../css/accordion.css';

interface ArrInterface {
  id: number;
  header: string;
  text: any;
}

interface AccordionItemProps {
  handleToggle: (index: number) => void;
  active: number | null;
  item: ArrInterface;
}

export const TextBlue = ({ content }: { content: string }) => (
  <span className="roboto-condensed-bold text-[#0185FF]">{content}</span>
);

const data: ArrInterface[] = [
  {
    id: 1,
    header: 'INVOKE',
    text: (
      <div className="flex flex-col gap-3">
        <p className="roboto-condensed-bold">
          FIELD YOUR BEST FIVE PLAYERS AND COMPETE IN THE LEADERBOARD WITH YOUR DREAM TEAM
        </p>
        <p>
          After each match, Player Cards will have their cumulative K/D/A (Kills/Deaths/Assists) updated and points
          awarded based on:
        </p>
        <div>
          <p>
            <TextBlue content="+100 points" /> for appearing in a match
          </p>
          <p>
            <TextBlue content="+10 points" /> for kills
          </p>
          <p>
            <TextBlue content="-10 points" /> for deaths
          </p>
          <p>
            <TextBlue content="+5 points" /> for assists.
          </p>
        </div>
        <p>
          Scores will be updated at the end of the day. The goal is to identify the top Player Cards in the gold, roam,
          mid, jungle, and exp roles for the day.
        </p>
        <p>
          When Invoke is active, the draft you've submitted before the first game of the day determines the score you
          get. Any changes made during Invoke while it's live will only apply to the games of the next day.
        </p>
        <p>Your position on the Leaderboard determines your priority in selecting team rewards.</p>
        <p className="roboto-condensed-bold my-5">WATCH HOW TO PLAY INVOKE</p>
        <div className="flexcenter mb-14 mt-7">
          <div className="flexcenter h-80 w-[95%] border border-[#0185FF] bg-black">
            <iframe allowFullScreen={true} src="https://www.youtube.com/embed/JvtUXbSUhxU" className="h-full w-full" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    header: 'LOCKER',
    text: (
      <div className="flex flex-col gap-3">
        <p>Forecast the outcome of upcoming matches. Which team will emerge victorious?</p>
        <p>
          Make your selection between the competing teams to earn Locker Points (LP) and climb the Locker leaderboard.
        </p>
        {/* <p className="roboto-condensed-bold my-5">WATCH HOW TO PLAY LOCKER</p>
        <div className="flexcenter mb-14 mt-7">
          <div className="flexcenter h-80 w-[95%] border border-[#0185FF] bg-black">
            <iframe allowFullScreen={true} src="https://www.youtube.com/embed/5wPPUYDo6Q4" className="h-full w-full" />
          </div>
        </div> */}
      </div>
    ),
  },
];

const AccordionItem: React.FC<AccordionItemProps> = ({ handleToggle, active, item }) => {
  const contentEl = useRef<HTMLDivElement>(null);
  const { header, id, text } = item;

  return (
    <div className="rc-accordion-card my-2 shadow">
      <div className="rc-accordion-header">
        <div
          className={`rc-accordion-toggle p-3 ${active === id ? 'active-accordion' : ''}`}
          onClick={() => handleToggle(id)}
        >
          <h5 className="rc-accordion-title deadjim py-2 pl-4 text-[20px] tracking-widest">{header}</h5>
          <i className="fa fa-chevron-down rc-accordion-icon"></i>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${active === id ? 'show' : ''}`}
        style={active === id ? { height: contentEl.current?.scrollHeight } : { height: '0px' }}
      >
        <div className="rc-accordion-body">
          <p className="roboto-condensed mb-0 text-[20px]">{text}</p>
        </div>
      </div>
    </div>
  );
};

export function AccordionHowToPlay() {
  const [active, setActive] = useState<number | null>(1);

  const handleToggle = (index: number) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <>
      <div className="mx-10 lg:mx-40 lg:px-40">
        {data.map(item => {
          return <AccordionItem key={item.id} active={active} handleToggle={handleToggle} item={item} />;
        })}
      </div>
    </>
  );
}
