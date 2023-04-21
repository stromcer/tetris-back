import React, { useEffect } from "react";
import UseAnimations from "react-useanimations";
import volumeAn from "react-useanimations/lib/volume";

import useSounds from "../hooks/useSounds";

const SoundOptions = () => {
    const { volume ,musicPlaying ,handleVolume ,handleMusicPlaying, handlePlayBGMusic } = useSounds();


    return (
        <div>
            <div >
                <button>
                { musicPlaying 
                ? "Parar"
                : "Reproducir" }
             </button>
            </div>
            <div >
            <UseAnimations  animation={volumeAn} size={56} />
                <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={event => handleVolume(event.target.valueAsNumber)}
                />
            </div>
        </div>)
}

export default SoundOptions;