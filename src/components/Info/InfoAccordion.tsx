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

const TextBlue = ({ content }: { content: string }) => (
  <span className="roboto-condensed-bold text-[#0185FF]">{content}</span>
);

const data: ArrInterface[] = [
  {
    id: 1,
    header: 'Eion',
    text: 'Welcome to Eion, the platform for Locker, Invoke and more esports products developed by Aghs Labs. We are the connecting terminal that aims to bring in all the different esports teams, clubs and fans together into one thriving community.',
  },
  {
    id: 2,
    header: 'Locker',
    text: (
      <>
        <p className="my-4">
          <span className="roboto-bold ">Unleash Your Strategy: Predict, Play, Prevail in the World of Locker!</span>
        </p>
        <p className="my-2">
          Which team will emerge victorious? Make your selection between the competing teams to earn points and climb
          the leaderboard.
        </p>
      </>
    ),
  },

  {
    id: 3,
    header: 'Invoke',
    text: (
      <>
        <p className="my-4">
          Introducing Invoke, an exciting new feature on Eion where you can create your dream team of 5 players, from
          different regions, with each player fulfilling a unique in-game role. Points are awarded based on their daily
          in-game performance.
        </p>
        <p className="my-2">
          After each match, Player Cards will have their cumulative K/D/A (Kills/Deaths/Assists) updated and points
          awarded based on:
        </p>
        <div className="my-2">
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
        <p className="my-2">
          Scores will be updated at the end of the day. The goal is to identify the top Player Cards in the gold, roam,
          mid, jungle, and exp roles for the day.
        </p>
        <p className="my-2">
          When Invoke is active, the draft you've submitted before the first game of the day determines the score you
          get. Any changes made during Invoke while it's live will only apply to the games of the next day.
        </p>
        <p className="my-2">Your position on the Leaderboard determines your priority in selecting team rewards.</p>
        <p className="my-2">
          Best of luck in assembling your 'Invoke' Dream Team, and may the strongest team emerge victorious!
        </p>
      </>
    ),
  },
  {
    id: 4,
    header: 'Booster Packs',
    text: (
      <>
        <p className="my-4">
          A Card Booster Pack contains 5 random Eions Cards. Eion offers 3 types of boosters packs:
        </p>
        <p className="my-4">
          <span className="roboto-bold text-[#0185FF]">Standard Pack :</span> Unleash a booster pack brimming with all cards. Use
          Shards acquired through gameplay in Locker and the upcoming Esports manager game to unlock these packs.
        </p>
        <p className="my-4">
          <span className="roboto-bold text-[#0185FF]">Team Specific Pack :</span> A booster pack that contains specific esports team
          cards of the Team Owner, granting you a guaranteed chance of obtaining the team card of your choice.
        </p>
      </>
    ),
  },
  {
    id: 5,
    header: 'Card Advancement',
    text: (
      <>
        <p className="my-4">
          By combining cards within the Forge, users unlock the power to enhance their Eion cards. Elevate the
          capabilities of your player cards, upgrade their levels, modify traits, and customize your gameplay style in
          the forthcoming PvP esports manager game.
        </p>
        <p className="my-4">
          Unlock the true potential of your cards as you refine and level them up, ensuring maximum points in every
          electrifying match! Brace yourself for an adrenaline-pumping journey that leads to intangible, exclusive
          rewards, bestowed upon you by your favourite esports teams, creating a legendary experience unlike any other
          in the gaming world! Prepare to be enchanted by the thrill of the chase, the euphoria of victory, and the
          honour of claiming one-of-a-kind rewards as the ultimate champion!
        </p>
      </>
    ),
  },
  {
    id: 6,
    header: 'Leaderboard',
    text: (
      <>
        <p className="my-4">
          The leaderboard is a collection of high scores that displays player’s Tournament, Locker and Fame rankings.
        </p>
        <p className="my-4">
          <span className="roboto-bold text-[#0185FF]">Locker Leaderboard: </span>
          Make your prediction between two rival teams to earn Locker Points and secure a top position on the
          leaderboard.
        </p>
        <p className="my-4">
          <span className="roboto-bold text-[#0185FF]">Tournament Leaderboard: </span> Join global competition within the
          Southeast Asian tournaments featured on the Invoke Leaderboard. Fueling competitive fervor, draft your
          preferred players without restrictions to any particular team. Accumulate points based on your dream team's
          performance!
        </p>
        <p className="my-4">
          <span className="roboto-bold text-[#0185FF]">Fame Leaderboard: </span> Build your dream team and engage in a
          competitive PvP matchmaking mode featuring an innovative ranking system. Victories will propel your rank
          upwards, while losses will lower your standing on the leaderboard.
        </p>
        <p className="my-4">
          Embark on an exhilarating journey to conquer the leaderboards, rise to the pinnacle of the ranks, and bask in
          the unrivalled glory that awaits! Every victory brings not only a surge of excitement but also the chance to
          claim epic seasonal rewards, making each step in this esports adventure more enticing than the last! Join the
          elite, chase greatness, and revel in the thrill of winning it all in an experience like no other!
        </p>
      </>
    ),
  },
  {
    id: 7,
    header: 'Shards',
    text: 'Shards are Eion’s non-purchasable in-game currency used to open Eion booster packs. Earn Shards by participating in Locker matches throughout the season.',
  },
];

const AccordionItem: React.FC<AccordionItemProps> = ({ handleToggle, active, item }) => {
  const contentEl = useRef<HTMLDivElement>(null);
  const { header, id, text } = item;

  return (
    <div className="rc-accordion-card my-2 shadow">
      <div className="rc-accordion-header">
        <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
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

export function InfoAccordion() {
  const [active, setActive] = useState<number | null>(null);

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
