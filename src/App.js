import React, { useState, useRef } from "react";
import styled from "styled-components";

import { Player, Song, Library } from "./components";
import data from "./utils/data";

function App() {
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });

    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({ ...songInfo, currentTime: current, duration });
    };

    return (
        <Container>
            <Song currentSong={currentSong} />
            <Player
                audioRef={audioRef}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                currentSong={currentSong}
                setSongInfo={setSongInfo}
                songInfo={songInfo}
            />
            <Library
                audioRef={audioRef}
                songs={songs}
                setCurrentSong={setCurrentSong}
                isPlaying={isPlaying}
                setSongs={setSongs}
            />
            <audio
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}
            ></audio>
        </Container>
    );
}

export default App;

const Container = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
    h1,
    h2,
    h3,
    h4,
    h5,
    p {
        color: #464646;
    }
`;
