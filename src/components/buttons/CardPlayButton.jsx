import { useMusicStore } from '@/store/musicStore';
import { useEffect } from 'react';
import { Pause, Play } from '../songBar';

export function CardPlayButton({
    size = 'small',
    song = null,
    preview_image = null,
    title = null,
    artist = null,
    id = null,
}) {
    const {
        currentMusic,
        setIsPlaying,
        isPlaying,
        setCurrentMusic,

        setIsPlayingBar,
    } = useMusicStore((state) => state);

    useEffect(() => {
        setIsPlaying(false);
    }, []);

    const handleClick = () => {
        if (currentMusic.id != id) {
            setCurrentMusic({
                song,
                preview_image,
                title,
                artist,
                id,
            });
        }

        setIsPlaying(!isPlaying);
        setIsPlayingBar(!isPlaying);
    };

    const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5';

    return (
        <button
            onClick={handleClick}
            name="play-button"
            className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400 z-50">
            {isPlaying ? (
                <Pause className={iconClassName} />
            ) : (
                <Play className={iconClassName} />
            )}
        </button>
    );
}
