"use client";
import styled from "styled-components";

export const Form = styled.form`
  max-width: 760px;
  min-width: 660px;
  width: 50%;
  padding: 44px 40px;
  border: 2px solid black;
  font-family: "Rubik", sans-serif;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: end;

  @media only screen and (max-width: 1600px) {
    padding: 40px 20px;
  }

  @media only screen and (max-width: 1400px) {
    width: 66%;
    min-width: auto;
    padding: 1%;
    padding: 20px 10px;
    margin: auto;
  }

  @media only screen and (max-width: 1100px) {
    width: 96%;
    min-width: auto;
    padding: 1%;
    margin: auto;
  }
`;

export const Label = styled.label`
  font-size: 24px;
  text-transform: capitalize;
  font-weight: bold;
  width: 40%;

  @media only screen and (max-width: 1600px) {
    width: 35%;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 75%;
  height: 43px;
  background-color: transparent;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 400;
  /* padding: 0px 12px; */
  outline: none;
  text-align: justify;
  border: 1px solid rgba(0, 0, 0, 0.7);

  @media only screen and (max-width: 1100px) {
    width: 96%;
    padding: 4px 2%;
  }
`;

export const Field = styled.div`
  width: 95%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  margin: 16px 0;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1400px) {
    margin: 14px auto;
  }

  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: stretch;
    padding: 0;
    margin: 10px auto;
  }
`;

export const TextArea = styled.textarea`
  width: 95.5%;
  height: 310px;
  resize: none;
  padding: 24px 16px;
  outline: none;
  font-size: 24px;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.7);

  @media only screen and (max-width: 1400px) {
    padding: 8px 2%;
    width: 96%;
  }
`;

export const Button = styled.button`
  padding: 8px 48px;
  background-color: black;
  border-radius: 16px;
  font-weight: 500;
  color: white;
  width: fit-content;
  margin-top: 16px;
  font-size: 24px;
  outline: none;
  border: 1px solid black;

  @media only screen and (max-width: 1400px) {
    margin-right: 10px;
  }
`;

export const ContactPhrase = styled.h1`
  width: 50%;
  height: fit-content;
  padding-right: 140px;
  color: #000;
  font-family: "Rubik", sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 116.5%; /* 55.92px */
  letter-spacing: 0.02em;

  @media only screen and (max-width: 1400px) {
    width: 95%;
    line-height: normal;
    letter-spacing: 0.01em;
    padding: 0px;
  }

  @media only screen and (max-width: 1100px) {
    width: 80%;
    line-height: normal;
    font-size: 36px;
    letter-spacing: 0.01em;
    padding-right: 0;
  }

  @media only screen and (max-width: 1000px) {
    width: fit-content;
    line-height: normal;
    font-size: 32px;
    letter-spacing: 0%;
    padding-right: 0;
    margin-top: 0px;
  }
`;

export const Container = styled.section`
  width: 96vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .content {
    display: flex;
    flex-direction: row;
  }

  @media only screen and (max-width: 1400px) {
    justify-content: initial;
    height: max-content;

    .content {
      flex-direction: column;
      margin-bottom: 20px;
    }
  }
`;
