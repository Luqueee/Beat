import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';

function Video() {
    return (
        <div className=" w-full h-full  player-wrapper">
            <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=akW7qWS_p-g"
                width="100%"
                height="100%"
            />
        </div>
    );
}

export default Video;
