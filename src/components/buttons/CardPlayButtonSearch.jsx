import { useMusicStore } from '@/store/musicStore';
import { Pause, Play } from '../songBar';

const Add = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-plus z-50">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 5l0 14" />
        <path d="M5 12l14 0" />
    </svg>
);

const Subtract = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-minus z-50">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l14 0" />
    </svg>
);

export const SearchSvg = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-search text-black">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
    </svg>
);

export function CardPlayButtonSearch({ id, album_id, title, size = 'small' }) {
    ////console.log('CardPlayButtonAddAndSearch:', id, album_id, title);

    const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5';

    return (
        <div className=" flex gap-2 z-50">
            <a
                href={`/song/${id}`}
                className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400">
                <SearchSvg />
            </a>
        </div>
    );
}

export function CardPlayButtonPlayPlaylist({
    id,
    album_id,
    title,
    size = 'small',
}) {
    ////console.log('CardPlayButton:', id);
    const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
        useMusicStore((state) => state);

    const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

    const handleClick = () => {
        setIsPlaying(!isPlaying);
    };

    const handleAdd = () => {
        fetch(`/api/db/addFavourite?title=${title}&album_id=${album_id}`)
            .then((res) => res.json())
            .then((data) => {
                ////console.log('data:', data);
                //setCurrentMusic({ songs, playlist, song: songs[0] });
            });
    };

    const handleEraseSong = async () => {
        const song_id = id;
        const album = album_id;
        ////console.log(`/api/db/removeFavourite?id=${song_id}&album=${album}`);
        const req = await fetch(
            `/api/db/removeFavourite?id=${song_id}&album=${album}`
        );
        const res = await req.json();
        ////console.log('res:', res);
        window.location.reload();
    };

    const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5';

    return (
        <div className=" flex gap-2 z-50">
            <button
                onClick={handleEraseSong}
                className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400 z-50 text-black">
                <Subtract />
            </button>
            <button
                onClick={handleClick}
                className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400 z-50">
                {isPlayingPlaylist ? (
                    <Pause className={iconClassName} />
                ) : (
                    <Play className={iconClassName} />
                )}
            </button>
        </div>
    );
}
