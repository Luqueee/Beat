import Marquee from '@/components/magicui/marquee';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Skeleton } from './skeleton';
const ReviewCard = ({ id, author_image, title, position, author }) => {
    return (
        <button
            className={cn(
                'relative min-w-72 bg-zinc-800 bg-opacity-50  w-fit cursor-pointer overflow-hidden rounded-xl p-4 backdrop-blur-sm shadow-md group text-8xl hover:text-[115px] text-zinc-800/80 hover:text-zinc-800 transition-all duration-200 ease-in-out hover:overflow-visible min-h-20 hover:shadow-lg'
            )}
            onClick={() => {
                window.location.href = `/song/${id}`;
            }}>
            <div className=" flex items-center min-w-44">
                {author_image ? (
                    <img
                        className="rounded-full shadow-md shadow-slate-900"
                        width={42}
                        height={42}
                        alt={id}
                        loading="lazy"
                        decoding="async"
                        src={author_image} // Provide a default image URL if author_image is not valid
                    />
                ) : (
                    ''
                )}
                <div className="flex flex-col gap-2 ml-2">
                    <a
                        href={`/song/${id}`}
                        className="text-[16px] block font-extrabold hover:text-mdtext-white text-white/60 z-10 ">
                        {title}
                    </a>

                    <p className="text-xs text-start font-normal text-white/40">
                        {author}
                    </p>

                    <p className=" font-extrabold absolute -bottom-[28px] text-white/70 -right-0 -z-20">
                        {position}
                    </p>
                </div>
            </div>
        </button>
    );
};

const ReviewCardSkeleton = ({ id }) => {
    return (
        <div
            className={cn(
                'relative min-w-72 bg-zinc-800 bg-opacity-50  w-fit cursor-pointer overflow-hidden rounded-xl p-4 backdrop-blur-sm shadow-md group text-8xl hover:text-[115px] text-zinc-800/80 hover:text-zinc-800 transition-all duration-200 ease-in-out hover:overflow-visible min-h-20 hover:shadow-lg'
            )}>
            <div className="flex flex-row items-center gap-2 pl-2 pr-6 min-w-64 ">
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

const MarqueeChartSongs = () => {
    const [charts, setCharts] = useState(null);

    useEffect(() => {
        fetch('/api/music/charts')
            .then((res) => res.json())
            .then((data) => {
                //console.log('aaaaaaaaa', data);
                setCharts(data.tracks.data);
            });

        ////console.log(window.innerWidth);
    }, []);

    return (
        <div className="relative flex h-full flex-col items-center justify-center overflow-hidden py-12 min-w-full border-transparent">
            <div className="">
                <Marquee pauseOnHover className="[--duration:1s]">
                    {charts
                        ? charts
                              .slice(0, charts.length / 2)
                              .map((review) => (
                                  <ReviewCard
                                      key={review.id}
                                      id={review.id}
                                      author_image={review.artist.picture_small}
                                      title={review.title}
                                      author={review.artist.name}
                                      position={review.position}
                                  />
                              ))
                        : [...Array(4)].map((_, i) => (
                              <ReviewCardSkeleton key={i} />
                          ))}
                </Marquee>

                <Marquee reverse pauseOnHover className="[--duration:5s]">
                    {charts
                        ? charts
                              .slice(charts.length / 2)
                              .map((review) => (
                                  <ReviewCard
                                      key={review.id}
                                      id={`${review.id}`}
                                      author_image={review.artist.picture_small}
                                      title={review.title}
                                      author={review.artist.name}
                                      position={review.position}
                                  />
                              ))
                        : [...Array(4)].map((_, i) => (
                              <ReviewCardSkeleton key={`${i}`} />
                          ))}
                </Marquee>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-zinc-900"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-zinc-900"></div>
        </div>
    );
};

export default MarqueeChartSongs;

export const MarqueeChartSongsVertical = () => {
    const [charts, setCharts] = useState(null);

    useEffect(() => {
        fetch('/api/music/charts')
            .then((res) => res.json())
            .then((data) => {
                ////console.log(data);
                setCharts(data.tracks.data);
            });

        ////console.log(window.innerWidth);
    }, []);

    return (
        <div className="flex h-full flex-row items-center justify-center overflow-hidden -z-1 border-transparent absolute top-0 left-[70vw]">
            <Marquee pauseOnHover vertical className="[--duration:0s]">
                {charts
                    ? charts
                          .slice(0, charts.length / 2)
                          .map((review) => (
                              <ReviewCard
                                  key={review.id}
                                  id={review.id}
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

            <Marquee reverse vertical pauseOnHover className="[--duration:0s]">
                {charts
                    ? charts
                          .slice(charts.length / 2)
                          .map((review) => (
                              <ReviewCard
                                  key={review.id}
                                  id={`${review.id}`}
                                  author_image={review.artist.picture}
                                  title={review.title}
                                  author={review.artist.name}
                                  position={review.position}
                              />
                          ))
                    : [...Array(4)].map((_, i) => (
                          <ReviewCardSkeleton key={`${i}`} />
                      ))}
            </Marquee>
        </div>
    );
};

export const MarqueeChartSongsIndividual = () => {
    const [charts, setCharts] = useState(null);

    useEffect(() => {
        fetch('/api/music/charts')
            .then((res) => res.json())
            .then((data) => {
                ////console.log(data);
                setCharts(data.tracks.data);
            });

        ////console.log(window.innerWidth);
    }, []);

    return (
        <div className="relative flex h-full flex-col items-center justify-center overflow-hidden py-2 min-w-full border-transparent z-50">
            <Marquee pauseOnHover className="[--duration:1s]">
                {charts
                    ? charts.map((review) => (
                          <ReviewCard
                              key={review.id}
                              id={review.id}
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
        </div>
    );
};
