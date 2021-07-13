import React from "react";
import styled from "styled-components";

const LibrarySongs = ({
    song,
    setCurrentSong,
    audioRef,
    isPlaying,
    songs,
    id,
    setSongs,
}) => {
    // select handler on library
    const songSelectHandler = async () => {
        const newSongs = await songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setCurrentSong(song);
        setSongs(newSongs);
    };
    if (isPlaying) audioRef.current.play();

    return (
        <Container>
            <div
                className={`song-container ${song.active ? "selected" : null}`}
                onClick={songSelectHandler}
            >
                <img alt={song.name} src={song.cover} />
                <div className="desc-container">
                    <h4>{song.name}</h4>
                    <h5>{song.artist}</h5>
                </div>
            </div>
        </Container>
    );
};

export default LibrarySongs;

const Container = styled.div`
    padding: 2rem 0 1rem 0;
    .song-container {
        cursor: pointer;
        display: flex;
        align-items: center;
        img {
            width: 10vmax;
            border-radius: 5px;
        }
        :hover {
            background: #e3fffd;
        }
        .desc-container {
            margin-left: 2rem;
            flex-direction: column;
            h4 {
                margin: 0 0 0 0;
                font-weight: bold;
                color: #888888;
            }
            h5 {
                margin: 8px 0 0 0;
                color: #888888;
            }
        }
    }
`;
