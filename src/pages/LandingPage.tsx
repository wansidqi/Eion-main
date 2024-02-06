import { NavigateToEion, Details, Reward, Footer, AllStarCollaborationV2 } from '../components';

import { Navbar } from '../components/Navbar/index';
// import { ImageSlider } from '../components/LandingPage/ImageSlider';

// import '../css/body.css';
import '../css/body.css';

export function LandingPage() {
  return (
    <section className="max-h-auto height relative h-auto min-h-screen w-full overflow-auto overflow-x-hidden">
      <Navbar />

      <div>
        <Details />
        <NavigateToEion />
        {/* <AllStarCollaboration /> */}
        <AllStarCollaborationV2 />
        {/* <CardRarity /> */}
        <Reward />
        {/* <PlayNow /> */}
      </div>
      <Footer />
    </section>
    // <ImageSlider />
  );
}
