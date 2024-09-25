"use client";
import React, {FC} from "react";
import Image, {StaticImageData} from "next/image";
import {
    AboutContainer,
    Card as StyledCard,
    Career,
    Description,
    LogoCard,
    Logos,
    Technologies,
    Project

} from "./style";
import {Tag as TagText} from "../home/style";
import {FaChartLine} from "react-icons/fa";
import {TbCloudDataConnection} from "react-icons/tb";
import {AiOutlineTeam} from "react-icons/ai";

import oracle from "../../images/technologies/oracle.svg";
import docker from "../../images/technologies/docker.svg";
import kubernetes from "../../images/technologies/kubernetes.svg";
import spring from "../../images/technologies/spring.svg";
import java from "../../images/technologies/java.svg";
import react from "../../images/technologies/react.svg";
import camel from "../../images/technologies/camel.svg";
import oci from "../../images/technologies/oci.svg";
import checklist from "../../images/checklist.svg";
import useWindowSize from "@/app/components/hooks/useWindowLayout";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface TechData {
    src: StaticImageData;
    alt: string;
    title: string;
    text: string;
}
interface ProjectData {
    ano: String
    descricao: string;
    projeto: string;
    source: string,
}

interface CardProps {
    Icon: React.ComponentType;
    children: React.ReactNode;
}

const Card: FC<CardProps> = ({Icon, children}) => (
    <StyledCard>
        <Icon/>
        <p>{children}</p>
    </StyledCard>
);

export const About: FC<{
    props: {
        Cards: { Tag: string; 1: string; 2: string; 3: string };
        Skills: {
            Tag: string;
            title: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            oracle: string;
            docker: string;
            kubernetes: string;
            spring: string;
            java: string;
            react: string;
            camel: string;
            oci: string;
        };
        Projects: {
            Tag: string;
            Title: string;
            p2009: string;
            p2010: string;
            p2014: string;
            p2018: string;
            p2020: string;
            p2022: string;
        }
    };
}> = ({props}) => {
    const {Cards, Skills, Projects} = props;
    const {width, height} = useWindowSize();
    const projectData: ProjectData[] = [
        {
            ano: "2009",
            projeto: "SS4AGM",
            descricao: Projects.p2009,
            source: checklist,
        },
        {
            ano: "2010",
            projeto: "SS4AGM",
            descricao: Projects.p2010,
            source: checklist,
        },
        {
            ano: "2014",
            projeto: "SS4AGM",
            descricao: Projects.p2014,
            source: checklist,
        },
        {
            ano: "2018",
            projeto: "SS4AGM",
            descricao: Projects.p2018,
            source: checklist,
        },
        {
            ano: "2020",
            projeto: "SS4AGM",
            descricao: Projects.p2020,
            source: checklist,
        },
        {
            ano: "2022",
            projeto: "SS4AGM",
            descricao: Projects.p2022,
            source: checklist,
        }]
    const techData: TechData[] = [
        {
            src: oracle,
            alt: "Oracle",
            title: "Oracle PL/SQL",
            text: Skills.oracle
        },
        {
            src: docker,
            alt: "Docker",
            title: "Docker",
            text: Skills.docker
        },
        {
            src: kubernetes,
            alt: "Kuberenetes",
            title: "Kuberenetes",
            text: Skills.kubernetes
        },
        {
            src: spring,
            alt: "Spring",
            title: "Spring",
            text: Skills.spring
        },
        {
            src: java,
            alt: "Java",
            title: "Java",
            text: Skills.java
        },
        {
            src: react,
            alt: "React",
            title: "React",
            text: Skills.react
        },
        {
            src: camel,
            alt: "Apache Camel",
            title: "Apache Camel",
            text: Skills.camel
        },
        {
            src: oci,
            alt: "OCI",
            title: "Oracle Cloud Integration",
            text: Skills.oci
        },
    ];

    return (
        <AboutContainer>
            <Career>
                <TagText>{Cards.Tag}</TagText>
                {width != undefined && width >= 1100 ? (
                    <div className="cards">
                        <Card Icon={FaChartLine}>{Cards[1]}</Card>
                        <Card Icon={TbCloudDataConnection}>{Cards[2]}</Card>
                        <Card Icon={AiOutlineTeam}>{Cards[3]}</Card>
                    </div>
                ) : (
                    <div className="cards">
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            loop
                            style={{
                                height: 350,
                            }}
                        >
                            <SwiperSlide>
                                <Card Icon={FaChartLine}>{Cards[1]}</Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card Icon={TbCloudDataConnection}>{Cards[2]}</Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card Icon={AiOutlineTeam}>{Cards[3]}</Card>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                )}
            </Career>
            <div>
                <Project>
                    <TagText>{Projects.Tag}</TagText>
                    <div className="tecnologiesContainer">
                        <Description>
                            <h1>{Projects.Title}</h1>
                            <ul>
                                <li>{Skills[1]}</li>
                                <li>{Skills[2]}</li>
                                <li>{Skills[3]}</li>
                                <li>{Skills[4]}</li>
                                <li>{Skills[5]}</li>
                                <li>{Skills[6]}</li>
                                <li>{Skills[7]}</li>
                            </ul>
                        </Description>
                        <Logos>
                            <Swiper
                                pagination={{dynamicBullets: true}}
                                modules={[Pagination]}
                                loop
                            >
                                {projectData.map((tech) => (
                                    <SwiperSlide key={tech.descricao}>
                                        <LogoCard>
                                            <Image src={tech.source} alt={tech.descricao} priority/>
                                            <h1>{tech.ano}</h1>
                                            <p>{tech.descricao}</p>
                                        </LogoCard>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Logos>
                    </div>
                </Project>
            </div>
            <Technologies>
                <TagText>{Skills.Tag}</TagText>
                <div className="tecnologiesContainer">
                    <Description>
                        <h1>{Skills.title}</h1>
                        <ul>
                            <li>{Skills[1]}</li>
                            <li>{Skills[2]}</li>
                        </ul>
                    </Description>
                    <Logos>
                        <Swiper
                            pagination={{dynamicBullets: true}}
                            modules={[Pagination]}
                            loop
                        >
                            {techData.map((tech) => (
                                <SwiperSlide key={tech.alt}>
                                    <LogoCard>
                                        <Image src={tech.src} alt={tech.alt} priority/>
                                        <h1>{tech.title}</h1>
                                        <p>{tech.text}</p>
                                    </LogoCard>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Logos>
                </div>
            </Technologies>
        </AboutContainer>
    );
};
