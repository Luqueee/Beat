import { useEffect, useRef } from 'react';
import { Pause, Play } from '../ui/Player';
import { useMusicStore } from '@/store/musicStore';

export function CardPlayButton({ id, size = 'small' }) {
    const {
        currentMusic,
        isPlaying,
        setCurrentMusic,
        setIsPlaying,
        volume,
        setVolume,
    } = useMusicStore((state) => state);

    const handleClick = () => {
        if (isPlaying) {
            setIsPlaying(false);
            return;
        } else {
            setIsPlaying(true);
        }
    };

    const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5';

    return (
        <button
            onClick={handleClick}
            className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400 z-50">
            {isPlaying ? (
                <Pause className={iconClassName} />
            ) : (
                <Play className={iconClassName} />
            )}
        </button>
    );
}
