// import { cardalbum } from './cardalbum.slice';
import { StateCreator } from 'zustand';
import { resetters } from '..';

    export const initialFilterContent = {
    rarity: false,
    // duplicates: false,
    region: false,
    role: false,
    team: false,
    type: false,
    };

    export const initialFilters = {
    role: [],
    type: [],
    rarity: [],
    // duplicates: [],
    team: [],
    dropdown: [],
    };

    export interface FiltersContent {
    rarity: boolean;
    // duplicates: boolean;
    region: boolean;
    team: boolean;
    type: boolean;
    role: boolean;
    }

    export interface Filter {
    role: string[];
    type: string[];
    rarity: string[];
    // duplicates: string[];
    team: string[];
    dropdown: string[];
    [key: string]: string[];
    }

    export type cardalbum = {
    showBreakdown: boolean;
    showDropdown: boolean;
    showDropdownFilter: boolean;
    filtersContent: FiltersContent;
    filters: Filter;
    };

    const initialcardalbum = {
    cardalbum: {
    showBreakdown: false,
    showDropdown: false,
    showDropdownFilter: true,
    search: '',
    selectButton: [],
    filtersContent: initialFilterContent,
    filters: initialFilters,
    },
    };

    export interface cardalbumSlice {
    cardalbum: cardalbum;
    setcardalbumState: (cardalbum: Partial<cardalbum>) => void;
    resetcardalbum: () => void;
    }

    export const createcardalbumSlice: StateCreator<cardalbumSlice, [], [], cardalbumSlice> = set => {
        resetters.push(() => set(initialcardalbum));

    return {
    ...initialcardalbum,

    setcardalbumState: (cardalbum: Partial<cardalbum>) => {
        set(state => ({ cardalbum: { ...state.cardalbum, ...cardalbum } }));
    },

    resetcardalbum: () => {
        set({ ...initialcardalbum });
    },
    };
    };
