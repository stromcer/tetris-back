import React, { useEffect } from "react";

import useSounds from "../hooks/useSounds";

const SoundOptions = () => {
    const { volume ,musicPlaying ,handleVolume ,handleMusicPlaying, handlePlayBGMusic } = useSounds();

    useEffect(()=>{},[musicPlaying])

    return (
        <div>
            <div >
             <button onClick={handlePlayBGMusic}>{musicPlaying ? "PARAR" : "REPRODUCIR"}</button>
            </div>
            <div >
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