import React from "react";
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
}) => {
    const getTime = (time) => {
        return (
            Math.floor(time / 60) +
            ":" +
            ("0" + Math.floor(time % 60)).slice(-2)
        );
    };

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value });
    };

    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <Container>
            <TimeControl>
                <p>{getTime(songInfo.currentTime)}</p>
                <input
                    onChange={dragHandler}
                    min={0}
                    max={songInfo.duration}
                    value={songInfo.currentTime}
                    type="range"
                />
                <p>{getTime(songInfo.duration)}</p>
            </TimeControl>
            <PlayControl>
                <FontAwesomeIcon
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
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
const TimeControl = styled.div`
    width: 50%;
    display: flex;
    input {
        width: 100%;
        padding: 1rem 0rem;
    }
    p {
        padding: 1rem;
    }
`;
const PlayControl = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: 30%;
    svg {
        cursor: pointer;
    }
`;
