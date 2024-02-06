
import { HowToPlayPageMobile } from './HowToPlayPageMobile';
import { TutorialPage } from './TutorialPage';

export function HowToPlayPage() {
  return (
    <div>
      <div className="hidden lg:block">
        <TutorialPage />
      </div>
      <div className="lg:hidden">
        <HowToPlayPageMobile />
      </div>
    </div>
  );
}
