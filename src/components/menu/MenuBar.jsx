import { FavoriteFilled } from '@/components/songBar';
import { useEffect, useState } from 'react';
import { SearchBar } from '../ui/searchBarModal';

export const Home = () => {
    return (
        <svg
            role="img"
            height="24"
            width="24"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor">
            <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path>
        </svg>
    );
};

export const Profile = () => {
    return (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-user">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
        </svg>
    );
};

export const Screen = () => {
    return (
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
            className="icon icon-tabler icons-tabler-outline text-white icon-tabler-device-tv">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
            <path d="M16 3l-4 4l-4 -4"></path>
        </svg>
    );
};

export const MenuIcon = () => {
    return (
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
            class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6h16" />
            <path d="M7 12h13" />
            <path d="M10 18h10" />
        </svg>
    );
};

export const CerrarIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="icon icon-tabler icons-tabler-filled icon-tabler-square-x">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19 2h-14a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-14a3 3 0 0 0 -3 -3zm-9.387 6.21l.094 .083l2.293 2.292l2.293 -2.292a1 1 0 0 1 1.497 1.32l-.083 .094l-2.292 2.293l2.292 2.293a1 1 0 0 1 -1.32 1.497l-.094 -.083l-2.293 -2.292l-2.293 2.292a1 1 0 0 1 -1.497 -1.32l.083 -.094l2.292 -2.293l-2.292 -2.293a1 1 0 0 1 1.32 -1.497z" />
        </svg>
    );
};

export const SearchIcon = () => {
    return (
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-search">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
        </svg>
    );
};

export default function MenuBar() {
    const [hidden, setHidden] = useState(false);
    const [searchModal, setSearchModal] = useState(false);

    useEffect(() => {
        setHidden(false);
    }, []);

    const handleMenu = () => {
        setHidden(!hidden);
    };

    const handleSearch = () => {
        setHidden(false);
        setSearchModal(!searchModal);
    };

    return (
        <div className="fixed right-0 top-0 flex w-full z-[9999999] justify-center">
            <div className="w-full h-full flex bg-zinc-900 bg-opacity-5 justify-between backdrop-blur-sm z-[999999] items-center py-4 gap-4 md:lg:px-8 px-3 isolate ring-2 shadow-lg ring-zinc-900 ring-opacity-10">
                <a
                    href="/"
                    className="border-0 border-b-2 border-transparent hover:border-white transition-all duration-100 h-full text-4xl font-bold items-center block">
                    Beat
                </a>
                <div
                    className={
                        !hidden
                            ? 'w-fit px-2 ml-auto flex gap-2 text-white md:lg:gap-4'
                            : 'min-w-screen min-h-[100vh] inset-0 absolute px-2 flex bg-zinc-900 bg-opacity-70 backdrop-blur-md z-50 justify-center items-center gap-2 text-white md:lg:gap-4 transition-all duration-300'
                    }>
                    <div
                        className={` ${hidden ? 'flex' : 'hidden md:lg:flex'} w-fit gap-2 `}>
                        <a
                            href="/"
                            className="w-12 h-12 rounded-full hover:bg-zinc-900 border-2 transition-all duration-200 flex justify-center items-center text-white">
                            <Home />
                        </a>
                        <a
                            href="/favs"
                            className="w-12 h-12 rounded-full hover:bg-zinc-900 border-2 transition-all duration-200 flex justify-center items-center text-white">
                            <FavoriteFilled />
                        </a>
                        <a
                            href="/player"
                            className="w-12 h-12 rounded-full hover:bg-zinc-900 border-2 transition-all duration-200 flex justify-center items-center text-white">
                            <Screen />
                        </a>
                        <a
                            href="/profile"
                            className="w-12 h-12 rounded-full hover:bg-zinc-900 border-2 transition-all duration-200 flex justify-center items-center text-white">
                            <Profile />
                        </a>

                        <button
                            onClick={handleSearch}
                            className={`z-50 w-12 h-12 rounded-full ${!searchModal ? '' : 'bg-red-500 hover:bg-red-900 '} border-2 transition-all duration-500 flex justify-center items-center text-white`}>
                            <SearchIcon />
                        </button>
                    </div>

                    <div
                        className={`${!searchModal ? 'hidden' : 'block'} min-w-screen min-h-screen fixed inset-0 flex justify-center items-center bg-zinc-900 bg-opacity-80 backdrop-blur-xl`}>
                        <button
                            className=" min-w-full min-h-full z-50 inset-0 flex cursor-default justify-center items-center fixed"
                            onClick={handleSearch}></button>
                        {searchModal ? <SearchBar /> : ''}
                    </div>

                    <button
                        onClick={handleSearch}
                        className={` ${hidden ? 'hidden' : 'md:lg:hidden block '}  z-50 w-12 h-12 rounded-full transition-all duration-200 flex justify-center items-center text-white`}>
                        <SearchIcon />
                    </button>

                    <button
                        onClick={handleMenu}
                        className={` ${hidden ? 'md:lg:block hidden' : 'md:lg:hidden block'} border-b-2 border-transparent hover:border-white transition-all duration-200`}>
                        <MenuIcon />
                    </button>

                    <button
                        onClick={handleMenu}
                        className={` ${hidden ? 'block' : 'hidden'} w-12 h-12 rounded-full bg-red-500 hover:bg-zinc-800 transition-all duration-200 flex justify-center items-center text-white`}>
                        X
                    </button>
                </div>
                <div></div>
            </div>
        </div>
    );
}
