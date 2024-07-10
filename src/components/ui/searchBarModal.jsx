import { Skeleton } from '@/components/ui/skeleton';
import { useMusicStore } from '@/store/musicStore';
import React, { useEffect, useState } from 'react';
import { Result } from './searchBar';

export const SearchBar = () => {
    const { searching, setSearching } = useMusicStore((state) => state);
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
        setSearchTerm(e.target.value);
        localStorage.setItem('input', e.target.value);
    };

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
            <section className="w-full gap-2 flex items-start justify-center h-[75vh] z-[9999999999] mask_image overflow-y-scroll">
                {searchResult ? (
                    <div className=" flex flex-col gap-4 overflow-hidden  justify-center w-full">
                        {searchResult.map((song) => Result({ song }))}
                    </div>
                ) : (
                    <div className=" flex flex-col gap-4 overflow-hidden justify-center min-w-full">
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
                                    className="w-[70%] md:lg:w-[300px] h-[20px] rounded-md absolute z-50 left-24 top-2"
                                />
                                <Skeleton
                                    key={`skeleton subtitle ${i}`}
                                    className="w-[20%] h-[20px] rounded-md absolute z-50 left-24 top-10"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};
