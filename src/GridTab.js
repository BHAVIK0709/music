import React from "react";
import Diamond from "./alexander-shatov-qt7S2QuAhJI-unsplash.jpg";
import { useDispatch } from "react-redux";
import { playAudio } from "./redux/musicReducer";

function GridTab({ res }) {
    const disptach = useDispatch();
    return (
        <div
            className="item"
            onClick={() => {
                disptach(playAudio(res));
            }}
        >
            <div className="cover">
                <img src={Diamond} alt="Album Cover" />
                <div className="overlay">
                    <button className="play-btn">
                        <i className="fa fa-play"></i>
                    </button>
                </div>
            </div>
            <div className="title">Sone 1</div>
            <div className="artist">Artist 1</div>
        </div>
    );
}

export default GridTab;
