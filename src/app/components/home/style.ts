"use client";
import Image from "next/image";
import styled from "styled-components";

export const Img = styled(Image)`
  width: 45%;
  height: 80%;
  max-width: 600px;
  max-height: 620px;
  object-fit: cover;
  border-radius: 40px;

  @media only screen and (max-width: 1100px) {
    width: 90%;
    height: 50%;
    border-radius: 30px;
    object-fit: cover;
  }
`;

export const HelloContainer = styled.div`
  font-family: "Rubik", sans-serif;
  width: 100%;
  height: 92vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1100px) {
    height: 90vh;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 20px;
  }

  @media only screen and (max-width: 1000px) {
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 20px;
  }
`;

export const Tag = styled.h2`
  font-family: "Space Mono", monospace;
  font-weight: 400;
  font-feature-settings: "calt" off, "liga" off;
  color: #4d4d4d;

  &::before {
    content: "<";
    margin-left: 4px;
  }

  &::after {
    content: "/>";
    margin-right: 4px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 20px;
  }
`;

export const Hello = styled.h1`
  font-weight: 400;
  font-size: 36px;

  @media only screen and (max-width: 1100px) {
    font-size: 24px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 20px;
    margin-block: 12px;
  }
`;

export const Role = styled.h3`
  width: 85%;
  font-weight: 400;
  font-size: 24px;

  @media only screen and (max-width: 1100px) {
    width: 100%;
    font-size: 20px;
  }

  @media only screen and (max-width: 800px) {
    width: 100%;
    font-size: 16px;
    margin-block: 12px;
  }
`;

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 96vw;
  height: 100vh;

  @media only screen and (max-width: 1000px) {
    margin-top: 50px;
    height: max-content;
  }
`;

export const Social = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: end;

  a {
    color: black;
  }

  svg {
    width: 30px;
    height: 30px;
    margin: 0 16px;
  }

  @media only screen and (max-width: 1100px) {
    height: 4vh;
  }

  @media only screen and (max-width: 1000px) {
    height: 4vh;
    margin-top: 10px;
  }
`;
