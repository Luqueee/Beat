import React from 'react';
import { Image } from 'astro:assets';
import { useState, useEffect } from 'react';
import {
    CardPlayButtonSearch,
    CardPlayButtonPlayPlaylist,
} from './CardPlayButtonSearch';

export function getImg(thumbs, id) {
    console.log('Thumbs:', thumbs, id);
    return thumbs.find((t) => t.id == id).img;
}

export const Result = ({ song, thumbnails = '' }) => (
    <article className="w-full group">
        <div className=" bg-gray-800 bg-opacity-10 rounded-md p-2 flex gap-2 hover:bg-[#0e7139] shadow-md">
            <section>
                <img
                    src={
                        getImg(thumbnails, song.youtubeId) ??
                        `https://img.youtube.com/vi/${song.song_id}/mqdefault.jpg`
                    }
                    draggable="false"
                    className=" rounded-md shadow-md h-16 w-16 object-cover"
                />
            </section>
            <section className=" w-full flex gap-2 flex-col relative">
                <div className=" flex gap-4">
                    <section className=" flex flex-col gap-2">
                        <h1 className=" text-xl font-medium">{song.title}</h1>

                        <section className="flex flex-col gap-2">
                            <p className=" w-fit">
                                {song.artists
                                    .map((artist) => artist.name)
                                    .join(', ')}
                                <span className=" ml-4 font-medium">
                                    {song.duration.label}
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
                        id={song.youtubeId}
                        album_id="1"
                        title={song.title}
                        client:visible
                    />
                </div>
            </section>
        </div>
    </article>
);

export const ResultPlaylist = ({ song }) => (
    <article className="w-full group">
        <div className=" bg-gray-800 bg-opacity-10 rounded-md p-2 flex gap-2 hover:bg-[#0e7139] shadow-md relative">
            <a
                href="/"
                className=" absolute w-full bg-blue h-20 top-0 mr-8 z-10"></a>
            <section className=" z-50">
                <a href="/aa" className=" z-50">
                    <img
                        src={`https://img.youtube.com/vi/${song.song_id}/mqdefault.jpg`}
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
                                {song.data_song.artists
                                    .map((artist) => artist.name)
                                    .join(', ')}
                                <span className=" ml-4 font-medium">
                                    {song.data_song.duration.label}
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
                        id={song.youtubeId}
                        album_id="1"
                        title={song.title}
                        client:visible
                    />
                </div>
            </section>
        </div>
    </article>
);

export const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [thumbnails, setThumbnails] = useState([]);

    const inputRef = React.createRef();

    useEffect(() => {
        // Set a timer to wait for 500 milliseconds before applying the effect
        const timer = setTimeout(() => {
            // Here, you can perform any actions you want with the searchTerm variable
            console.log('Search term changed:', searchTerm);
            fetch(`/api/music/search?song=${encodeURIComponent(searchTerm)}`)
                .then((res) => res.json())
                .then((data) => {
                    setSearchResult(data);
                    const thumbs = data.map((song) => {
                        return {
                            id: song.youtubeId,
                            img: `https://img.youtube.com/vi/${song.youtubeId}/mqdefault.jpg`,
                        };
                    });
                    setThumbnails(thumbs);
                });
        }, 300);

        // Clear the timer on component unmount or when searchTerm changes

        return () => clearTimeout(timer);
    }, [searchTerm]);

    useEffect(() => {
        console.log('Search result:', searchResult);
        console.log('thumbnails:', thumbnails);
    }, [searchResult]);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    };

    return (
        <div className=" w-full px-4">
            <section className=" w-full gap-2 z-50 flex justify-center items-center">
                <div className=" flex-grow my-4">
                    <input
                        type="text"
                        name="searchbox"
                        id="searchbox"
                        className="w-full rounded-md bg-gray-800 p-2 text-white"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleChange}
                        ref={inputRef}
                    />
                </div>
            </section>
            <section>
                {!searchResult.length == 0 ? (
                    <div className=" flex flex-col gap-2">
                        {searchResult.map((song) =>
                            Result({ song, thumbnails })
                        )}
                    </div>
                ) : (
                    <p>Buscando...</p>
                )}
            </section>
        </div>
    );
};
