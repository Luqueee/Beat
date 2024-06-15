import { useState } from 'react';
import { Remove, RemoveFilled } from '../ui/Player';
import { usePlayerStore } from '@/store/playerStore';

// TODO: Detectar el albumn en el que te encuentras y ver si ya estaba anyadido a favoritos. En el caso que este anyadido asignar el estado inicial a true. En caso contrario a false. Usar una store.

export function CardRemoveButton({ id, album, size = 'small' }) {
    const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
        usePlayerStore((state) => state);
    const [clickRemove, setClickRemove] = useState(false);

    const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

    const handleClickAddFav = async () => {
        setClickRemove(true);
        const req = await fetch(`/api/db/addFavourite?id=${id}&album=${album}`);
        const res = await req.json();
        console.log('res:', res);
    };

    const handleClickRemoveFav = async () => {
        setClickRemove(false);
    };

    const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5';

    return (
        <div>
            {!clickRemove ? (
                <button
                    onClick={handleClickAddFav}
                    className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400">
                    <Remove className={`${iconClassName} text-black`} />
                </button>
            ) : (
                <button
                    onClick={handleClickRemoveFav}
                    className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400">
                    <RemoveFilled className={`${iconClassName} text-black`} />
                </button>
            )}
        </div>
    );
}
