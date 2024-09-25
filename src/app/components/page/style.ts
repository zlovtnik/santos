"use client";
import styled from "styled-components";

export const Body = styled.body`
  padding: 0px;
  background-color: #e6e8e6;
  margin: 0;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 0.6em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2F2F2F;
    border-radius: 2.5px;
  }
`;
export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
