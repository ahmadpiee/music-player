import React from "react";
import styled from "styled-components";
import { LibrarySongs, LineSeparator } from "..";

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
            <LineSeparator />
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
    scrollbar-width: thin;
    scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
    transform: translateX(-100%);
    opacity: 0;
    transition: all 0.5s ease;
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
    overflow: scroll;
    position: fixed;
    top: 0;
    left: 0;
    width: 20vmax;
    height: 100%;
    box-shadow: 2px 2px 10px #6a6a6a;
    padding-left: 2rem;
    padding-right: 2rem;
    h2 {
        text-align: center;
        margin: 2rem 0 1rem 0;
    }
    .selected {
        background: #cdfffc;
    }
`;
