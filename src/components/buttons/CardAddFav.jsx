import { useEffect, useRef, useState } from 'react';
import { Favorite, FavoriteFilled } from '../ui/Player';

export function CardAddFav({ size = 'small', favs = [] }) {
    const [fav, setFav] = useState(false);

    const handleClick = () => {
        setFav(!fav);
    };

    const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5';

    return (
        <button
            onClick={handleClick}
            className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400 z-50">
            {fav ? (
                <FavoriteFilled className={iconClassName} />
            ) : (
                <Favorite className={iconClassName} />
            )}
        </button>
    );
}
