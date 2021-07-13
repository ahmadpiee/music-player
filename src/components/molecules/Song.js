import React from "react";
import styled from "styled-components";

const Song = ({ currentSong }) => {
    return (
        <Container>
            <img alt={currentSong.name} src={currentSong.cover} />
            <h1>{currentSong.name}</h1>
            <h2>{currentSong.artist}</h2>
        </Container>
    );
};

export default Song;

const Container = styled.div`
    min-height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        @media screen and (max-width: 768px) {
            width: 40vmax;
            height: 40vmax;
        }
        height: 18vmax;
        width: 18vmax;
        border-radius: 50%;
    }
    h1 {
        font-size: xx-large;
        margin-top: 2rem;
        font-weight: bold;
    }
    h2 {
        font-size: larger;
        margin-top: 0;
    }
`;
