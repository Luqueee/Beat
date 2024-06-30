import { useMusicStore } from '@/store/musicStore';
import { useEffect, useState } from 'react';
import { Pause, Play } from '../songBar';

export function CardPlayButton({
    size = 'small',
    song = null,
    preview_image = null,
    title = null,
    artist = null,
    id = null,
}) {
    const { currentMusic, setIsPlaying } = useMusicStore((state) => state);

    const [play, setPlay] = useState(false);

    const handleClick = () => {
        setPlay(!play);
        setIsPlaying(!play);
        localStorage.setItem(
            'currentMusic',
            JSON.stringify([{ song, preview_image, title, artist, id }])
        );
    };

    useEffect(() => {
        setIsPlaying(false);
    }, [currentMusic]);

    const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5';

    return (
        <button
            onClick={handleClick}
            className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400 z-50">
            {play ? (
                <Pause className={iconClassName} />
            ) : (
                <Play className={iconClassName} />
            )}
        </button>
    );
}
