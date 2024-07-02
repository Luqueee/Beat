import { Button } from '@/components/ui/button';
import { useMusicStore } from '@/store/musicStore';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRef } from 'react';
import { Volume, VolumeSilence } from '../songBar';
import { Slider } from '../ui/slider';

export function DropdownVolume() {
    const volume = useMusicStore((state) => state.volume);
    const setVolume = useMusicStore((state) => state.setVolume);
    const previousVolumeRef = useRef(volume);
    const isVolumeSilenced = volume < 0.05;

    const handleClickVolumen = () => {
        if (isVolumeSilenced) {
            setVolume(previousVolumeRef.current);
        } else {
            previousVolumeRef.current = volume;
            setVolume(0);
        }
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                    {isVolumeSilenced ? <VolumeSilence /> : <Volume />}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex justify-center gap-2 bg-transparent z-[9999999]">
                <button
                    className="opacity-70 hover:opacity-100 transition"
                    name="volume-button"
                    onClick={handleClickVolumen}>
                    {isVolumeSilenced ? <VolumeSilence /> : <Volume />}
                </button>
                <Slider
                    defaultValue={[100]}
                    max={100}
                    min={0}
                    value={[volume * 100]}
                    className="w-[95px] py-2 z-[9999999]"
                    onValueChange={(value) => {
                        const [newVolume] = value;
                        const volumeValue = newVolume / 100;
                        setVolume(volumeValue);
                    }}
                />
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
