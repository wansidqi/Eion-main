import './css/index.css';
import './css/font.css';
import './css/debug.css';
import './css/color.css';

import { LandingPage } from './pages/LandingPage';
import { Routes, Route } from 'react-router-dom';
import { CardAlbum } from './components';
import { Info } from './pages/Info';
import { Terms } from './pages/TermsofUse';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { HowToPlayPage } from './pages/HowToPlayPage';
import { Reward } from './pages/RewardPage';
import { GameRule } from './pages/GameRule';
import { HowToPlayV2Page } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/card-album" element={<CardAlbum />} />
        <Route path="/info" element={<Info />} />
        {/* <Route path="/how-to-play" element={<HowToPlayPage />} /> */}
        <Route path="/how-to-play" element={<HowToPlayV2Page />} />
        <Route path="/tutor" element={<HowToPlayPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/reward" element={<Reward />} />
        <Route path="/game-rules" element={<GameRule />} />
      </Routes>
    </>
  );
}

export default App;
