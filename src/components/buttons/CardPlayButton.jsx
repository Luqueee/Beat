import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from '../ui/Player';
import { useMusicStore } from '@/store/musicStore';

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
        isPlaying,
        setCurrentMusic,
        setIsPlaying,
        volume,
        setVolume,
    } = useMusicStore((state) => state);

    useEffect(() => {
        const change = localStorage.getItem('songchange');
        if (change == false) {
            setIsPlaying(false);
            setIsPlaying(true);
        }
    }, [currentMusic]);

    const handleClick = () => {
        setIsPlaying(!isPlaying);
        localStorage.setItem(
            'currentMusic',
            JSON.stringify([{ song, preview_image, title, artist, id }])
        );
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
