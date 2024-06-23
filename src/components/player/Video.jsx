import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useLofiStore } from '@/store/musicStore';

export default function Video() {
    const { playing, url, volume, setPlaying, setUrl, setVolume } =
        useLofiStore((state) => state);

    useEffect(() => {
        const detectKeyDown = (e) => {
            e.preventDefault();
            if (e.key === ' ') {
                if (playing == true) {
                    setPlaying(false);
                } else if (playing == false) {
                    setPlaying(true);
                }
                console.log(playing);
            }
        };
        document.addEventListener('keydown', detectKeyDown, true);
    }, []);

    return (
        <div className=" w-full h-full  player-wrapper">
            <ReactPlayer
                playing={playing}
                volume={volume}
                controls={false}
                className="react-player"
                url={url}
                width="100%"
                height="100%"
            />
        </div>
    );
}
