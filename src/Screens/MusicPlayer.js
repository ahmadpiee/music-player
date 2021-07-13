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
        animationPercentage: 0,
    });
    const songAutoSkipHandler = async () => {
        const currentIndex = songs.findIndex(
            (song) => song.id === currentSong.id
        );
        setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        if (isPlaying) await audioRef.current.play();
    };
    const timeUpdateHandler = async (e) => {
        const current = await e.target.currentTime;
        const duration = e.target.duration;
        // percentage of duration
        const roundedCurrent = Math.round(current);
        const roundedDuration = Math.round(duration);
        const animation = Math.round((roundedCurrent / roundedDuration) * 100);
        setSongInfo({
            ...songInfo,
            currentTime: current,
            duration,
            animationPercentage: animation,
        });
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
                songs={songs}
                setCurrentSong={setCurrentSong}
                setSongs={setSongs}
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
                onEnded={songAutoSkipHandler}
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
    text,
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
