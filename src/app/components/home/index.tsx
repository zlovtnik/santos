// 'use client';
import React from "react";
import {
  Hello,
  HelloContainer,
  HomeSection,
  Img,
  Role,
  Social,
  Tag,
} from "./style";
import rafael from "../../images/rafael.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

export const Index: React.FC<{
  props: { tag: string; greetings: string, role: string };
}> = ({props}) => {
  
  const { tag, greetings, role} = props;

  return (
    <HomeSection>
      <HelloContainer>
        <div>
          <Tag>{tag}</Tag>
          <Hello>
            {greetings} <strong>Rafael Cardoso dos Santos</strong>
          </Hello>
          <Role>{role}</Role>
        </div>
        <Img src={rafael} alt="Rafael Cardoso dos Santos" priority />
      </HelloContainer>
      <Social>
        <a
          href="https://github.com/zlovtnik"
          rel="noopener noreferrer"
          target="_blank"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/racasantos/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </Social>
    </HomeSection>
  );
};