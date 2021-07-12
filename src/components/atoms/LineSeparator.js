import React from "react";
import styled from "styled-components";

export default function LineSeparator() {
    return <Separator />;
}

const Separator = styled.div`
    display: flex;
    height: 1px;
    width: 100%;
    background-color: #a2a2a2;
`;
