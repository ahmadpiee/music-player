import React, { useState, useRef } from "react";
import styled from "styled-components";

import { Player, Song, Library, Nav } from "../components";
import data from "../utils/data";

const MusicPlayer = () => {
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [libraryVisible, setLibraryVisible] = useState(false);
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
            <Nav
                libraryVisible={libraryVisible}
                setLibraryVisible={setLibraryVisible}
            />
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
                libraryVisible={libraryVisible}
            />
            <audio
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}
            ></audio>
        </Container>
    );
};

export default MusicPlayer;

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
    .toggle-library {
        transform: translateX(0%);
        opacity: 1;
    }
`;
