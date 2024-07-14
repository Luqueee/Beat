import { Skeleton } from '@/components/ui/skeleton';
import React, { useEffect, useState } from 'react';

import { useMusicStore } from '@/store/musicStore';
import {
    CardPlayButtonPlayPlaylist,
    CardPlayButtonSearch,
} from '../buttons/CardPlayButtonSearch';

export function getTimeSong(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours > 0 ? hours + 'h ' : ''}${remainingMinutes}m ${seconds}s`;
}

export const Result = ({ song }) => {
    const handleClick = () => {
        window.location.href = `/song/${song.id}`;
    };

    return (
        <button
            onClick={handleClick}
            key={`result line ${song.id}`}
            className="w-full group h-20 z-[999999999] relative rounded-md hover:backdrop-blur-md transition-all duration-500 backdrop-blur-sm ">
            <div className="bg-gray-800  bg-opacity-10 transition-all duration-500 rounded-md p-2 flex gap-2 w-full shadow-sm h-full ">
                <picture className="min-w-16 min-h-16 overflow-hidden rounded-md">
                    <img
                        alt={song.title}
                        src={song.album.cover}
                        decoding="async"
                        draggable="false"
                        loading="lazy"
                        className="rounded-md group-hover:scale-105 shadow-md h-full w-full object-cover transition-all duration-500"
                    />
                </picture>
                <section className="flex-grow flex gap-2 flex-col relative min-w-full">
                    <div className="flex gap-4 min-w-full">
                        <section className="flex flex-col gap-2 min-w-full ">
                            <a
                                href={`/song/${song.id}`}
                                className="z-50  text-start md:lg:text-2xl pr-8 truncate max-w-[90%] text-xl font-bold group-hover:font-extrabold md:lg:group-hover:text-[1.6rem] group-hover:text-[1.3rem] hover:underline md:lg:hover:no-underline transition-all duration-300">
                                {song.title}
                            </a>

                            <section className="flex flex-col gap-2">
                                <p className="w-fit truncate">
                                    {song.artist.name}
                                    <span className="ml-4 font-medium">
                                        {getTimeSong(song.duration)}
                                    </span>
                                </p>
                            </section>
                        </section>
                        <section className="h-full flex flex-col justify-end ml-6"></section>
                    </div>
                    <div
                        className={`absolute hidden right-4 bottom-3 translate-y-2
                                    transition-all duration-500 opacity-0
                                    group-hover:translate-y-0 group-hover:opacity-100
                                    z-10
                                `}>
                        <CardPlayButtonSearch
                            id={song.id}
                            album_id="1"
                            title={song.title}
                            client:visible
                        />
                    </div>
                </section>
            </div>
        </button>
    );
};

export const ResultPlaylist = ({ song }) => (
    ////console.log('Song:', song),
    <article className="w-full group">
        <button className=" bg-gray-800 bg-opacity-10 rounded-md p-2 flex gap-2  shadow-md relative">
            <section className=" z-50">
                <a href="/aa" className=" z-50">
                    <img
                        src={song.data_song.album.cover}
                        alt={song.data_song.title}
                        draggable="false"
                        className=" rounded-md shadow-md h-16 w-16 object-cover"
                    />
                </a>
            </section>
            <section className=" w-full flex gap-2 flex-col relative">
                <div className=" flex gap-4">
                    <section className=" flex flex-col gap-2">
                        <a
                            href={`/song/${song.song_id}`}
                            className=" z-50 py-4 pr-4 text-xl font-medium  hover:font-bold hover:scale-110 hover:ml-2 transition-all duration-150">
                            {song.data_song.title}
                        </a>

                        <section className="flex flex-col gap-2">
                            <p className=" w-fit">
                                {song.data_song.contributors
                                    .map((artist) => artist.name)
                                    .join(', ')}
                                <span className=" ml-4 font-medium">
                                    {getTimeSong(song.data_song.duration)}
                                </span>
                            </p>
                        </section>
                    </section>
                    <section className="h-full flex flex-col justify-end ml-6"></section>
                </div>
                <div
                    className={` absolute right-4 bottom-3 translate-y-2
                                    transition-all duration-500 opacity-0
                                    group-hover:translate-y-0 group-hover:opacity-100
                                    z-10
                                `}>
                    <CardPlayButtonPlayPlaylist
                        client:load
                        className="z-50"
                        id={song.song_id}
                        album_id="1"
                        title={song.title}
                    />
                </div>
            </section>
        </button>
    </article>
);

export const SearchBar = () => {
    //const { inputSearch, setInput } = useinputsSearch((state) => state);
    const { searching, setSearching } = useMusicStore((state) => state);

    const inputRef = React.createRef();
    const [searchTerm, setSearchTerm] = useState(() => {
        if (typeof window !== 'undefined') {
            try {
                const input = localStorage.getItem('input');
                return input;
            } catch (e) {
                localStorage.setItem('input', '');
                return '';
            }
        }
    });

    const [searchResult, setSearchResult] = useState(null);

    const handleInputFocus = () => {
        if (searching == false) {
            setSearching(true);
        }
    };

    const handleInputBlur = () => {
        if (searching == true) {
            setSearching(false);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            ////console.log('Search term changed:', searchTerm, inputSearch);

            fetch(`/api/music/search?song=${encodeURIComponent(searchTerm)}`)
                .then((res) => res.json())
                .then((data) => {
                    ////console.log('Search result:', data);
                    setSearchResult(data);
                    localStorage.setItem('searchResult', JSON.stringify(data));
                })
                .catch((e) => {
                    console.log('Error:', e);
                });
        }, 100);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
        localStorage.setItem('input', e.target.value);
    };

    return (
        <div className=" w-full md:lg:w-[60%] min-h-[80%] flex flex-col justify-center items-start px-6">
            <section className=" w-full  m-auto gap-2 z-50 flex justify-center items-center">
                <div className=" flex-grow my-4">
                    <input
                        type="text"
                        name="searchbox"
                        id="searchbox"
                        className="w-full rounded-md border-none ring-0 bg-gray-800 bg-opacity-20 focus:bg-opacity-50 transition-all duration-300 outline-none py-4 backdrop-blur-sm p-2 text-white text-xl"
                        placeholder="Type a song..."
                        value={searchTerm || ''}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        onChange={handleChange}
                        ref={inputRef}
                    />
                </div>
            </section>
            <section className="w-full gap-2 flex items-start justify-center  z-[9999999999] ">
                {searchResult ? (
                    <div className=" flex flex-col gap-4 justify-center w-full ">
                        {searchResult.map((song) => Result({ song }))}
                    </div>
                ) : (
                    <div className=" flex flex-col gap-4 justify-center min-w-full">
                        {[...Array(10)].map((_, i) => (
                            <div
                                key={`div ${i}`}
                                className="bg-opacity-50 rounded-md flex gap-2 shadow-md px-2 relative">
                                <Skeleton
                                    key={`skeleton image ${i}`}
                                    className="w-[68px] h-[68px] rounded-md"
                                />
                                <Skeleton
                                    key={`skeleton card ${i}`}
                                    className="w-full h-[68px] rounded-md bg-opacity-20"
                                />
                                <Skeleton
                                    key={`skeleton line ${i}`}
                                    className="w-[270px] md:lg:w-[300px] h-[20px] rounded-md absolute z-50 left-24 top-2"
                                />
                                <Skeleton
                                    key={`skeleton subtitle ${i}`}
                                    className="w-[200px] h-[20px] rounded-md absolute z-50 left-24 top-10"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </section>
            <footer className="sm:w-[60%] w-full h-20 mt-16 mb-12 m-auto px-2">
                <div className="w-full h-[80%] py-8  text-white  justify-center items-center bg-gray-800 bg-opacity-10 rounded-md p-2 flex gap-2">
                    <p>
                        Made with 💖 by{' '}
                        <a
                            href="https://github.com/Luqueee"
                            target="_blank"
                            className="font-extrabold hover:border-b-2 hover:border-b-white border-b-2 border-b-transparent transition-all duration-200">
                            Adria Cabrera Luque
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
};
