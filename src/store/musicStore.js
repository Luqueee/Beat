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
    playing: true,
    url: 'https://www.youtube.com/watch?v=7zp1TbLFPp8',
    volume: 1,
    setVolume: (volume) => set({ volume }),
    setPlaying: (playing) => set({ playing }),
    setUrl: (url) => set({ url }),
}));

export const lofiStore = useLofiStore;
