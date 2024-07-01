import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// TODO: Add previousID to Music Store to look if the previousID match with the currentID

export const useMusicStore = create(
    persist(
        (set) => ({
            isPlaying: false,
            isPlayingBar: false,
            songlink: false,
            currentTime: 0,
            writing: false,
            currentMusic: {},
            volume: 1.0,
            setVolume: (volume) => set({ volume }),
            setWriting: (writing) => set({ writing }),
            setIsPlaying: (isPlaying) => set({ isPlaying }),
            setIsPlayingBar: (isPlayingBar) => set({ isPlayingBar }),
            setCurrentMusic: (currentMusic) => set({ currentMusic }),
            setSongLink: (songlink) => set({ songlink }),
            setCurrentTime: (currentTime) => set({ currentTime }),
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
