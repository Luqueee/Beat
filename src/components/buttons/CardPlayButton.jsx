import { useEffect, useRef } from 'react';
import { Pause, Play } from '../Player';
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

    const audioRef = useRef();

    useEffect(() => {
        audioRef.current.src = id;
        audioRef.current.volume = localStorage.getItem('volume') || 1;
        setVolume(localStorage.getItem('volume') || 1);
    }, []);

    useEffect(() => {
        audioRef.current.volume = volume;
        localStorage.setItem('volume', volume);
    }, [volume]);

    useEffect(() => {
        if (!isPlaying) {
            audioRef.current.pause();
            return;
        }

        audioRef.current.play();
    }, [isPlaying]);

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
            className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400">
            {isPlaying ? (
                <Pause className={iconClassName} />
            ) : (
                <Play className={iconClassName} />
            )}
            <audio ref={audioRef} />
        </button>
    );
}
