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
    inputSearch: 'aa',
    setInput: (inputSearch) => set({ inputSearch }),
}));

export const inputsSearch = useinputsSearch;

// Create a function to update the session
export function updateSession(session) {
    return playerStore.getState().setSession(session);
}

export function getSession() {
    playerStore.getState().userSession;
}
