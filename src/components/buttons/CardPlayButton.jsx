import { useEffect, useRef } from 'react';
import { Pause, Play } from '../Player';
import { useMusicStore } from '@/store/musicStore';

export function CardPlayButton({ id, size = 'small' }) {
    const { currentMusic, isPlaying, setCurrentMusic, setIsPlaying, volume } =
        useMusicStore((state) => state);

    const audioRef = useRef();

    useEffect(() => {
        isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }, [isPlaying]);

    useEffect(() => {
        const { song, preview_image, title } = currentMusic;
        if (song) {
            const src = currentMusic.song;
            audioRef.current.src = src;
            audioRef.current.volume = volume;
            audioRef.current.play();
        }
    }, [currentMusic]);

    useEffect(() => {
        setCurrentMusic(id);
    }, []);

    const handleClick = () => {
        if (isPlaying) {
            setIsPlaying(false);
            return;
        } else {
            setIsPlaying(true);
            setCurrentMusic(id);
        }

        console.log(currentMusic, isPlaying);
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
