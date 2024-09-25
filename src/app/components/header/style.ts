 "use client";
import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    background: #e6e8e6;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Rubik', sans-serif;
    z-index: 10;
    img { 
        width: 168px;
        height: auto;
        margin-left: 24px;
    }

    h1 { 
        font-weight: 600;
        font-size: 24px;
        margin-right: 24px;
    }

    @media only screen and (max-width: 1000px) {
        img {
            margin: 8px auto;
        }

        h1 { 
            display: none;
        }
    }

    @media only screen and (max-width: 800px) {
        img {
            margin: 4px auto;
            width: 120px;
        }

        h1 { 
            display: none;
        }
    }
`;