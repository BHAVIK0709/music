import backgroundMusic from "./songss.mp3";
import React, { useState, useEffect } from "react";
import "./MusicTab.css";
import { useSelector } from "react-redux";

function MusicTab() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [volume, setVolume] = useState(50);
    const [progress, setProgress] = useState(0);
    const [song, setSong] = useState({
        title: "Test Song",
        artist: "Test Artist",
        duration: 180,
    });
    const { src } = useSelector((state) => state.counter);

    function handlePlayPause() {
        setIsPlaying(!isPlaying);
    }

    function handleVolumeChange(e) {
        setVolume(e.target.value);
    }

    function handleProgressChange(e) {
        setProgress(e.target.value);
    }

    useEffect(() => {
        // const audio = new Audio(backgroundMusic);
        const audio = new Audio(src);

        audio.loop = true;
        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
        return () => {
            audio.pause();
        };
    }, [isPlaying, src]);

    return (
        <>
            {src !== "" ? (
                <div className="music-tab">
                    <div className="music-tab-header">
                        <span className="music-tab-title">{song.title}</span>
                        <span className="music-tab-artist">{song.artist}</span>
                        <button className="music-tab-close">&times;</button>
                    </div>
                    <div className="music-tab-body">
                        <div className="music-tab-cover"></div>
                        <div className="music-tab-controls">
                            <button
                                className="music-tab-play-pause"
                                onClick={handlePlayPause}
                            >
                                {isPlaying ? "Pause" : "Play"}
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
}

export default MusicTab;
