import { colors } from './colors';

export interface Playlist {
    id: string;
    albumId: number;
    title: string;
    color: (typeof colors)[keyof typeof colors];
    cover: string;
    artists: string[];
}

export const playlists: Playlist[] = [
    {
        id: '1',
        albumId: 1,
        title: 'Favoritos',
        color: colors.yellow,
        cover: 'https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353',
        artists: ['Tu'],
    },
];

export const morePlaylists = playlists.map((item) => ({
    ...item,
    id: item.id + '_more',
}));

export const sidebarPlaylists = playlists.map((item) => ({
    ...item,
    id: item.id + '_side',
}));

export const allPlaylists = [
    ...playlists,
    ...morePlaylists,
    ...sidebarPlaylists,
];

export interface Song {
    id: number;
    albumId: number;
    title: string;
    image: string;
    artists: string[];
    album: string;
    duration: string;
}

export const songs: Song[] = [
    {
        id: 1,
        albumId: 1,
        title: 'Moonlit Walk',
        image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
        artists: ['LoFi Dreamer'],
        album: 'Chill Lo-Fi Music',
        duration: '3:12',
    },
];
