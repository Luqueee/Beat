import { cn } from '@/lib/utils';
import Marquee from '@/components/magicui/marquee';
import { useEffect, useState } from 'react';
import { Skeleton } from './skeleton';
const ReviewCard = ({ id, author_image, title, position, author }) => {
    return (
        <div
            className={cn(
                'relative w-fit cursor-pointer overflow-hidden rounded-xl p-4 backdrop-blur-sm  shadow-md group text-8xl hover:text-[115px] transition-all duration-200 ease-in-out hover:overflow-visible min-h-18 hover:shadow-lg',
                // light styles
                'border-gray-950/[.1] bg-zinc-600   hover:bg-gray-700',
                // dark styles
                'dark:border-gray-50/[.1] dark:bg-zinc-600  dark:hover:bg-gray-500/80 '
            )}>
            <a
                href={`/song/${id}`}
                className="flex flex-row items-center gap-2  pl-2 pr-6 min-w-64 ">
                <img
                    className="rounded-full"
                    width="32"
                    height="32"
                    alt=""
                    src={author_image}
                />
                <div className="flex flex-row">
                    <div className=" w-full">
                        <h1 className=" text-[16px] font-extrabold dark:text-white z-10 ">
                            <a
                                href={`/song/${id}`}
                                className="text-[16px] font-extrabold hover:text-md">
                                {title}
                            </a>
                        </h1>
                        <p className="text-xs font-normal dark:text-white/40">
                            {author}
                        </p>
                    </div>

                    <p className=" font-extrabold dark:text-zinc-800/80 absolute -bottom-[28px]  -right-0 -z-20">
                        {position}
                    </p>
                </div>
            </a>
        </div>
    );
};

const ReviewCardSkeleton = ({ id }) => {
    return (
        <div
            className={cn(
                'relative w-fit cursor-pointer overflow-hidden rounded-xl p-4 backdrop-blur-sm  shadow-md group text-8xl  transition-all duration-200 ease-in-out  min-h-18'
            )}>
            <div className="flex flex-row items-center gap-2  pl-2 pr-6 min-w-64 ">
                <Skeleton key={id} className="w-[32px] h-[32px] rounded-md" />
                <div className="flex flex-row">
                    <Skeleton
                        key={id}
                        className="w-[400px] h-[200px] rounded-md absolute top-0 left-0 opacity-50"
                    />
                    <Skeleton
                        key={id}
                        className="w-[200px] h-[10px] rounded-md absolute top-4 left-15"
                    />
                    <Skeleton
                        key={id}
                        className="w-[200px] h-[8px] rounded-md absolute top-8 left-15"
                    />
                </div>
            </div>
        </div>
    );
};

const MarqueeDemo = () => {
    const [charts, setCharts] = useState(null);

    useEffect(() => {
        fetch('/api/music/charts')
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                setCharts(data.tracks.data);
            });

        //console.log(window.innerWidth);
    }, []);

    return (
        <div className="relative flex h-full flex-col items-center justify-center overflow-hidden py-24 min-w-full border-transparent">
            <div className=" block">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {charts
                        ? charts.slice(0, charts.length / 2).map((review) => (
                              //console.log(review),
                              <ReviewCard
                                  key={review.id}
                                  author_image={review.artist.picture}
                                  title={review.title}
                                  author={review.artist.name}
                                  position={review.position}
                              />
                          ))
                        : [...Array(4)].map((_, i) => (
                              <ReviewCardSkeleton key={i} />
                          ))}
                </Marquee>

                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {charts
                        ? charts.slice(charts.length / 2).map((review) => (
                              //console.log(review),
                              <ReviewCard
                                  key={`a${review.id}`}
                                  author_image={review.artist.picture}
                                  title={review.title}
                                  author={review.artist.name}
                                  position={review.position}
                              />
                          ))
                        : [...Array(4)].map((_, i) => (
                              <ReviewCardSkeleton key={`a${i}`} />
                          ))}
                </Marquee>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-zinc-900"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-zinc-900"></div>
        </div>
    );
};

export default MarqueeDemo;
