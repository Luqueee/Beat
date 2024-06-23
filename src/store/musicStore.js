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

export const useLofiStore = create((set) => ({
    playing: false,
    url: 'https://www.youtube.com/watch?v=akW7qWS_p-g',
    volume: 1,
    setVolume: (volume) => set({ volume }),
    setPlaying: (playing) => set({ playing }),
    setUrl: (url) => set({ url }),
}));

export const lofiStore = useLofiStore;
