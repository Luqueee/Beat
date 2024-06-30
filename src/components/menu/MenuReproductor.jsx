import { useLofiStore } from '@/store/musicStore';
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { Slider } from './slider';

export const Pause = ({ className }) => (
    <svg
        className={className}
        role="img"
        height="16"
        width="16"
        fill="white"
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
        fill=" white"
        aria-hidden="true"
        viewBox="0 0 16 16">
        <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
    </svg>
);

export const Rest10 = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-rewind-backward-10">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 9l-3 -3l3 -3" />
        <path d="M15.997 17.918a6.002 6.002 0 0 0 -.997 -11.918h-11" />
        <path d="M6 14v6" />
        <path d="M9 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z" />
    </svg>
);

const Add10 = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-rewind-forward-10">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M17 9l3 -3l-3 -3" />
        <path d="M8 17.918a5.997 5.997 0 0 1 -5 -5.918a6 6 0 0 1 6 -6h11" />
        <path d="M12 14v6" />
        <path d="M15 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z" />
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

const VolumeControl = () => {
    // ...

    const volume = useLofiStore((state) => state.volume);
    const setVolume = useLofiStore((state) => state.setVolume);
    const previousVolumeRef = useRef(volume);

    const isVolumeSilenced = volume < 0.1;

    const handleClickVolumen = () => {
        if (isVolumeSilenced) {
            setVolume(previousVolumeRef.current);
        } else {
            previousVolumeRef.current = volume;
            setVolume(0);
        }
    };

    return (
        <div className="flex justify-center items-center h-full gap-x-2 text-white">
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
                className="w-[50px] md:lg:w-[200px] py-2"
                onValueChange={(value) => {
                    const [newVolume] = value;
                    const volumeValue = newVolume / 100;
                    setVolume(volumeValue);
                }}
            />
        </div>
    );
};

export const MenuReproductor = () => {
    const [urlTerm, setUrlTerm] = useState('');

    const [play, setPlay] = useState(false);

    const { playing, url, volume, setUrl } = useLofiStore((state) => state);

    const urlInput = useRef();
    const video = useRef();
    const buttonPlay = useRef();

    useEffect(() => {
        setTimeout(() => {
            buttonPlay.current.click();
        }, 1000);
    }, []);

    useEffect(() => {
        const togglePlayPause = (event) => {
            if (event.keyCode === 32) {
                // 32 es el código de la tecla de espacio
                event.preventDefault(); // Prevenir cualquier acción predeterminada
                setPlay(!play); // Alternar entre pausa y reproducción
            }
        };

        // Agregar el escuchador de eventos
        document.addEventListener('keydown', togglePlayPause);

        // Limpiar el escuchador al desmontar el componente
        return () => {
            document.removeEventListener('keydown', togglePlayPause);
        };
    }, [play]); // Dependencias del efecto

    const handlePlay = () => {
        setPlay(!play);
        console.log(playing);
    };

    const handleAdd10 = () => {
        video.current.seekTo(video.current.getCurrentTime() + 10);
    };

    const handleRest10 = () => {
        video.current.seekTo(video.current.getCurrentTime() - 10);
    };

    const handleUrl = () => {
        setUrlTerm(urlInput.current.value);
        console.log(urlTerm);
    };

    const handleSearch = () => {
        setUrl(urlInput.current.value);
    };

    return (
        <div className=" min-w-screen min-h-screen">
            <button
                className="min-w-full min-h-full absolute z-50"
                onClick={handlePlay}
                ref={buttonPlay}></button>
            <ReactPlayer
                playing={play}
                volume={volume}
                controls={false}
                className="react-player"
                url={url}
                width="100%"
                height="100%"
                ref={video}
            />
            <div className=" absolute z-50 bottom-4 h-32 md:lg:h-14 left-4 rounded-md bg-opacity-40 backdrop-blur-sm bg-zinc-900 min-w-[80vw] flex flex-col md:lg:flex-row justify-between gap-4">
                <div className="flex-grow flex gap-4 h-full items-center justify-center md:lg:justify-normal">
                    <button
                        className=" p-4 h-full bg-zinc-900 rounded-md bg-opacity-10 hover:bg-opacity-40 transition-all duration-300 backdrop-blur-sm"
                        onClick={handlePlay}>
                        {!play ? <Play /> : <Pause />}
                    </button>
                    <button
                        className=" p-4 h-full bg-zinc-900 rounded-md bg-opacity-0 hover:bg-opacity-40 transition-all duration-300 backdrop-blur-sm"
                        onClick={handleRest10}>
                        <Rest10 />
                    </button>
                    <button
                        className=" p-4 h-full bg-zinc-900 rounded-md bg-opacity-0 hover:bg-opacity-40 transition-all duration-300 backdrop-blur-sm"
                        onClick={handleAdd10}>
                        <Add10 />
                    </button>

                    <div className=" h-full">
                        <VolumeControl />
                    </div>
                </div>
                <div className=" w-full md:lg:w-[50%] h-full flex justify-center items-center p-4 gap-4">
                    <input
                        type="text"
                        placeholder="URL de Youtube"
                        className=" w-full rounded-md bg-opacity-70 backdrop-blur-md bg-white text-black px-4"
                        ref={urlInput}
                        onChange={handleUrl}
                    />
                    <button
                        className=" m-4 px-8 rounded-md bg-opacity-40 backdrop-blur-md bg-zinc-900"
                        onClick={handleSearch}>
                        Buscar
                    </button>
                </div>
            </div>
        </div>
    );
};
