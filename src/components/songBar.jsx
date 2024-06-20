import { useMusicStore } from '@/store/musicStore';
import { useEffect, useRef, useState } from 'react';

import { Slider } from './ui/slider';

export const Pause = ({ className }) => (
    <svg
        className={className}
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        viewBox="0 0 16 16">
        <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
    </svg>
);

export const Play = ({ className }) => (
    <svg
        className={className}
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        viewBox="0 0 16 16">
        <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
    </svg>
);

export const Remove = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-heart">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    </svg>
);

export const RemoveFilled = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="#000000"
        class="icon icon-tabler icons-tabler-filled icon-tabler-heart">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
    </svg>
);

export const VolumeSilence = () => (
    <svg
        fill="currentColor"
        role="presentation"
        height="16"
        width="16"
        aria-hidden="true"
        aria-label="Volumen apagado"
        viewBox="0 0 16 16">
        <path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path>
        <path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path>
    </svg>
);

export const Volume = () => (
    <svg
        fill="currentColor"
        role="presentation"
        height="16"
        width="16"
        aria-hidden="true"
        aria-label="Volumen alto"
        id="volume-icon"
        viewBox="0 0 16 16">
        <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
        <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
    </svg>
);

export const Prev = () => (
    <svg
        fill="currentColor"
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        viewBox="0 0 16 16">
        <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
    </svg>
);
export const Next = () => (
    <svg
        fill="currentColor"
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        viewBox="0 0 16 16">
        <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path>
    </svg>
);

const CurrentSong = ({ image, id, title, artists }) => {
    return (
        <div
            className={`
        flex items-center gap-4 absolute
                h-full w-full  top-0 left-0 p-4
      `}>
            <picture className="w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden object-cover">
                <img
                    src={image}
                    className=" object-cover h-full w-full"
                    alt={title}
                />
            </picture>

            <div className="flex flex-col gap-2 h-full z-50">
                <a
                    href={`/song/${id}`}
                    className="font-semibold text-sm block hover:underline transition-all ">
                    <p>{title}</p>
                </a>
                <span className="text-xs opacity-80">{artists}</span>
            </div>
        </div>
    );
};

const StatusBar = ({ image, title, artists, isPlaying }) => {
    const opacityClass = isPlaying ? 'opacity-100' : 'opacity-0';
    return (
        <div
            className={`
        md:lg:flex sm:hidden items-center gap-5 absolute top-0 right-0 m-4 w-[400px] bg-green-400 p-4 rounded-md
        overflow-hidden transition-opacity duration-500 z-10  ${opacityClass}
      `}>
            <picture className="w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden">
                <img src={image} alt={title} />
            </picture>

            <div className="flex flex-col">
                <h3 className="font-semibold text-2xl block">{title}</h3>
                <span className="text-md opacity-80">
                    {artists?.join(', ')}
                </span>
            </div>
        </div>
    );
};

const SongControl = ({ audio }) => {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        audio.current.addEventListener('timeupdate', handleTimeUpdate);

        const interval = setInterval(() => {
            localStorage.setItem('currentTime', audio.current.currentTime);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [audio]);

    const handleTimeUpdate = () => {
        setCurrentTime(audio.current.currentTime);
    };

    const formatTime = (time) => {
        if (time == null) return `0:00`;

        const seconds = Math.floor(time % 60);
        const minutes = Math.floor(time / 60);

        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const duration = audio?.current?.duration ?? 0;

    return (
        <div className="flex gap-x-3 text-xs md:lg:justify-start justify-center">
            <span className="opacity-50 w-12 text-right">
                {formatTime(currentTime)}
            </span>

            <Slider
                value={[currentTime]}
                max={audio?.current?.duration ?? 0}
                min={0}
                className="md:lg:w-[200px] w-[70px]"
                onValueChange={(value) => {
                    const [newCurrentTime] = value;
                    audio.current.currentTime = newCurrentTime;
                    localStorage.setItem('currentTime', newCurrentTime);
                }}
            />

            <span className="opacity-50 w-12">
                {duration ? formatTime(duration) : '0:00'}
            </span>
        </div>
    );
};

const VolumeControl = () => {
    const volume = useMusicStore((state) => state.volume);
    const setVolume = useMusicStore((state) => state.setVolume);
    const previousVolumeRef = useRef(volume);
    const isVolumeSilenced = volume < 0.05;

    const handleClickVolumen = () => {
        if (isVolumeSilenced) {
            setVolume(previousVolumeRef.current);
        } else {
            previousVolumeRef.current = volume;
            setVolume(0);
        }
    };

    return (
        <div className="flex justify-center items-center gap-x-2 text-white">
            <button
                className="opacity-70 hover:opacity-100 transition"
                onClick={handleClickVolumen}>
                {isVolumeSilenced ? <VolumeSilence /> : <Volume />}
            </button>

            <Slider
                defaultValue={[100]}
                max={100}
                min={0}
                value={[volume * 100]}
                className="w-[95px] py-2"
                onValueChange={(value) => {
                    const [newVolume] = value;
                    const volumeValue = newVolume / 100;
                    setVolume(volumeValue);
                }}
            />
        </div>
    );
};
export function SongBar({
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
    const audioRef = useRef();

    const [titleSong, setTitle] = useState(null);
    const [artistSong, setArtist] = useState(null);
    const [imageSong, setImage] = useState(null);
    const [idSong, setId] = useState(null);

    useEffect(() => {
        const song_data =
            JSON.parse(localStorage.getItem('currentMusic'))?.[0] || null;
        audioRef.current.volume = localStorage.getItem('volume') || 1;
        setVolume(localStorage.getItem('volume') || 1);
        console.log(song, preview_image, title, artist);
        console.log(song_data);
        try {
            if (song !== null && song !== song_data.song) {
                const wasPlaying = !audioRef.current.paused; // Check if music was playing
                audioRef.current.src = song; // Change the source
                audioRef.current.load(); // Load the new source
                audioRef.current.currentTime = 0; // Reset time to start
                if (wasPlaying) {
                    audioRef.current.play().catch(
                        (
                            error // Play if it was playing before
                        ) => console.error('Error playing the audio:', error)
                    );
                }
                localStorage.setItem(
                    'currentMusic',
                    JSON.stringify([{ song, preview_image, title, artist, id }])
                );

                setImage(preview_image);
                setTitle(title);
                setArtist(artist);
                setId(id);
            }
        } catch (error) {
            if (
                !song_data &&
                song !== null &&
                preview_image !== null &&
                title !== null &&
                artist !== null &&
                id !== null
            ) {
                localStorage.setItem(
                    'currentMusic',
                    JSON.stringify([{ song, preview_image, title, artist, id }])
                );

                setImage(preview_image);
                setTitle(title);
                setArtist(artist);
                setId(id);
            }
        }
    }, [song]);

    useEffect(() => {
        const song_data = JSON.parse(localStorage.getItem('currentMusic'))[0];
        if (song_data) {
            audioRef.current.src = song_data.song;
            audioRef.current.load();
            setCurrentMusic(song_data.song);
            setIsPlaying(true);
        }
        setImage(song_data.preview_image);
        setTitle(song_data.title);
        setArtist(song_data.artist);
        setId(song_data.id);
    }, []);

    useEffect(() => {
        localStorage.setItem('playing', isPlaying);
        if (!isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current
                .play()
                .catch((error) =>
                    console.error('Error playing the audio:', error)
                );
        }
    }, [isPlaying]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (audioRef.current.ended) {
                setIsPlaying(false);
            }
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [audioRef]);

    useEffect(() => {
        audioRef.current.volume = volume;
        localStorage.setItem('volume', volume);
    }, [volume]);

    const handleClick = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const song_data = JSON.parse(localStorage.getItem('currentMusic'))?.[0];
        localStorage.setItem('playing', 'false');
        setIsPlaying(false);
        if (song_data) {
            setCurrentMusic(song_data.song);
        }
    }, []);

    return (
        <div className="flex flex-row justify-center relative items-center w-full z-50 bg-gray-800 bg-opacity-30 py-6 md:lg:pl-8 pl-0 gap-2 shadow-md h-full backdrop-filter  ">
            <div className=" md:lg:block hidden h-full ">
                <CurrentSong
                    title={titleSong}
                    artists={artistSong}
                    image={imageSong}
                    id={idSong}
                />
            </div>
            <div className="flex w-full h-full justify-center px-8 items-center z-50">
                <button
                    title="Play / Pause"
                    onClick={handleClick}
                    className="bg-white rounded-full p-2">
                    {isPlaying ? <Pause /> : <Play />}
                </button>
                <SongControl audio={audioRef} />

                <VolumeControl />
            </div>
            <audio
                ref={audioRef}
                onError={() => console.error('Error loading audio')}>
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}
