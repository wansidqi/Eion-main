import {
  BeginTutorial,
  Field,
  Footer,
  GameNavigation,
  Introduction,
  Leader,
  Lobby,
  LockDraft,
  Navbar,
  Player,
  Point,
  Prediction,
  SideSection,
  Skill,
  Support,
  EndResult,
  Completion,
} from '../components';
import '../css/tutorial.css';
import '../css/tutorial.animation.css';
import { useBoundStore } from '../store';

export function TutorialPage() {
  const tutorials = [
    {
      item: 'INTRODUCTION',
      component: <Introduction />,
    },
    {
      item: 'LOBBY',
      component: <Lobby />,
    },
    {
      item: 'PREDICTION',
      component: <Prediction />,
    },
    {
      item: 'FIELD',
      component: <Field />,
    },
    {
      item: 'LEADER',
      component: <Leader />,
    },
    {
      item: 'PLAYER',
      component: <Player />,
    },
    {
      item: 'SKILL',
      component: <Skill />,
    },
    {
      item: 'SUPPORT',
      component: <Support />,
    },
    {
      item: 'LOCK',
      component: <LockDraft />,
    },
    {
      item: 'POINTS',
      component: <Point />,
    },
    {
      item: 'GAME NAVIGATION',
      component: <GameNavigation />,
    },
    {
      item: 'END RESULT',
      component: <EndResult />,
    },
    {
      item: 'COMPLETION',
      component: <Completion />,
    },
  ];

  const { tutorial } = useBoundStore();
  const { selectIndex } = tutorial;

  return (
    <section className="max-h-auto height relative h-auto min-h-screen w-full overflow-auto overflow-x-hidden">
      <Navbar />
      <div className="flexcenter relative">
        <div className="border border-[#168FFF] h-[900px] w-[900px] bg-black 
        -mb-28 -mt-28 mr-20 scale-[0.7]
        xl:scale-[0.8] xl:mr-10 xl:-mt-8 xl:-mb-8
        2xl:mb-0 2xl:mr-0 2xl:mt-0 2xl:scale-[0.9] ">
          {selectIndex === null ? <BeginTutorial /> : tutorials[selectIndex].component}
        </div>
        <SideSection data={tutorials} />
      </div>
      <Footer />
    </section>
  );
}
