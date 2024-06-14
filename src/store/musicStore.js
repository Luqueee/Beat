import { create } from 'zustand';

export const useMusicStore = create((set) => ({
    isPlaying: false,
    currentMusic: {
        song: null,
        preview_image: null,
        title: null,
        artist: null,
    },
    volume: 1,
    setVolume: (volume) => set({ volume }),
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentMusic: (currentMusic) => set({ currentMusic }),
}));

export const musicStore = useMusicStore;
