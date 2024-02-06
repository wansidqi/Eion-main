import { useBoundStore } from '../store';
import {
  BeginTutorialMobile,
  CompletionMobile,
  CompletionText,
  ContentHowToPlay,
  DoubleBorder,
  EndResultMobile,
  EndResultText,
  FieldMobile,
  FieldMobileText,
  Footer,
  GameNavigationMobile,
  GameNavigationText,
  IntroductionMobile,
  LeaderMobile,
  LeaderText,
  LobbyMobile,
  LockDraftMobile,
  LockDraftStatus,
  Navbar,
  PlayerMobile,
  PlayerText,
  PointMobile,
  PointText,
  PredictionMobile,
  PredictionText,
  SideSection,
  SkillMobile,
  SkillText,
  SupportMobile,
  SupportText,
  TextIntroduction,
  TextLobby,
} from '../components';

export function HowToPlayPageMobile() {
  const tutorials = [
    {
      item: 'INTRODUCTION',
      component: <IntroductionMobile />,
      description: <TextIntroduction />,
    },
    {
      item: 'LOBBY',
      component: <LobbyMobile />,
      description: <TextLobby />,
    },
    {
      item: 'PREDICTION',
      component: <PredictionMobile />,
      description: <PredictionText />,
    },
    {
      item: 'FIELD',
      component: <FieldMobile />,
      description: <FieldMobileText />,
    },
    {
      item: 'LEADER',
      component: <LeaderMobile />,
      description: <LeaderText />,
    },
    {
      item: 'PLAYER',
      component: <PlayerMobile />,
      description: <PlayerText />,
    },
    {
      item: 'SKILL',
      component: <SkillMobile />,
      description: <SkillText />,
    },
    {
      item: 'SUPPORT',
      component: <SupportMobile />,
      description: <SupportText />,
    },
    {
      item: 'LOCK',
      component: <LockDraftMobile />,
      description: <LockDraftStatus />,
    },
    {
      item: 'POINTS',
      component: <PointMobile />,
      description: <PointText />,
    },
    {
      item: 'GAME NAVIGATION',
      component: <GameNavigationMobile />,
      description: <GameNavigationText />,
    },
    {
      item: 'END RESULT',
      component: <EndResultMobile />,
      description: <EndResultText />,
    },
    {
      item: 'COMPLETION',
      component: <CompletionMobile />,
      description: <CompletionText />,
    },
  ];

  const { tutorial } = useBoundStore();
  const { selectIndex } = tutorial;

  return (
    <section className="max-h-auto height relative h-auto min-h-screen w-full overflow-auto overflow-x-hidden">
      <Navbar />

      <div className="flexcenter-col relative mb-10">
        <ContentHowToPlay>
          {selectIndex === null ? <BeginTutorialMobile /> : tutorials[selectIndex].component}
        </ContentHowToPlay>

        <SideSection data={tutorials} />

        <DoubleBorder>
          <>{selectIndex === null ? null : tutorials[selectIndex].description}</>
        </DoubleBorder>
      </div>
      <Footer />
    </section>
  );
}
