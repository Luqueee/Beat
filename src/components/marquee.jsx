import { cn } from '@/lib/utils';
import Marquee from '@/components/magicui/marquee';
import { useEffect, useState } from 'react';

const ReviewCard = ({
    id,
    author_image,
    title,
    duration,
    album_title,
    author,
}) => {
    return (
        <figure
            className={cn(
                'relative w-fit cursor-pointer overflow-hidden rounded-xl border p-4 backdrop-blur-sm',
                // light styles
                'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
                // dark styles
                'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
            )}>
            <div className="flex flex-row items-center gap-2 ">
                <img
                    className="rounded-full"
                    width="32"
                    height="32"
                    alt=""
                    src={author_image}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {title} - {author}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">
                        {album_title} - {duration}
                    </p>
                </div>
            </div>
        </figure>
    );
};

const MarqueeDemo = () => {
    const [charts, setCharts] = useState([]);

    useEffect(() => {
        const fetchCharts = async () => {
            const res = await fetch('/api/music/charts');
            const data = await res.json();
            console.log(data);
            setCharts(data.albums.data);
        };
        fetchCharts();
    }, []);

    return (
        <div className="relative flex h-full flex-col items-center justify-center overflow-hidden py-20 w-[100vw] border-transparent">
            <Marquee pauseOnHover className="[--duration:20s]">
                {charts &&
                    charts
                        .slice(0, charts.length / 2)
                        .map(
                            (review) => (
                                console.log(review),
                                (
                                    <ReviewCard
                                        key={review.id}
                                        id={review.id}
                                        author_image={review.artist.picture}
                                        title={review.title}
                                        duration={review.duration}
                                        author={review.artist.name}
                                    />
                                )
                            )
                        )}
            </Marquee>

            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {charts
                    .slice(charts.length / 2)
                    .map(
                        (review) => (
                            console.log(review),
                            (
                                <ReviewCard
                                    key={review.id}
                                    id={review.id}
                                    author_image={review.artist.picture}
                                    title={review.title}
                                    duration={review.duration}
                                    author={review.artist.name}
                                />
                            )
                        )
                    )}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-zinc-900"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-zinc-900"></div>
        </div>
    );
};

export default MarqueeDemo;
