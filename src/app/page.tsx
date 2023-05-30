'use client'

import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profileImg from "../../public/assets/profile.png";
import aboutMeImg from "../../public/assets/about_me.png";
import { Logo } from "../components/Logo";
import { SocialMedia } from "../components/SocialMedia";
import GlobalStyle from "../../styles/global";
import { Project } from "../components/Project";
import { useTransform, useViewportScroll } from "framer-motion";
import { Header } from "../components/Header";
import { useTranslation } from "react-i18next";
import { useProjectsQuery } from "../graphql/generated";
import {
  Main,
  HomeSection,
  Texts,
  Title,
  SubText,
  AboutMe,
  SubTitle,
  AboutSection,
  TextSection,
  Text,
  TitleSection,
  EducationalArea,
  Type,
  Small,
  TypeStudy,
  Time,
  Habilities,
  TitleHabilities,
  Section,
  Paragraph,
  HabilitiesSection,
  Projects,
  Footer,
  Element,
  TitleSmall,
  MailLink,
  MenuItem,
  ImgArea,
  Container,
  Wrapper,
  BtnMenu,
  BtnDownloadCv,
  TextCV,
} from "../../styles";
import { CircleIconHabilities } from "../components/CircleIconHabilities";
import { navigateTo } from "../../utils/navigateTo";
import { BackToTop } from "../components/BackToTop";
import { FilePdf } from "@phosphor-icons/react";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { data, loading } = useProjectsQuery();
  const { scrollYProgress } = useViewportScroll();
  const positionAboutSection = useTransform(
    scrollYProgress,
    [0, 0.18],
    ["-100%", "0%"]
  );
  const { t } = useTranslation();

  function removeHash() {
    location.href = location.href.replace(window.location.hash, "");
  }
  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 3000);
    if (window.location.hash) {
      removeHash();
    }
  }, []);
  return (
    <>
      <GlobalStyle />
      {isLoading ? (
        <Wrapper>
          <span className="dot" id="dot1" />
          <span className="dot" id="dot2" />
          <span className="dot" id="dot3" />
        </Wrapper>
      ) : (
        <>
          <Header>
            <BtnMenu
              className="link"
              onClick={() => {
                navigateTo("home");
              }}
            >
              {t("homeMenu")}
            </BtnMenu>
            <BtnMenu
              className="link"
              onClick={() => {
                navigateTo("aboutMe");
              }}
            >
              {t("aboutMenu")}
            </BtnMenu>
            <BtnMenu
              className="link"
              onClick={() => {
                navigateTo("skills");
              }}
            >
              {t("habilitiesMenu")}
            </BtnMenu>
            <BtnMenu
              className="link"
              onClick={() => {
                navigateTo("projects");
              }}
            >
              {t("projectsMenu")}
            </BtnMenu>
            <Link href="/links" className="link">
              Links
            </Link>
            <Link href="/setup" className="link">
              Setup
            </Link>
          </Header>
          <Main>
            <HomeSection id="home">
              <Texts>
                <Title>Lucas Gomes</Title>
                <SubText>{t("profession")}</SubText>
                <BtnDownloadCv href={"/files/cv.pdf"} download="curriculo" >
                  <FilePdf
                    size={28}
                    color={"#FFFFFF"}
                    id="pdfIcon"
                  />
                  <TextCV>Download CV</TextCV>
                </BtnDownloadCv>
              </Texts>
              <Image
                src={profileImg}
                width={500}
                height={450}
                quality={100}
                priority
                alt="Profile picture"
                id="profilePhoto"
                sizes="(max-width: 40em) 320px, (min-width: 60em) 500px"
/>
            </HomeSection>
            <AboutMe>
              <SubTitle>{t("aboutMeTitle")}</SubTitle>
              <AboutSection id="aboutMe">
                <ImgArea style={{ left: positionAboutSection }}>
                  <Image
                    src={aboutMeImg}
                    width={370}
                    height={523}
                    quality={100}
                    alt="Photo Lucas Gomes reading Clean Code"
                  />
                </ImgArea>
                <TextSection style={{ right: positionAboutSection }}>
                  <Text>{t("trajectory")}</Text>
                  <TitleSection>{t("statusEducational")}</TitleSection>
                  <EducationalArea>
                    <Type>
                      <Image
                        src="/assets/logo_ce.png"
                        width={48}
                        height={68}
                        alt="EEEP Balbina Viana Arrais Logo"
                      />
                      <Small>EEEP Balbina Viana Arrais</Small>
                      <TypeStudy>{t("computerTech")}</TypeStudy>
                      <Time>2016-2018</Time>
                    </Type>
                    <Type>
                      <Link
                        href="https://unijuazeiro.edu.br/"
                        style={{ cursor: "pointer" }}
                        target="_blank"
                      >
                        <Image
                          src="/assets/logo_unijuazeiro.png"
                          width={152}
                          height={69}
                          alt="Unijuazeiro Logo"
                        />
                      </Link>
                      <TypeStudy>{t("graduatedAt")}</TypeStudy>
                      <Time>2019-2022</Time>
                    </Type>
                  </EducationalArea>
                </TextSection>
              </AboutSection>
            </AboutMe>
            <Habilities id="skills">
              <SubTitle>{t("skillsTitle")}</SubTitle>
              <HabilitiesSection>
                <Section>
                  <CircleIconHabilities
                    src="/assets/icons/design.png"
                    altImg="Figma icon"
                  />
                  <TitleHabilities>UI</TitleHabilities>
                  <Paragraph>{t("uiTextSkill")}</Paragraph>
                </Section>
                <Section>
                  <CircleIconHabilities
                    src="/assets/icons/code.png"
                    altImg="Computer icon"
                  />
                  <TitleHabilities>{t("codeTitle")}</TitleHabilities>
                  <Paragraph>{t("codeTextSkill")}</Paragraph>
                </Section>
                <Section>
                  <CircleIconHabilities
                    src="/assets/icons/phone.png"
                    altImg="Phone icon"
                  />
                  <TitleHabilities>{t("mobileTitle")}</TitleHabilities>
                  <Paragraph>{t("mobileTextSkill")}</Paragraph>
                </Section>
              </HabilitiesSection>
            </Habilities>
            <Projects id="projects">
              <SubTitle>{t("projectsTitle")}</SubTitle>
              <Container>
                {!loading &&
                  data?.projects.map(
                    ({
                      id,
                      title,
                      deployUrl,
                      githubUrl,
                      photo,
                      tagsTechnologies,
                    }) => (
                      <Project
                        key={id}
                        id={id}
                        title={title}
                        photo={photo}
                        githubUrl={githubUrl}
                        deployUrl={deployUrl}
                        tagsTechnologies={tagsTechnologies}
                      />
                    )
                  )}
              </Container>
            </Projects>
            <Footer>
              <Logo />
              <Element>
                <TitleSmall>{t("contactTitle")}</TitleSmall>
                <MailLink href="mailto:lucasgpdev@gmail.com">
                  lucasgpdev@gmail.com
                </MailLink>
              </Element>
              <Element>
                <TitleSmall>Menu</TitleSmall>
                <MenuItem href="#home">Home</MenuItem>
                <MenuItem href="#aboutme">About</MenuItem>
                <MenuItem href="#skills">Skills</MenuItem>
                <MenuItem href="#projects">Projects</MenuItem>
                <Link href="/links" className="link">
                  Links
                </Link>
                <Link href="/setup" className="link">
                  Setup
                </Link>
              </Element>
            </Footer>
            <SocialMedia />
          </Main>
          <BackToTop />
        </>
      )}
    </>
  );
};

export default Home;
