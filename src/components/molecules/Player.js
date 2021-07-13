import React, { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faAngleLeft,
    faAngleRight,
    faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
    audioRef,
    songInfo,
    setSongInfo,
    isPlaying,
    setIsPlaying,
    setCurrentSong,
    songs,
    setSongs,
    currentSong,
}) => {
    // set selected song handler
    useEffect(() => {
        const newSongs = songs.map((songData) => {
            if (songData.id === currentSong.id) {
                return {
                    ...songData,
                    active: true,
                };
            } else {
                return {
                    ...songData,
                    active: false,
                };
            }
        });
        setSongs(newSongs);
    }, [currentSong]);

    // configuration of duration
    const getTime = (time) => {
        return (
            Math.floor(time / 60) +
            ":" +
            ("0" + Math.floor(time % 60)).slice(-2)
        );
    };
    const dragHandler = async (e) => {
        audioRef.current.currentTime = e.target.value;
        await setSongInfo({ ...songInfo, currentTime: e.target.value });
    };

    // skip back and skip forward handler
    const skipNextSong = async (direction) => {
        const currentIndex = await songs.findIndex(
            (song) => song.id === currentSong.id
        );
        if (direction === "skip-forward") {
            setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        }
        if (direction === "skip-back") {
            if ((currentIndex - 1) % songs.length === -1) {
                setCurrentSong(songs[songs.length - 1]);
                if (isPlaying) audioRef.current.play();
                return;
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        }
        if (isPlaying) audioRef.current.play();
    };

    // play button handler
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };
    // styling line duration
    const animateTrack = {
        transform: `translateX(${songInfo.animationPercentage}%)`,
    };
    // end
    return (
        <Container>
            <TimeControl>
                <p>{getTime(songInfo.currentTime)}</p>
                <div
                    style={{
                        background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
                    }}
                    className="track"
                >
                    <input
                        onChange={dragHandler}
                        min={0}
                        max={songInfo.duration || 0}
                        value={songInfo.currentTime}
                        type="range"
                    />
                    <div style={animateTrack} className="animate-track"></div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </TimeControl>
            <PlayControl>
                <FontAwesomeIcon
                    onClick={() => skipNextSong("skip-back")}
                    size="2x"
                    className="skip-back"
                    icon={faAngleLeft}
                />
                <FontAwesomeIcon
                    onClick={playSongHandler}
                    size="2x"
                    className="play"
                    icon={isPlaying ? faPause : faPlay}
                />
                <FontAwesomeIcon
                    onClick={() => skipNextSong("skip-forward")}
                    size="2x"
                    className="skip-forward"
                    icon={faAngleRight}
                />
            </PlayControl>
        </Container>
    );
};

export default Player;

const Container = styled.div`
    min-height: 18vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
`;
const TimeControl = styled.div`
    @media screen and (max-width: 768px) {
        width: 90%;
    }
    display: flex;
    width: 50%;
    input {
        width: 100%;
        cursor: pointer;
        -webkit-appearance: none;
        background-color: transparent;
        outline: none;
    }
    .track {
        background: lightblue;
        display: flex;
        align-self: center;
        width: 100%;
        height: 1rem;
        position: relative;
        border-radius: 1rem;
        overflow: hidden;
    }
    .animate-track {
        background: rgb(204, 204, 204);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(0%);
        pointer-events: none;
    }
    input[type="range"]:focus {
        outline: none;
    }
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 16px;
        height: 16px;
    }
    p {
        padding: 1rem;
    }
`;
const PlayControl = styled.div`
    @media screen and (max-width: 768px) {
        width: 60%;
    }
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: 30%;
    svg {
        cursor: pointer;
    }
`;
