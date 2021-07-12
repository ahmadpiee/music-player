import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Nav = ({ libraryVisible, setLibraryVisible }) => {
    return (
        <Navbar>
            <h1>Metal Records</h1>
            <button onClick={() => setLibraryVisible(!libraryVisible)}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </Navbar>
    );
};

export default Nav;

const Navbar = styled.nav`
    min-height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    h1 {
        font-size: xx-large;
    }
    button {
        font-size: medium;
        background: transparent;
        border: none;
        cursor: pointer;
        border: 2px solid #6d6d6d;
        padding: 1rem;
        border-radius: 5px;
        transition: all 0.5s ease;
        :hover {
            background: #6d6d6d;
            color: white;
        }
    }
`;
