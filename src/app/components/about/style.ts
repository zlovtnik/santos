"use client";
import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 96vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media only screen and (max-width: 1000px) {
    height: max-content;
  }
`;

export const Card = styled.div`
  width: 380px;
  height: 280px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
  padding: 24px 10px;

  svg {
    width: 50px;
    height: 30%;
  }

  p {
    font-size: 1rem;
    font-family: "Rubik", sans-serif;
    height: 70%;
  }

  @media only screen and (max-width: 1600px) {
    width: calc(88% / 3);
  }

  @media only screen and (max-width: 1100px) {
    margin: auto;
    height: 260px;
    width: 65%;
    justify-content: center;

    svg {
      height: 30%;
    }

    p {
      height: 70%;
      margin: 10px 0 0 0;
    }
  }

  @media only screen and (max-width: 1000px) {
    margin: auto;
    height: 260px;
    width: 78%;
    justify-content: center;

    svg {
      height: 20%;
    }

    p {
      height: 80%;
      margin: 10px 0 0 0;
    }
  }
`;

export const Career = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .cards {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .swiper-pagination-bullet-active {
      background-color: #1a1a1a;
    }
  }

  @media only screen and (max-width: 1400px) {
    .cards {
      justify-content: space-evenly;
    }
  }
`;

export const Technologies = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .tecnologiesContainer {
    display: flex;
    padding: 0px 24px;
    flex-direction: row;
    justify-content: space-between;
  }
    
  @media only screen and (max-width: 1100px) {
    .tecnologiesContainer {
      display: flex;
      padding: 0px;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

export const Project = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .tecnologiesContainer {
        display: flex;
        padding: 0px 24px;
        flex-direction: row;
        justify-content: space-between;
    }

    @media only screen and (max-width: 1100px) {
        .tecnologiesContainer {
            display: flex;
            padding: 0px;
            flex-direction: column;
            justify-content: space-between;
        }
    }
`;

export const Description = styled.div`
  width: 50%;
  height: max-content;

  h1 {
    font-size: 32px;
    font-family: "Rubik", sans-serif;
    margin-bottom: 24px;
    margin-top: 0;
  }
  ul {
    color: #000;
    font-family: "Rubik", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;

    h1 {
      font-size: 26px;
      font-family: "Rubik", sans-serif;
      margin-bottom: 24px;
      margin-top: 0;
    }

    ul {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
  }
`;

export const Logos = styled.div`
  width: 50%;
  height: 350px;
  display: flex;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-pagination-bullet-active {
    background-color: #1a1a1a;
  }

  @media only screen and (max-width: 1400px) {
    display: block;
    height: auto;
  }

  @media only screen and (max-width: 1100px) {
    width: 90%;
    margin: auto;

    .swiper {
      width: 100%;
      height: 290px;
    }
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
    height: 400px;
    .swiper {
      width: 100%;
      height: 100%;
    }
  }
`;

export const LogoCard = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
  border: 1px solid #1a1a1a;
  padding: 10px 8px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    margin: 0 auto;
  }

  h1 {
    font-family: "Rubik", sans-serif;
    margin-block: 4px;
  }

  p {
    font-size: 16px;
    margin-block: 8px;
    font-family: "Rubik", sans-serif;
    color: rgba(0, 0, 0, 0.7);
    text-transform: capitalize;
  }

  @media only screen and (max-width: 1600px) {
    width: 80%;
    height: 85%;

    img {
      width: 80px;
      height: 80px;
      margin: 14px auto;
    }

    h1 {
      margin-block: 0px;
    }

    p {
      font-size: 14px;
      color: rgba(0, 0, 0, 1);
    }
  }

  @media only screen and (max-width: 1000px) {

    img {
      width: 80px;
      height: 80px;
      border-radius: 100px;
      margin: 14px auto;
    }

    h1 {
      font-family: "Rubik", sans-serif;
      margin-block: 0px;
    }

    p {
      font-size: 14px;
      margin-block: 8px;
      font-family: "Rubik", sans-serif;
      color: rgba(0, 0, 0, 1);
    }
  }
`;
