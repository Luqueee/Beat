import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useMusicStore = create(
    persist(
        (set) => ({
            isPlaying: false,
            isPlayingBar: false,
            songlink: false,
            currentMusic: {},
            volume: 1,
            setVolume: (volume) => set({ volume }),
            setIsPlaying: (isPlaying) => set({ isPlaying }),
            setIsPlayingBar: (isPlayingBar) => set({ isPlayingBar }),
            setCurrentMusic: (currentMusic) => set({ currentMusic }),
            setSongLink: (songlink) => set({ songlink }),
        }),
        {
            // ...
            name: 'music-storage',
            version: 1,
        }
    )
);

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
