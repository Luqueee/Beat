import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect } from 'react';
import {
    CardPlayButtonSearch,
    CardPlayButtonPlayPlaylist,
} from './buttons/CardPlayButtonSearch';

import { useinputsSearch } from '@/store/playerStore';

export function getTimeSong(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours > 0 ? hours + 'h ' : ''}${remainingMinutes}m ${seconds}s`;
}

export const Result = ({ song }) => (
    console.log('Song:', song),
    (
        <article className="w-full group h-20 px-2 m-auto relative overflow-x-hidden backdrop-blur-sm">
            <a
                href={`/song/${song.id}`}
                class=" absolute w-full h-full z-10"></a>
            <div className=" bg-gray-800 bg-opacity-10 rounded-md p-2 flex gap-2 hover:bg-[#0e7139] shadow-md h-full">
                <section className="md:lg:w-[5%] w-[20%]">
                    <img
                        src={song.album.cover}
                        draggable="false"
                        className=" rounded-md shadow-md h-full w-full object-cover"
                    />
                </section>
                <section className=" w-[80%] md:lg:w-[95%] flex gap-2 flex-col relative">
                    <div className=" flex gap-4">
                        <section className=" flex flex-col gap-2 w-full overflow-x-hidden ">
                            <h1 className=" w-fit pr-4 md:lg:text-2xl text-xl font-bold z-50 hover:font-extrabold md:lg:hover:text-[1.6rem] hover:text-[1.3rem] hover:underline md:lg:hover:no-underline transition-all duration-300 truncate marquee">
                                <a
                                    href={`/song/${song.id}`}
                                    className=" z-50 py-4 w-full truncate">
                                    {song.title.length > 20
                                        ? `${song.title.slice(0, 20)}...`
                                        : song.title}
                                </a>
                            </h1>

                            <section className="flex flex-col gap-2">
                                <p className=" w-fit truncate">
                                    {song.artist.name}
                                    <span className=" ml-4 font-medium">
                                        {getTimeSong(song.duration)}
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
                        <CardPlayButtonSearch
                            id={song.id}
                            album_id="1"
                            title={song.title}
                            client:visible
                        />
                    </div>
                </section>
            </div>
        </article>
    )
);

export const ResultPlaylist = ({ song }) => (
    console.log('Song:', song),
    (
        <article className="w-full group">
            <div className=" bg-gray-800 bg-opacity-10 rounded-md p-2 flex gap-2 hover:bg-[#0e7139] shadow-md relative">
                <a
                    href="/"
                    className=" absolute w-full bg-blue h-20 top-0 mr-8 z-10"></a>
                <section className=" z-50">
                    <a href="/aa" className=" z-50">
                        <img
                            src={song.data_song.album.cover}
                            draggable="false"
                            className=" rounded-md shadow-md h-16 w-16 object-cover"
                        />
                    </a>
                </section>
                <section className=" w-full flex gap-2 flex-col relative">
                    <div className=" flex gap-4">
                        <section className=" flex flex-col gap-2">
                            <h1 className=" text-xl font-medium z-50 hover:font-bold hover:scale-110 hover:ml-2 transition-all duration-150">
                                <a
                                    href={`/song/${song.song_id}`}
                                    className=" z-50 py-4 pr-4">
                                    {song.data_song.title}
                                </a>
                            </h1>

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
                            className="z-50"
                            id={song.song_id}
                            album_id="1"
                            title={song.title}
                        />
                    </div>
                </section>
            </div>
        </article>
    )
);

export const SearchBar = () => {
    const { inputSearch, setInput } = useinputsSearch((state) => state);

    const [searchTerm, setSearchTerm] = useState(inputSearch);
    const [searchResult, setSearchResult] = useState([]);
    const [thumbnails, setThumbnails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = React.createRef();

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('Search term changed:', searchTerm, inputSearch);

            setIsLoading(true);
            fetch(`/api/music/search?song=${encodeURIComponent(inputSearch)}`)
                .then((res) => res.json())
                .then((data) => {
                    setSearchResult(data);
                });
        }, 300);

        return () => clearTimeout(timer);
    }, [inputSearch]);

    useEffect(() => {
        console.log('Search result:', searchResult);
        console.log('thumbnails:', thumbnails);
    }, [searchResult]);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
        setInput(e.target.value);
    };

    return (
        <div className=" w-full ">
            <section className=" sm:w-[60%] w-full m-auto gap-2 z-50 flex justify-center items-center  px-2">
                <div className=" flex-grow my-4">
                    <input
                        type="text"
                        name="searchbox"
                        id="searchbox"
                        className="w-full rounded-md bg-gray-800 bg-opacity-40 backdrop-blur-sm p-2 text-white text-xl"
                        placeholder="Type a song..."
                        value={inputSearch}
                        onChange={handleChange}
                        ref={inputRef}
                    />
                </div>
            </section>
            <section className=" sm:w-[60%] w-full m-auto h-[55vh] overflow-y-scroll">
                {!searchTerm == '' ? (
                    <div className=" flex flex-col gap-4 ">
                        {searchResult.map((song) => Result({ song }))}
                    </div>
                ) : (
                    [...Array(10)].map((_, i) => (
                        <article className="w-full group h-20">
                            <div className="bg-opacity-50 rounded-md flex gap-2 shadow-md px-2">
                                <section>
                                    <Skeleton
                                        key={i}
                                        className="w-[68px] h-[68px] rounded-md"
                                    />
                                </section>

                                <Skeleton
                                    key={i}
                                    className="w-full h-[68px] rounded-md"
                                />
                            </div>
                        </article>
                    ))
                )}
            </section>
        </div>
    );
};
