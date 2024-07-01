import { Skeleton } from '@/components/ui/skeleton';
import React, { useEffect, useState } from 'react';

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
    console.log('Song:', song);
    const handleClick = () => {
        window.location.href = `/song/${song.id}`;
    };

    return (
        <button
            onClick={handleClick}
            key={`result line ${song.id}`}
            className="w-full group h-20 px-2 z-[999999999] relative rounded-md overflow-hidden backdrop-blur-sm isolate">
            <div className="bg-gray-800 bg-opacity-10 rounded-md p-2 flex gap-2 w-full shadow-md h-full">
                <section className="min-w-16 min-h-16">
                    <img
                        alt={song.title}
                        src={song.album.cover}
                        decoding="async"
                        draggable="false"
                        loading="lazy"
                        className="rounded-md shadow-md h-full w-full object-cover"
                    />
                </section>
                <section className="flex-grow flex gap-2 flex-col relative">
                    <div className="flex gap-4">
                        <section className="flex flex-col gap-2 w-full overflow-x-hidden">
                            <h1 className="w-fit pr-4 md:lg:text-2xl text-xl font-bold z-50 hover:font-extrabold md:lg:hover:text-[1.6rem] hover:text-[1.3rem] hover:underline md:lg:hover:no-underline transition-all duration-300 truncate marquee">
                                <span className="block md:lg:hidden">
                                    <a
                                        href={`/song/${song.id}`}
                                        className="z-50 py-4 w-full truncate">
                                        {song.title.length > 20
                                            ? `${song.title.slice(0, 20)}...`
                                            : song.title}
                                    </a>
                                </span>
                                <span className="hidden md:lg:block">
                                    <a
                                        href={`/song/${song.id}`}
                                        className="z-50 py-4 w-full truncate">
                                        {song.title.length > 40
                                            ? `${song.title.slice(0, 40)}...`
                                            : song.title}
                                    </a>
                                </span>
                            </h1>

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
                        className={`absolute right-4 bottom-3 translate-y-2
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
    //console.log('Song:', song),
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

    useEffect(() => {
        const timer = setTimeout(() => {
            //console.log('Search term changed:', searchTerm, inputSearch);

            fetch(`/api/music/search?song=${encodeURIComponent(searchTerm)}`)
                .then((res) => res.json())
                .then((data) => {
                    //console.log('Search result:', data);
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

    const handleFocus = () => {
        setWriting(true);
    };
    const handleBlur = () => {
        setWriting(false);
    };

    return (
        <div className=" w-full overflow-hidden flex flex-col justify-center mb-8 px-6">
            <section className=" w-full lg:w-[60%] md:w-[80%] m-auto gap-2 z-50 flex justify-center items-center  px-2">
                <div className=" flex-grow my-4">
                    <input
                        type="text"
                        name="searchbox"
                        id="searchbox"
                        className="w-full rounded-md border-none ring-0 bg-gray-800 bg-opacity-40 backdrop-blur-sm p-2 text-white text-xl"
                        placeholder="Type a song..."
                        value={searchTerm || ''}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        ref={inputRef}
                    />
                </div>
            </section>
            <section className=" w-full lg:w-[60%] md:w-[80%] m-auto overflow-hidden">
                {searchResult ? (
                    <div className=" flex flex-col gap-4 overflow-hidden">
                        {searchResult.map((song) => Result({ song }))}
                    </div>
                ) : (
                    [...Array(5)].map((_, i) => (
                        <article
                            key={`article ${i}`}
                            className="w-full group h-20">
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
                                    className="w-[300px] h-[20px] rounded-md absolute z-50 left-24 top-2"
                                />
                                <Skeleton
                                    key={`skeleton subtitle ${i}`}
                                    className="w-[200px] h-[20px] rounded-md absolute z-50 left-24 top-10"
                                />
                            </div>
                        </article>
                    ))
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
