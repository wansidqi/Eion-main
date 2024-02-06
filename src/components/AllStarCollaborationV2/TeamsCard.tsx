import blck from '@assets/images/AllStarsCollaboration/blck.png';
import echo from '@assets/images/AllStarsCollaboration/echo.png';
import onic from '@assets/images/AllStarsCollaboration/onicph.png';
import tnc from '@assets/images/AllStarsCollaboration/tnc.png';
import rsgph from '@assets/images/AllStarsCollaboration/rsgph.png';
import hbmy from '@assets/images/AllStarsCollaboration/hb.png';
import ltx from '@assets/images/AllStarsCollaboration/ltx.png';
import thq from '@assets/images/AllStarsCollaboration/thq.png';
import todak from '@assets/images/AllStarsCollaboration/todak.png';
import rsgmy from '@assets/images/AllStarsCollaboration/rsgmy.png';
import flash from '@assets/images/AllStarsCollaboration/flash.png';
import hbsg from '@assets/images/AllStarsCollaboration/hbsg.png';
import stlrk from '@assets/images/AllStarsCollaboration/stlk.png';
import rsgsg from '@assets/images/AllStarsCollaboration/rsgsg.png';

import active_blck from '@assets/images/Team-Rewards/active-btn/active_blck.png';
import active_echo from '@assets/images/Team-Rewards/active-btn/active_echo.png';
import active_flash from '@assets/images/Team-Rewards/active-btn/active_flash.png';
import active_hbmy from '@assets/images/Team-Rewards/active-btn/active_hbmy.png';
import active_hbsg from '@assets/images/Team-Rewards/active-btn/active_hbsg.png';
import active_ltx from '@assets/images/Team-Rewards/active-btn/active_ltx.png';
import active_onic from '@assets/images/Team-Rewards/active-btn/active_onic.png';
import active_rsgmy from '@assets/images/Team-Rewards/active-btn/active_rsgmy.png';
import active_rsgsg from '@assets/images/Team-Rewards/active-btn/active_rsgsg.png';
import active_rsgph from '@assets/images/Team-Rewards/active-btn/active_rsgph.png';
import active_thq from '@assets/images/Team-Rewards/active-btn/active_thq.png';
import active_tnc from '@assets/images/Team-Rewards/active-btn/active_tnc.png';
import active_todak from '@assets/images/Team-Rewards/active-btn/active_todak.png';
import active_stlk from '@assets/images/Team-Rewards/active-btn/active_stlk.png';
import { useBoundStore } from '../../store';
import { selectTeam } from '../../store/slice/playerCard.slice';
import { Teams } from '../CardAlbum/playerData';
import { Description } from '..';

export function TeamsCard() {
  const images = [
    { name: 'Blacklist International', active: active_blck, inactive: blck, className: '' },
    { name: 'echo', active: active_echo, inactive: echo, className: '' },
    { name: 'Onic', active: active_onic, inactive: onic, className: '' },
    { name: 'TNC Pro Team', active: active_tnc, inactive: tnc, className: '' },
    { name: 'RSG Philippines', active: active_rsgph, inactive: rsgph, className: '' },
    { name: 'Homebois Malaysia', active: active_hbmy, inactive: hbmy, className: '' },
    { name: 'Lunatix', active: active_ltx, inactive: ltx, className: '' },
    { name: 'Team Haq', active: active_thq, inactive: thq, className: '' },
    { name: 'Todak', active: active_todak, inactive: todak, className: '' },
    { name: 'RSG Malaysia', active: active_rsgmy, inactive: rsgmy, className: '' },
    { name: 'Team Flash', active: active_flash, inactive: flash, className: '' },
    { name: 'Homebois Singapore', active: active_hbsg, inactive: hbsg, className: '' },
    { name: 'stellark', active: active_stlk, inactive: stlrk, className: 'col-start-2 md:col-start-3 lg:col-start-6' },
    { name: 'RSG Singapore', active: active_rsgsg, inactive: rsgsg, className: '' },
  ];

  const { playerCard, setPlayerCardState } = useBoundStore();
  const { currentTeam } = playerCard;

  const selection = (team: Teams) => {
    setPlayerCardState({ selectedTeam: selectTeam(team), currentTeam: team });
  };

  return (
    <div className="xl:mx-8 my-10 text-center sm:my-20 md:my-14 md:flex md:flex-col md:items-center md:justify-center md:py-0 lg:my-20">
      <div className="flex flex-col">
        <div className="logo-shadow grid grid-cols-4 justify-items-end gap-4 md:grid-cols-6 lg:grid-cols-7 4k:gap-20">
          {images.map(image => (
            <button onClick={() => selection(image.name as Teams)} className={image.className}>
              <img src={currentTeam === image.name ? image.active : image.inactive} alt="" />
            </button>
          ))}
        </div>
      </div>
      <Description />
    </div>
  );
}
