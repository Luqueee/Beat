import { usePlayerStore } from '@/store/playerStore';
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
        class="icon icon-tabler icons-tabler-outline icon-tabler-plus">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 5l0 14" />
        <path d="M5 12l14 0" />
    </svg>
);

export function CardPlayButtonPlay({ id, album_id, title, size = 'small' }) {
    //console.log("CardPlayButton:", id);
    const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
        usePlayerStore((state) => state);

    const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

    const handleClick = () => {
        if (isPlayingPlaylist) {
            setIsPlaying(false);
            return;
        }

        fetch(`/api/get-info-playlist.json?id=${id}`)
            .then((res) => res.json())
            .then((data) => {
                const { songs, playlist } = data;

                setIsPlaying(true);
                setCurrentMusic({ songs, playlist, song: songs[0] });
            });
    };

    const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5';

    return (
        <div className=" flex gap-2">
            <button
                onClick={handleClick}
                className="group-hover:visible hidden card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400">
                {isPlayingPlaylist ? (
                    <Pause className={iconClassName} />
                ) : (
                    <Play className={iconClassName} />
                )}
            </button>
        </div>
    );
}
