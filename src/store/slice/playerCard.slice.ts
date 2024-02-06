import { StateCreator } from 'zustand';
import { resetters } from '..';
import { Teams } from '../../components/CardAlbum/playerData';
import playerData from '../../components/CardAlbum/playerDataStar';

export const selectTeam = (team: Teams) => {
  const filter = playerData.filter(_player => _player.team === team).map(_player => _player.image);
  return filter;
};

export type PlayerCard = {
  selectedTeam: string[];
  currentTeam: Teams;
};

const initialPlayerCard = {
  playerCard: {
    selectedTeam: selectTeam('Blacklist International'),
    currentTeam: 'Blacklist International' as Teams,
  },
};

export interface PlayerCardSlice {
  playerCard: PlayerCard;
  setPlayerCardState: (playerCard: Partial<PlayerCard>) => void;
  resetPlayerCard: () => void;
}

export const createPlayerCardSlice: StateCreator<PlayerCardSlice, [], [], PlayerCardSlice> = set => {
  resetters.push(() => set(initialPlayerCard));

  return {
    ...initialPlayerCard,

    setPlayerCardState: (playerCard: Partial<PlayerCard>) => {
      set(state => ({ playerCard: { ...state.playerCard, ...playerCard } }));
    },

    resetPlayerCard: () => {
      set({ ...initialPlayerCard });
    },
  };
};
