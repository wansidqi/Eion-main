import { StateCreator } from 'zustand';
import { resetters } from '..';

export type Tutorial = {
  selectIndex: number | null;
  timerNoText: number;
  timerText: number;
  seqIndex: number;
  autoPlay: boolean;
};

const initialTutorial = {
  tutorial: {
    selectIndex: null,
    timerNoText: 2000,
    timerText: 8000,
    autoPlay: false,
    seqIndex: 0,
  },
};

export interface TutorialSlice {
  tutorial: Tutorial;
  setTutorialState: (tutorial: Partial<Tutorial>) => void;
  resetTutorial: () => void;
}

export const createTutorialSlice: StateCreator<TutorialSlice, [], [], TutorialSlice> = set => {
  resetters.push(() => set(initialTutorial));

  return {
    ...initialTutorial,

    setTutorialState: (tutorial: Partial<Tutorial>) => {
      set(state => ({ tutorial: { ...state.tutorial, ...tutorial } }));
    },

    resetTutorial: () => {
      set({ ...initialTutorial });
    },
  };
};
