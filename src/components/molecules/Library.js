import React from "react";
import styled from "styled-components";
import { LibrarySongs } from "..";

const Library = ({
    audioRef,
    songs,
    setCurrentSong,
    isPlaying,
    setSongs,
    libraryVisible,
}) => {
    return (
        <Container className={libraryVisible ? "toggle-library" : ""}>
            <h2>Library</h2>
            {songs.map((song) => (
                <LibrarySongs
                    songs={songs}
                    song={song}
                    setCurrentSong={setCurrentSong}
                    id={song.id}
                    key={song.id}
                    audioRef={audioRef}
                    isPlaying={isPlaying}
                    setSongs={setSongs}
                />
            ))}
        </Container>
    );
};

export default Library;

const Container = styled.div`
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    scrollbar-width: thin;
    scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
    transform: translateX(-100%);
    transition: all 0.5s ease;
    background-color: white;
    overflow: scroll;
    position: fixed;
    top: 0;
    left: 0;
    width: 25vmax;
    height: 100%;
    box-shadow: 2px 2px 10px #6a6a6a;
    padding: 0 1rem 0 1rem;
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(155, 155, 155, 0.5);
        border-radius: 20px;
        border: transparent;
    }
    h2 {
        text-align: start;
        margin: 2rem 0 1rem 0;
    }
    .selected {
        background: #cdfffc;
    }
`;
