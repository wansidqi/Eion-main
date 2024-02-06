import { create } from 'zustand';
import { TutorialSlice, createTutorialSlice } from './slice/tutorial.slice';
import { cardalbumSlice, createcardalbumSlice } from './slice/cardalbum.slice';
import { PlayerCardSlice, createPlayerCardSlice } from './slice/playerCard.slice';

type ResetAllSlices = { resetAllSlices: () => void };
type BoundStoreType = cardalbumSlice & TutorialSlice & PlayerCardSlice & ResetAllSlices;

export const resetters: (() => void)[] = [];

export const useBoundStore = create<BoundStoreType>()((...a) => ({
  ...createcardalbumSlice(...a),
  ...createTutorialSlice(...a),
  ...createPlayerCardSlice(...a),

  resetAllSlices: () => resetters.forEach(resetter => resetter()),
}));
