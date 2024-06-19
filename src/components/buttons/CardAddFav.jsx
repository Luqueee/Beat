import { useEffect, useRef, useState } from 'react';
import { Favorite, FavoriteFilled } from '../ui/Player';

export function CardAddFav({ size = 'small', id }) {
    const [fav, setFav] = useState(false);
    const [isFav, setIsFav] = useState(null);

    useEffect(() => {
        fetch(`/api/music/isFav?id=${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log('isFav:', data, id);
                setIsFav(data);
                data ? setFav(true) : setFav(false);
            });
    }, []);

    const handleClick = () => {
        if (!fav) {
            fetch(`/api/music/addFav?id=${id}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log('addFav:', data);
                });
        } else {
            fetch(`/api/music/removeFav?id=${id}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log('removeFav:', data);
                });
        }
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
