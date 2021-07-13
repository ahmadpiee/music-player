import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Nav = ({ libraryVisible, setLibraryVisible }) => {
    return (
        <Navbar>
            <div>
                <img src="../../assets/images/pentagram.png" alt="logo" />
                <h1>Metal Movement</h1>
            </div>
            <button onClick={() => setLibraryVisible(!libraryVisible)}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </Navbar>
    );
};

export default Nav;

const Navbar = styled.nav`
    padding: 1rem 3vmax 1.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    h1 {
        font-size: x-large;
    }
    img {
        margin-right: 1rem;
        height: 3rem;
    }
    button {
        @media screen and (max-width: 768px) {
            z-index: 10;
        }
        z-index: 1;
        font-size: medium;
        background: transparent;
        border: none;
        cursor: pointer;
        border: 2px solid #6d6d6d;
        padding: 1rem;
        border-radius: 5px;
        transition: all 0.5s ease;
        :hover {
            background: #c7c7c7;
            color: white;
        }
    }
`;
