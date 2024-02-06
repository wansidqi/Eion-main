import { Footer, Navbar, TeamRewards } from '../components';
// import { Fame } from '../components/Reward/Fame';
// import { MainReward } from '../components/Reward/MainReward';
import { Seasonal } from '../components/Reward/Seasonal';
// import { Weekly } from '../components/Reward/Weekly';
import '../css/reward.css';

export function Reward() {
  return (
    <section className="max-h-auto w-full overflow-auto overflow-x-hidden">
      <Navbar />
      <div className="bg-black">
        {/* <MainReward /> */}
        {/* <Weekly /> */}
        <Seasonal />
        {/* <Fame /> */}
        <TeamRewards />
      </div>
      <Footer />
    </section>
  );
}
