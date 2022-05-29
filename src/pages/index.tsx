import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import profileImg from "../../public/assets/profile.png";
import aboutMeImg from "../../public/assets/about_me.png";
import { Logo } from '../components/Logo';
import { SocialMedia } from '../components/SocialMedia';
import GlobalStyle from "../../styles/global";
import { Project } from '../components/Project';
import { projects } from '../../utils/data';
import { useTransform, useViewportScroll } from 'framer-motion';
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
  Circle,
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
} from '../../styles';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  const { scrollYProgress } = useViewportScroll();
  const positionAboutSection = useTransform(
    scrollYProgress,
    [0, 0.180],
    ["-100%", "0%"]
  );
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Home</title>
        <meta name="description" content="Lucas Gomes Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Link href="#home" className="link">
          Home
        </Link>
        <Link href="#aboutme" className="link">
          About
        </Link>
        <Link href="#habilities" className="link">
          Habilities
        </Link>
        <Link href="#projects" className="link">
          Projects
        </Link>
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
            <Title>
              Lucas Gomes
            </Title>
            <SubText>
              Front-end and Mobile Developer
            </SubText>
          </Texts>
          <Image src={profileImg} width={420} height={450} quality={100} priority alt="Lucas Gomes Photo" layout="fixed" id="profilePhoto" />
        </HomeSection>
        <AboutMe>
          <SubTitle>ABOUT ME</SubTitle>
          <AboutSection id="aboutme">
            <ImgArea style={{ left: positionAboutSection }}>
              <Image src={aboutMeImg} width={370} height={523} quality={100} alt="Photo Lucas Gomes reading Clean Code" />
            </ImgArea>
            <TextSection style={{ right: positionAboutSection }}>
              <Text>
                Currently 22 years old, programming and learning the basis of quality software development, with a focus on the Web.
              </Text>
              <TitleSection>
                Educational Status
              </TitleSection>
              <EducationalArea>
                <Type>
                  <Image src="/assets/logo_ce.png" width={48} height={68} alt="EEEP Balbina Viana Arrais Logo" />
                  <Small>
                    EEEP Balbina Viana Arrais
                  </Small>
                  <TypeStudy>
                    Computer Technician
                  </TypeStudy>
                  <Time>2016-2018</Time>
                </Type>
                <Type>
                  <Link href="https://unijuazeiro.edu.br/" style={{ cursor: "pointer" }}>
                    <a target="_blank">
                      <Image src="/assets/logo_unijuazeiro.png" width={152} height={69} alt="Unijuazeiro Logo" />
                    </a>
                  </Link>
                  <TypeStudy>
                    Bachelor in Information Systems
                  </TypeStudy>
                  <Time>2019-2022</Time>
                </Type>
              </EducationalArea>
            </TextSection>
          </AboutSection>
        </AboutMe>
        <Habilities id="skills">
          <SubTitle>SKILLS</SubTitle>
          <HabilitiesSection>
            <Section>
              <Circle>
                <svg width="231" height="231" viewBox="0 0 231 231" fill="none" xmlns="http://www.w3.org/2000/svg" id="bgCircle">
                  <circle id="circle" opacity="0.5" cx="115.5" cy="115.5" r="114.5" stroke="url(#paint0_linear_32_75)" strokeWidth="2" strokeDasharray="20 20" />
                  <defs>
                    <linearGradient id="paint0_linear_32_75" x1="115.5" y1="2" x2="115.5" y2="229" gradientUnits="userSpaceOnUse">
                      <stop offset="0.00520833" stopColor="#BC7ADD" />
                      <stop offset="0.328125" stopColor="#5C59DF" />
                      <stop offset="0.494792" stopColor="#6F48DF" />
                      <stop offset="0.666667" stopColor="#8A20DD" />
                      <stop offset="0.927083" stopColor="#B00FFF" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 59.375V96.875" stroke="url(#paint0_linear_32_76)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M50 59.375C54.3147 59.375 57.8125 55.8772 57.8125 51.5625C57.8125 47.2478 54.3147 43.75 50 43.75C45.6853 43.75 42.1875 47.2478 42.1875 51.5625C42.1875 55.8772 45.6853 59.375 50 59.375Z" stroke="url(#paint1_linear_32_76)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M28.125 28.125V12.5C28.125 11.6712 28.4542 10.8763 29.0403 10.2903C29.6263 9.70424 30.4212 9.375 31.25 9.375H68.75C69.5788 9.375 70.3737 9.70424 70.9597 10.2903C71.5458 10.8763 71.875 11.6712 71.875 12.5V28.125" stroke="url(#paint2_linear_32_76)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M28.1343 28.125L17.4312 49.7656C17.183 50.2812 17.0775 50.8538 17.1256 51.424C17.1737 51.9942 17.3736 52.5411 17.7046 53.0078L50.0093 96.875L82.314 53.0078C82.645 52.5411 82.845 51.9942 82.893 51.424C82.9411 50.8538 82.8356 50.2812 82.5874 49.7656L71.8843 28.125H28.1343Z" stroke="url(#paint3_linear_32_76)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="paint0_linear_32_76" x1="50.5" y1="59.375" x2="50.5" y2="96.875" gradientUnits="userSpaceOnUse">
                      <stop offset="0.00520833" stopColor="#BC7ADD" />
                      <stop offset="0.328125" stopColor="#5C59DF" />
                      <stop offset="0.494792" stopColor="#6F48DF" />
                      <stop offset="0.666667" stopColor="#8A20DD" />
                      <stop offset="0.927083" stopColor="#B00FFF" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_32_76" x1="50" y1="43.75" x2="50" y2="59.375" gradientUnits="userSpaceOnUse">
                      <stop offset="0.00520833" stopColor="#BC7ADD" />
                      <stop offset="0.328125" stopColor="#5C59DF" />
                      <stop offset="0.494792" stopColor="#6F48DF" />
                      <stop offset="0.666667" stopColor="#8A20DD" />
                      <stop offset="0.927083" stopColor="#B00FFF" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_32_76" x1="50" y1="9.375" x2="50" y2="28.125" gradientUnits="userSpaceOnUse">
                      <stop offset="0.00520833" stopColor="#BC7ADD" />
                      <stop offset="0.328125" stopColor="#5C59DF" />
                      <stop offset="0.494792" stopColor="#6F48DF" />
                      <stop offset="0.666667" stopColor="#8A20DD" />
                      <stop offset="0.927083" stopColor="#B00FFF" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_32_76" x1="50.0093" y1="28.125" x2="50.0093" y2="96.875" gradientUnits="userSpaceOnUse">
                      <stop offset="0.00520833" stopColor="#BC7ADD" />
                      <stop offset="0.328125" stopColor="#5C59DF" />
                      <stop offset="0.494792" stopColor="#6F48DF" />
                      <stop offset="0.666667" stopColor="#8A20DD" />
                      <stop offset="0.927083" stopColor="#B00FFF" />
                    </linearGradient>
                  </defs>
                </svg>
              </Circle>
              <TitleHabilities>
                UI
              </TitleHabilities>
              <Paragraph>
                Knowledge of advanced interface development, with best practices.
              </Paragraph>
            </Section>
            <Section>
              <Circle>
                <svg width="231" height="231" viewBox="0 0 231 231" fill="none" xmlns="http://www.w3.org/2000/svg" id="bgCircle">
                  <circle id="circle" opacity="0.5" cx="115.5" cy="115.5" r="114.5" stroke="url(#paint0_linear_32_75)" strokeWidth="2" strokeDasharray="20 20" />
                  <defs>
                    <linearGradient id="paint0_linear_32_75" x1="115.5" y1="2" x2="115.5" y2="229" gradientUnits="userSpaceOnUse">
                      <stop offset="0.00520833" stopColor="#BC7ADD" />
                      <stop offset="0.328125" stopColor="#5C59DF" />
                      <stop offset="0.494792" stopColor="#6F48DF" />
                      <stop offset="0.666667" stopColor="#8A20DD" />
                      <stop offset="0.927083" stopColor="#B00FFF" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 34.375L6.25 50L25 65.625" stroke="url(#paint0_linear_32_85)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M75 34.375L93.75 50L75 65.625" stroke="url(#paint1_linear_32_85)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M62.5 15.625L37.5 84.375" stroke="url(#paint2_linear_32_85)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="paint0_linear_32_85" x1="15.625" y1="34.375" x2="15.625" y2="65.625" gradientUnits="userSpaceOnUse">
                      <stop offset="0.00520833" stopColor="#BC7ADD" />
                      <stop offset="0.328125" stopColor="#5C59DF" />
                      <stop offset="0.494792" stopColor="#6F48DF" />
                      <stop offset="0.666667" stopColor="#8A20DD" />
                      <stop offset="0.927083" stopColor="#B00FFF" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_32_85" x1="84.375" y1="34.375" x2="84.375" y2="65.625" gradientUnits="userSpaceOnUse">
                      <stop offset="0.00520833" stopColor="#BC7ADD" />
                      <stop offset="0.328125" stopColor="#5C59DF" />
                      <stop offset="0.494792" stopColor="#6F48DF" />
                      <stop offset="0.666667" stopColor="#8A20DD" />
                      <stop offset="0.927083" stopColor="#B00FFF" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_32_85" x1="50" y1="15.625" x2="50" y2="84.375" gradientUnits="userSpaceOnUse">
                      <stop offset="0.00520833" stopColor="#BC7ADD" />
                      <stop offset="0.328125" stopColor="#5C59DF" />
                      <stop offset="0.494792" stopColor="#6F48DF" />
                      <stop offset="0.666667" stopColor="#8A20DD" />
                      <stop offset="0.927083" stopColor="#B00FFF" />
                    </linearGradient>
                  </defs>
                </svg>
              </Circle>
              <TitleHabilities>
                Code
              </TitleHabilities>
              <Paragraph>
                Software development, following best practices and clean code.
              </Paragraph>
            </Section>
            <Section>
              <Circle>
                <svg width="231" height="231" viewBox="0 0 231 231" fill="none" xmlns="http://www.w3.org/2000/svg" id="bgCircle">
                  <circle id="circle" opacity="0.5" cx="115.5" cy="115.5" r="114.5" stroke="url(#paint0_linear_32_75)" strokeWidth="2" strokeDasharray="20 20" />
                  <defs>
                    <linearGradient id="paint0_linear_32_75" x1="115.5" y1="2" x2="115.5" y2="229" gradientUnits="userSpaceOnUse">
                      <stop offset="0.00520833" stopColor="#BC7ADD" />
                      <stop offset="0.328125" stopColor="#5C59DF" />
                      <stop offset="0.494792" stopColor="#6F48DF" />
                      <stop offset="0.666667" stopColor="#8A20DD" />
                      <stop offset="0.927083" stopColor="#B00FFF" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M68.75 9.375H31.25C27.7982 9.375 25 12.1732 25 15.625V84.375C25 87.8268 27.7982 90.625 31.25 90.625H68.75C72.2018 90.625 75 87.8268 75 84.375V15.625C75 12.1732 72.2018 9.375 68.75 9.375Z" stroke="url(#paint0_linear_32_93)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M25 21.875H75" stroke="url(#paint1_linear_32_93)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M25 78.125H75" stroke="url(#paint2_linear_32_93)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="paint0_linear_32_93" x1="50" y1="9.375" x2="50" y2="90.625" gradientUnits="userSpaceOnUse">
                      <stop offset="0.00520833" stopColor="#BC7ADD" />
                      <stop offset="0.328125" stopColor="#5C59DF" />
                      <stop offset="0.494792" stopColor="#6F48DF" />
                      <stop offset="0.666667" stopColor="#8A20DD" />
                      <stop offset="0.927083" stopColor="#B00FFF" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_32_93" x1="50" y1="21.875" x2="50" y2="22.875" gradientUnits="userSpaceOnUse">
                      <stop offset="0.00520833" stopColor="#BC7ADD" />
                      <stop offset="0.328125" stopColor="#5C59DF" />
                      <stop offset="0.494792" stopColor="#6F48DF" />
                      <stop offset="0.666667" stopColor="#8A20DD" />
                      <stop offset="0.927083" stopColor="#B00FFF" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_32_93" x1="50" y1="78.125" x2="50" y2="79.125" gradientUnits="userSpaceOnUse">
                      <stop offset="0.00520833" stopColor="#BC7ADD" />
                      <stop offset="0.328125" stopColor="#5C59DF" />
                      <stop offset="0.494792" stopColor="#6F48DF" />
                      <stop offset="0.666667" stopColor="#8A20DD" />
                      <stop offset="0.927083" stopColor="#B00FFF" />
                    </linearGradient>
                  </defs>
                </svg>

              </Circle>
              <TitleHabilities>
                Mobile
              </TitleHabilities>
              <Paragraph>
                Application development with the best market practices, using React Native.
              </Paragraph>
            </Section>
          </HabilitiesSection>
        </Habilities>
        <Projects id="projects">
          <SubTitle>PROJECTS</SubTitle>
          <Container>
            {projects.map(({ id, altImg, image, text, link_github, link_deploy }) => (
              <Project key={id} image={image} altImg={altImg} text={text} link_github={link_github} link_deploy={link_deploy} />
            ))}
          </Container>
        </Projects>
        <Footer>
          <Logo />
          <Element>
            <TitleSmall>
              Contact
            </TitleSmall>
            <MailLink href="mailto:lucasgpdev@gmail.com">
              lucasgpdev@gmail.com
            </MailLink>
          </Element>
          <Element>
            <TitleSmall>
              Menu
            </TitleSmall>
            <MenuItem href="#home">
              Home
            </MenuItem>
            <MenuItem href="#aboutme">
              About
            </MenuItem>
            <MenuItem href="#skills">
              Skills
            </MenuItem>
            <MenuItem href="#projects">
              Projects
            </MenuItem>
            <Link href="/links">
              <MenuItem>
                Links
              </MenuItem>
            </Link>
            <Link href="/setup">
              <MenuItem>
                Setup
              </MenuItem>
            </Link>
          </Element>
        </Footer>
        <SocialMedia />
      </Main>
    </>
  );
}

export default Home;
