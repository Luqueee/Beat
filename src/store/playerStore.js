import { create } from 'zustand';

export const usePlayerStore = create((set) => ({
    isPlaying: false,
    userSession: {},
    currentMusic: { playlist: null, song: null, songs: [] },
    volume: 1,
    loged: false,
    setVolume: (volume) => set({ volume }),
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentMusic: (currentMusic) => set({ currentMusic }),
    setSession: (userSession) => set({ userSession }),
    setLoged: (loged) => set({ loged }),
}));

export const playerStore = usePlayerStore;

export const useinputsSearch = create((set) => ({
    inputSearch: '',
    setInput: (inputSearch) => set({ inputSearch }),
}));

export const inputsSearch = useinputsSearch;
