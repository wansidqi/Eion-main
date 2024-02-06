import tdk3 from '@assets/images/PlayerCard/TDK/MY12-003 C_compressed.png';
import tdk10 from '@assets/images/PlayerCard/TDK/MY12-010 SR_compressed.png';
import tdk13 from '@assets/images/PlayerCard/TDK/MY12-013 SR_compressed.png';
import tdk6 from '@assets/images/PlayerCard/TDK/MY12-006 C_compressed.png';

import thq3 from '@assets/images/PlayerCard/THQ/MY12-017 C_compressed.png';
import thq4 from '@assets/images/PlayerCard/THQ/MY12-018 C_compressed.png';
import thq8 from '@assets/images/PlayerCard/THQ/MY12-022 SR_compressed.png';
import thq9 from '@assets/images/PlayerCard/THQ/MY12-023 SR_compressed.png';

import rsgmy2 from '@assets/images/PlayerCard/RSG MY/RSG.Player (Basic) copy 3_compressed.png';
import rsgmy7 from '@assets/images/PlayerCard/RSG MY/RSG.Player (Basic)_compressed.png';
import rsgmy9 from '@assets/images/PlayerCard/RSG MY/RSG.Player (Gold) copy 3_compressed.png';
import rsgmy14 from '@assets/images/PlayerCard/RSG MY/RSG.Player (Gold)_compressed.png';

import hb4 from '@assets/images/PlayerCard/HB/1. Homebois (Basic) copy 3_compressed.png';
import hb5 from '@assets/images/PlayerCard/HB/MY12-043 C_compressed.png';
import hb11 from '@assets/images/PlayerCard/HB/3. Homebois (Gold) copy 3_compressed.png';
import hb12 from '@assets/images/PlayerCard/HB/MY12-050 SR_compressed.png';

import ltx from '@assets/images/PlayerCard/Lunatix/MY12-053 C_compressed.png';
import ltx5 from '@assets/images/PlayerCard/Lunatix/MY12-057 C_compressed.png';
import ltx9 from '@assets/images/PlayerCard/Lunatix/MY12-061 SR_compressed.png';
import ltx13 from '@assets/images/PlayerCard/Lunatix/MY12-065 SR_compressed.png';

import onic2 from '@assets/images/PlayerCard/ONIC/PH12-002 C_compressed.png';
import onic5 from '@assets/images/PlayerCard/ONIC/PH12-005 C_compressed.png';
import onic11 from '@assets/images/PlayerCard/ONIC/PH12-011 SR_compressed.png';
import onic14 from '@assets/images/PlayerCard/ONIC/PH12-014 SR_compressed.png';

import echo from '@assets/images/PlayerCard/ECHO/PH12-019 C_compressed.png';
import echo5 from '@assets/images/PlayerCard/ECHO/PH12-023 C_compressed.png';
import echo8 from '@assets/images/PlayerCard/ECHO/PH12-026 SR_compressed.png';
import echo12 from '@assets/images/PlayerCard/ECHO/PH12-030 SR_compressed.png';

import rsgph from '@assets/images/PlayerCard/RSG PH/1. RSG PH (Basic)_compressed.png';
import rsgph3 from '@assets/images/PlayerCard/RSG PH/1. RSG PH (Basic) copy 2_compressed.png';
import rsgph10 from '@assets/images/PlayerCard/RSG PH/3. RSG PH (Gold) copy 2_compressed.png';
import rsgph8 from '@assets/images/PlayerCard/RSG PH/3. RSG PH (Gold)_compressed.png';

import blk4 from '@assets/images/PlayerCard/BLK/PH12-052 C.png';
import blk10 from '@assets/images/PlayerCard/BLK/PH12-047 C.png';
import blk14 from '@assets/images/PlayerCard/BLK/PH12-062 SR.png';
import blk20 from '@assets/images/PlayerCard/BLK/PH12-057 SR.png';

import tnc from '@assets/images/PlayerCard/TNC/1. TNC (Basic)_compressed.png';
import tnc5 from '@assets/images/PlayerCard/TNC/1. TNC (Basic) copy 4_compressed.png';
import tnc7 from '@assets/images/PlayerCard/TNC/3. TNC (Gold)_compressed.png';
import tnc11 from '@assets/images/PlayerCard/TNC/3. TNC (Gold) copy 4_compressed.png';

import diablo_basic from '@assets/images/PlayerCard/RSG SG/diablo basic.png';
import diablo_gold from '@assets/images/PlayerCard/RSG SG/diablo gold.png';
import brayy_basic from '@assets/images/PlayerCard/RSG SG/brayy basic.png';
import brayy_gold from '@assets/images/PlayerCard/RSG SG/brayy gold.png';

import pekz_basic from '@assets/images/PlayerCard/HB SG/pekz basic.png';
import pekz_gold from '@assets/images/PlayerCard/HB SG/pekz gold.png';
import joxxx_basic from '@assets/images/PlayerCard/HB SG/joxxx basic.png';
import joxxx_gold from '@assets/images/PlayerCard/HB SG/joxxx gold.png';

import jay_basic from '@assets/images/PlayerCard/Flash/jay basic.png';
import lolsie_basic from '@assets/images/PlayerCard/Flash/lolsie basic.png';
import jay_gold from '@assets/images/PlayerCard/Flash/jay gold.png';
import lolsie_gold from '@assets/images/PlayerCard/Flash/lolsie gold.png';

import chesty_basic from '@assets/images/PlayerCard/stellark/chesty basic.png';
import haoskie_basic from '@assets/images/PlayerCard/stellark/haoskie basic.png';
import chesty_gold from '@assets/images/PlayerCard/stellark/chesty gold.png';
import haoskie_gold from '@assets/images/PlayerCard/stellark/haoskie gold.png';

export type Teams =
  | 'Todak'
  | 'Team Haq'
  | 'RSG Malaysia'
  | 'Homebois Malaysia'
  | 'Lunatix'
  | 'Onic'
  | 'echo'
  | 'RSG Philippines'
  | 'Blacklist International'
  | 'TNC Pro Team'
  | 'RSG Singapore'
  | 'Homebois Singapore'
  | 'Team Flash'
  | 'stellark';

export type Rarity = 'basic' | 'gold';

const playerData = [
  // TODAK
  //BASIC
  {
    id: 'MY12-003',
    name: 'cikugais',
    type: 'player',
    rarity: 'basic',
    image: tdk3,
    team: 'Todak',
    country: 'Malaysia',
  },
  {
    id: 'MY12-006',
    name: '4meyz',
    type: 'player',
    rarity: 'basic',
    image: tdk6,
    team: 'Todak',
    country: 'Malaysia',
  },
  // GOLD
  {
    id: 'MY12-010',
    name: 'cikugais',
    type: 'player',
    rarity: 'gold',
    image: tdk10,
    team: 'Todak',
    country: 'Malaysia',
  },
  {
    id: 'MY12-013',
    name: '4meyz',
    type: 'player',
    rarity: 'gold',
    image: tdk13,
    team: 'Todak',
    country: 'Malaysia',
  },

  //THQ
  // BASIC
  {
    id: 'MY12-017',
    name: 'panda',
    type: 'player',
    rarity: 'basic',
    image: thq3,
    team: 'Team Haq',
    country: 'Malaysia',
  },
  {
    id: 'MY12-018',
    name: 'garyy',
    type: 'player',
    rarity: 'basic',
    image: thq4,
    team: 'Team Haq',
    country: 'Malaysia',
  },
  // GOLD
  {
    id: 'MY12-022',
    name: 'panda',
    type: 'player',
    rarity: 'gold',
    image: thq8,
    team: 'Team Haq',
    country: 'Malaysia',
  },
  {
    id: 'MY12-023',
    name: 'garyy',
    type: 'player',
    rarity: 'gold',
    image: thq9,
    team: 'Team Haq',
    country: 'Malaysia',
  },

  //RSG MY
  // BASIC
  {
    id: 'MY12-025',
    name: 'rippo',
    type: 'player',
    rarity: 'basic',
    image: rsgmy7,
    team: 'RSG Malaysia',
    country: 'Malaysia',
  },
  {
    id: 'MY12-028',
    name: 'demonkite',
    type: 'player',
    rarity: 'basic',
    image: rsgmy2,
    team: 'RSG Malaysia',
    country: 'Malaysia',
  },
  // GOLD
  {
    id: 'MY12-032',
    name: 'rippo14',
    type: 'player',
    rarity: 'gold',
    image: rsgmy14,
    team: 'RSG Malaysia',
    country: 'Malaysia',
  },
  {
    id: 'MY12-035',
    name: 'demonkite',
    type: 'player',
    rarity: 'gold',
    image: rsgmy9,
    team: 'RSG Malaysia',
    country: 'Malaysia',
  },

  //Homebois MY
  //BASIC
  {
    id: 'MY12-42',
    name: 'chibii',
    type: 'player',
    rarity: 'basic',
    image: hb4,
    team: 'Homebois Malaysia',
    country: 'Malaysia',
  },
  {
    id: 'MY12-45',
    name: 'xorn',
    type: 'player',
    rarity: 'basic',
    image: hb5,
    team: 'Homebois Malaysia',
    country: 'Malaysia',
  },
  //GOLD
  {
    id: 'MY12-49',
    name: 'chibii',
    type: 'player',
    rarity: 'gold',
    image: hb11,
    team: 'Homebois Malaysia',
    country: 'Malaysia',
  },
  {
    id: 'MY12-52',
    name: 'xorn',
    type: 'player',
    rarity: 'gold',
    image: hb12,
    team: 'Homebois Malaysia',
    country: 'Malaysia',
  },

  //LUNATIX
  //basic
  {
    id: 'MY12-53',
    name: 'rakunjoy',
    type: 'player',
    rarity: 'basic',
    image: ltx,
    team: 'Lunatix',
    country: 'Malaysia',
  },
  {
    id: 'MY12-57',
    name: 'eshaa ohana',
    type: 'player',
    rarity: 'basic',
    image: ltx5,
    team: 'Lunatix',
    country: 'Malaysia',
  },
  //GOLD
  {
    id: 'MY12-61',
    name: 'rakunjoy',
    type: 'player',
    rarity: 'gold',
    image: ltx9,
    team: 'Lunatix',
    country: 'Malaysia',
  },
  {
    id: 'MY12-65',
    name: 'eshaa ohana',
    type: 'player',
    rarity: 'gold',
    image: ltx13,
    team: 'Lunatix',
    country: 'Malaysia',
  },

  // PHILIPPINES

  //ONIC
  //BASIC
  {
    id: 'PH12-002',
    name: 'super frince',
    type: 'player',
    rarity: 'basic',
    image: onic2,
    team: 'Onic',
    country: 'Philippines',
  },
  {
    id: 'PH12-005',
    name: 'rapidoot',
    type: 'player',
    rarity: 'basic',
    image: onic5,
    team: 'Onic',
    country: 'Philippines',
  },
  // GOLD
  {
    id: 'PH12-011',
    name: 'super frince',
    type: 'player',
    rarity: 'gold',
    image: onic11,
    team: 'Onic',
    country: 'Philippines',
  },
  {
    id: 'PH12-014',
    name: 'rapidoot',
    type: 'player',
    rarity: 'gold',
    image: onic14,
    team: 'Onic',
    country: 'Philippines',
  },

  // echo
  //basic
  {
    id: 'PH12-019',
    name: 'sanford',
    type: 'player',
    rarity: 'basic',
    image: echo,
    team: 'echo',
    country: 'Philippines',
  },
  {
    id: 'PH12-023',
    name: 'yawi',
    type: 'player',
    rarity: 'basic',
    image: echo5,
    team: 'echo',
    country: 'Philippines',
  },
  //GOLD
  {
    id: 'PH12-026',
    name: 'sanford',
    type: 'player',
    rarity: 'gold',
    image: echo8,
    team: 'echo',
    country: 'Philippines',
  },
  {
    id: 'PH12-030',
    name: 'yawi',
    type: 'player',
    rarity: 'gold',
    image: echo12,
    team: 'echo',
    country: 'Philippines',
  },

  //RSG PH
  //BASIC
  {
    id: 'PH12-033',
    name: 'nathzz',
    type: 'player',
    rarity: 'basic',
    image: rsgph,
    team: 'RSG Philippines',
    country: 'Philippines',
  },
  {
    id: 'PH12-035',
    name: 'emann',
    type: 'player',
    rarity: 'basic',
    image: rsgph3,
    team: 'RSG Philippines',
    country: 'Philippines',
  },
  //GOLD
  {
    id: 'PH12-040',
    name: 'nathzz',
    type: 'player',
    rarity: 'gold',
    image: rsgph8,
    team: 'RSG Philippines',
    country: 'Philippines',
  },
  {
    id: 'PH12-042',
    name: 'emann',
    type: 'player',
    rarity: 'gold',
    image: rsgph10,
    team: 'RSG Philippines',
    country: 'Philippines',
  },

  // BLACKLIST
  //BASIC
  {
    id: 'PH12-047',
    name: 'Edward',
    type: 'player',
    rarity: 'basic',
    image: blk10,
    team: 'Blacklist International',
    country: 'Philippines',
  },
  {
    id: 'PH12-052',
    name: 'renejay',
    type: 'player',
    rarity: 'basic',
    image: blk4,
    team: 'Blacklist International',
    country: 'Philippines',
  },
  // GOLD
  {
    id: 'PH12-057',
    name: 'Edward',
    type: 'player',
    rarity: 'gold',
    image: blk20,
    team: 'Blacklist International',
    country: 'Philippines',
  },
  {
    id: 'PH12-062',
    name: 'renejay',
    type: 'player',
    rarity: 'gold',
    image: blk14,
    team: 'Blacklist International',
    country: 'Philippines',
  },

  //TNC
  //BASIC
  {
    id: 'PH12-067',
    name: 'Hesu',
    type: 'player',
    rarity: 'basic',
    image: tnc,
    team: 'TNC Pro Team',
    country: 'Philippines',
  },
  {
    id: 'PH12-071',
    name: 'benthings',
    type: 'player',
    rarity: 'basic',
    image: tnc5,
    team: 'TNC Pro Team',
    country: 'Philippines',
  },
  //GOLD
  {
    id: 'PH12-073',
    name: 'Hesu',
    type: 'player',
    rarity: 'gold',
    image: tnc7,
    team: 'TNC Pro Team',
    country: 'Philippines',
  },
  {
    id: 'PH12-077',
    name: 'benthings',
    type: 'player',
    rarity: 'gold',
    image: tnc11,
    team: 'TNC Pro Team',
    country: 'Philippines',
  },

  //SINGAPORE
  //RSG SG
  //BASIC
  {
    id: 'SG06-001',
    name: 'player 1',
    type: 'player',
    rarity: 'basic',
    image: diablo_basic,
    team: 'RSG Singapore',
    country: 'Singapore',
  },
  {
    id: 'SG06-002',
    name: 'player 2',
    type: 'player',
    rarity: 'basic',
    image: brayy_basic,
    team: 'RSG Singapore',
    country: 'Singapore',
  },
  //GOLD
  {
    id: 'SG06-008',
    name: 'player 1',
    type: 'player',
    rarity: 'gold',
    image: diablo_gold,
    team: 'RSG Singapore',
    country: 'Singapore',
  },
  {
    id: 'SG06-009',
    name: 'player 2',
    type: 'player',
    rarity: 'gold',
    image: brayy_gold,
    team: 'RSG Singapore',
    country: 'Singapore',
  },

  //HBSG
  //BASIC
  {
    id: 'SG06-015',
    name: 'player 1',
    type: 'player',
    rarity: 'basic',
    image: pekz_basic,
    team: 'Homebois Singapore',
    country: 'Singapore',
  },
  {
    id: 'SG06-016',
    name: 'player 2',
    type: 'player',
    rarity: 'basic',
    image: joxxx_basic,
    team: 'Homebois Singapore',
    country: 'Singapore',
  },
  //GOLD
  {
    id: 'SG06-020',
    name: 'player 1',
    type: 'player',
    rarity: 'gold',
    image: pekz_gold,
    team: 'Homebois Singapore',
    country: 'Singapore',
  },
  {
    id: 'SG06-021',
    name: 'player 2',
    type: 'player',
    rarity: 'gold',
    image: joxxx_gold,
    team: 'Homebois Singapore',
    country: 'Singapore',
  },

  //FLASH
  //BASIC
  {
    id: 'SG06-025',
    name: 'player 1',
    type: 'player',
    rarity: 'basic',
    image: jay_basic,
    team: 'Team Flash',
    country: 'Singapore',
  },
  {
    id: 'SG06-026',
    name: 'player 2',
    type: 'player',
    rarity: 'basic',
    image: lolsie_basic,
    team: 'Team Flash',
    country: 'Singapore',
  },
  //GOLD
  {
    id: 'SG06-033',
    name: 'player 1',
    type: 'player',
    rarity: 'gold',
    image: jay_gold,
    team: 'Team Flash',
    country: 'Singapore',
  },
  {
    id: 'SG06-034',
    name: 'player 2',
    type: 'player',
    rarity: 'gold',
    image: lolsie_gold,
    team: 'Team Flash',
    country: 'Singapore',
  },

  //stlk
  //basic
  {
    id: 'SG06-041',
    name: 'player 1',
    type: 'player',
    rarity: 'basic',
    image: chesty_basic,
    team: 'stellark',
    country: 'Singapore',
  },
  {
    id: 'SG06-042',
    name: 'player 2',
    type: 'player',
    rarity: 'basic',
    image: haoskie_basic,
    team: 'stellark',
    country: 'Singapore',
  },
  //GOLD
  {
    id: 'SG06-048',
    name: 'player 1',
    type: 'player',
    rarity: 'gold',
    image: chesty_gold,
    team: 'stellark',
    country: 'Singapore',
  },
  {
    id: 'SG06-049',
    name: 'player 2',
    type: 'player',
    rarity: 'gold',
    image: haoskie_gold,
    team: 'stellark',
    country: 'Singapore',
  },
];
export default playerData;
