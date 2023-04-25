import React from "react";
import "./Home.css";
import GridTab from "./GridTab";
import a1 from "../src/asset/a1.mp3";
import a2 from "../src/asset/a2.mp3";
import a3 from "../src/asset/a3.mp3";
import a4 from "../src/asset/a4.mp3";
import a5 from "../src/asset/a5.mp3";
function Home() {
    const music = [a1, a2, a3, a4, a5];
    return (
        <div className="music-player">
            <div className="grid">
                {music.map((res) => (
                    <GridTab res={res} />
                ))}
            </div>
        </div>
    );
}

export default Home;
