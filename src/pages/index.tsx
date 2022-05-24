import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  HamburgerMenu,
  Header,
  LogoArea,
  Main,
  HomeSection,
  Texts,
  Title,
  SubText,
  Menu,
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
  Time
} from '../../styles';
import profileImg from "../../public/assets/profile.png";
import aboutMeImg from "../../public/assets/about_me.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lucas Gomes</title>
        <meta name="description" content="Lucas Gomes Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <LogoArea>
          <svg width="169" height="46" viewBox="0 0 169 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="logo">
              <path id="arrowLeft" d="M15.5931 21.56C16.6384 21.5173 17.4064 21.2933 17.8971 20.888C18.3877 20.4613 18.6331 19.864 18.6331 19.096C18.6331 18.52 18.5264 17.3787 18.3131 15.672C18.2917 15.5013 18.2277 14.9573 18.1211 14.04C18.0144 13.1013 17.9611 12.2587 17.9611 11.512C17.9611 9.69866 18.5157 8.29066 19.6251 7.288C20.7344 6.264 22.2171 5.752 24.0731 5.752H26.3771V10.232H25.1291C24.4464 10.232 23.9557 10.3813 23.6571 10.68C23.3584 10.9787 23.2091 11.4373 23.2091 12.056C23.2091 12.5253 23.2944 13.592 23.4651 15.256C23.6571 17.3253 23.7531 18.68 23.7531 19.32C23.7531 20.4933 23.4651 21.464 22.8891 22.232C22.3344 23 21.4811 23.4907 20.3291 23.704V23.768C21.4811 24.0027 22.3344 24.504 22.8891 25.272C23.4651 26.0187 23.7531 26.9893 23.7531 28.184C23.7531 28.824 23.6571 30.1787 23.4651 32.248C23.2944 33.8693 23.2091 34.9253 23.2091 35.416C23.2091 36.0347 23.3584 36.4933 23.6571 36.792C23.9557 37.112 24.4464 37.272 25.1291 37.272H26.3771V41.752H24.0731C22.2171 41.752 20.7344 41.24 19.6251 40.216C18.5157 39.2133 17.9611 37.7947 17.9611 35.96C17.9611 35.2133 18.0144 34.3813 18.1211 33.464C18.2277 32.5253 18.2917 31.9707 18.3131 31.8C18.5264 30.0933 18.6331 28.952 18.6331 28.376C18.6331 27.6507 18.3877 27.0747 17.8971 26.648C17.4064 26.2 16.6384 25.9547 15.5931 25.912V21.56Z" fill="url(#paint0_linear_32_59)" />
              <path id="arrowRight" d="M153.179 26.5336C152.133 26.5762 151.365 26.8216 150.875 27.2696C150.384 27.6962 150.139 28.2722 150.139 28.9976C150.139 29.5736 150.245 30.7149 150.459 32.4216C150.48 32.5922 150.544 33.1469 150.651 34.0856C150.757 35.0029 150.811 35.8349 150.811 36.5816C150.811 38.4162 150.256 39.8349 149.147 40.8376C148.037 41.8616 146.555 42.3736 144.699 42.3736H142.395V37.8936H143.643C144.325 37.8936 144.816 37.7336 145.115 37.4136C145.413 37.1149 145.563 36.6562 145.563 36.0376C145.563 35.5469 145.477 34.4909 145.307 32.8696C145.115 30.8002 145.019 29.4456 145.019 28.8056C145.019 27.6109 145.296 26.6402 145.851 25.8936C146.427 25.1256 147.291 24.6242 148.443 24.3896V24.3256C147.291 24.1122 146.427 23.6216 145.851 22.8536C145.296 22.0856 145.019 21.1149 145.019 19.9416C145.019 19.3016 145.115 17.9469 145.307 15.8776C145.477 14.2136 145.563 13.1469 145.563 12.6776C145.563 12.0589 145.413 11.6002 145.115 11.3016C144.816 11.0029 144.325 10.8536 143.643 10.8536H142.395V6.37358H144.699C146.555 6.37358 148.037 6.88558 149.147 7.90958C150.256 8.91225 150.811 10.3202 150.811 12.1336C150.811 12.8802 150.757 13.7229 150.651 14.6616C150.544 15.5789 150.48 16.1229 150.459 16.2936C150.245 18.0002 150.139 19.1416 150.139 19.7176C150.139 20.4856 150.384 21.0829 150.875 21.5096C151.365 21.9149 152.133 22.1389 153.179 22.1816V26.5336Z" fill="url(#paint1_linear_32_59)" />
              <path id="name" d="M44.5786 31.448H51.9386V35H40.0986V12.664H44.5786V31.448ZM71.5221 17.272V35H67.0101V32.76C66.4341 33.528 65.6768 34.136 64.7381 34.584C63.8208 35.0107 62.8181 35.224 61.7301 35.224C60.3435 35.224 59.1168 34.936 58.0501 34.36C56.9835 33.7627 56.1408 32.8987 55.5221 31.768C54.9248 30.616 54.6261 29.2507 54.6261 27.672V17.272H59.1061V27.032C59.1061 28.44 59.4581 29.528 60.1621 30.296C60.8661 31.0427 61.8261 31.416 63.0421 31.416C64.2795 31.416 65.2501 31.0427 65.9541 30.296C66.6581 29.528 67.0101 28.44 67.0101 27.032V17.272H71.5221ZM74.7904 26.136C74.7904 24.3013 75.1637 22.7013 75.9104 21.336C76.657 19.9493 77.6917 18.8827 79.0144 18.136C80.337 17.368 81.8517 16.984 83.5584 16.984C85.7557 16.984 87.569 17.5387 88.9984 18.648C90.449 19.736 91.4197 21.272 91.9104 23.256H87.0784C86.8224 22.488 86.385 21.8907 85.7664 21.464C85.169 21.016 84.4224 20.792 83.5264 20.792C82.2464 20.792 81.233 21.2613 80.4864 22.2C79.7397 23.1173 79.3664 24.4293 79.3664 26.136C79.3664 27.8213 79.7397 29.1333 80.4864 30.072C81.233 30.9893 82.2464 31.448 83.5264 31.448C85.3397 31.448 86.5237 30.6373 87.0784 29.016H91.9104C91.4197 30.936 90.449 32.4613 88.9984 33.592C87.5477 34.7227 85.7344 35.288 83.5584 35.288C81.8517 35.288 80.337 34.9147 79.0144 34.168C77.6917 33.4 76.657 32.3333 75.9104 30.968C75.1637 29.5813 74.7904 27.9707 74.7904 26.136ZM94.0404 26.072C94.0404 24.28 94.3924 22.6907 95.0964 21.304C95.8217 19.9173 96.7924 18.8507 98.0084 18.104C99.2457 17.3573 100.622 16.984 102.136 16.984C103.459 16.984 104.611 17.2507 105.592 17.784C106.595 18.3173 107.395 18.9893 107.992 19.8V17.272H112.504V35H107.992V32.408C107.416 33.24 106.616 33.9333 105.592 34.488C104.59 35.0213 103.427 35.288 102.104 35.288C100.611 35.288 99.2457 34.904 98.0084 34.136C96.7924 33.368 95.8217 32.2907 95.0964 30.904C94.3924 29.496 94.0404 27.8853 94.0404 26.072ZM107.992 26.136C107.992 25.048 107.779 24.12 107.352 23.352C106.926 22.5627 106.35 21.9653 105.624 21.56C104.899 21.1333 104.12 20.92 103.288 20.92C102.456 20.92 101.688 21.1227 100.984 21.528C100.28 21.9333 99.7044 22.5307 99.2564 23.32C98.8297 24.088 98.6164 25.0053 98.6164 26.072C98.6164 27.1387 98.8297 28.0773 99.2564 28.888C99.7044 29.6773 100.28 30.2853 100.984 30.712C101.71 31.1387 102.478 31.352 103.288 31.352C104.12 31.352 104.899 31.1493 105.624 30.744C106.35 30.3173 106.926 29.72 107.352 28.952C107.779 28.1627 107.992 27.224 107.992 26.136ZM123.664 35.288C122.213 35.288 120.912 35.032 119.76 34.52C118.608 33.9867 117.691 33.272 117.008 32.376C116.347 31.48 115.984 30.488 115.92 29.4H120.432C120.517 30.0827 120.848 30.648 121.424 31.096C122.021 31.544 122.757 31.768 123.632 31.768C124.485 31.768 125.147 31.5973 125.616 31.256C126.107 30.9147 126.352 30.4773 126.352 29.944C126.352 29.368 126.053 28.9413 125.456 28.664C124.88 28.3653 123.952 28.0453 122.672 27.704C121.349 27.384 120.261 27.0533 119.408 26.712C118.576 26.3707 117.851 25.848 117.232 25.144C116.635 24.44 116.336 23.4907 116.336 22.296C116.336 21.3147 116.613 20.4187 117.168 19.608C117.744 18.7973 118.555 18.1573 119.6 17.688C120.667 17.2187 121.915 16.984 123.344 16.984C125.456 16.984 127.141 17.5173 128.4 18.584C129.659 19.6293 130.352 21.048 130.48 22.84H126.192C126.128 22.136 125.829 21.5813 125.296 21.176C124.784 20.7493 124.091 20.536 123.216 20.536C122.405 20.536 121.776 20.6853 121.328 20.984C120.901 21.2827 120.688 21.6987 120.688 22.232C120.688 22.8293 120.987 23.288 121.584 23.608C122.181 23.9067 123.109 24.216 124.368 24.536C125.648 24.856 126.704 25.1867 127.536 25.528C128.368 25.8693 129.083 26.4027 129.68 27.128C130.299 27.832 130.619 28.7707 130.64 29.944C130.64 30.968 130.352 31.8853 129.776 32.696C129.221 33.5067 128.411 34.1467 127.344 34.616C126.299 35.064 125.072 35.288 123.664 35.288Z" fill="white" />
            </g>
            <defs>
              <linearGradient id="paint0_linear_32_59" x1="20.6654" y1="0" x2="20.6654" y2="40.9818" gradientUnits="userSpaceOnUse">
                <stop offset="0.00520833" stopColor="#BC7ADD" />
                <stop offset="0.328125" stopColor="#5C59DF" />
                <stop offset="0.494792" stopColor="#6F48DF" />
                <stop offset="0.666667" stopColor="#8A20DD" />
                <stop offset="0.927083" stopColor="#B00FFF" />
              </linearGradient>
              <linearGradient id="paint1_linear_32_59" x1="148.107" y1="0.621582" x2="148.107" y2="41.6034" gradientUnits="userSpaceOnUse">
                <stop offset="0.00520833" stopColor="#BC7ADD" />
                <stop offset="0.328125" stopColor="#5C59DF" />
                <stop offset="0.494792" stopColor="#6F48DF" />
                <stop offset="0.666667" stopColor="#8A20DD" />
                <stop offset="0.927083" stopColor="#B00FFF" />
              </linearGradient>
            </defs>
          </svg>
        </LogoArea>
        <Menu>
          <Link href="#home">
            Home
          </Link>
          <Link href="#about">
            About
          </Link>
          <Link href="#habilities">
            Habilities
          </Link>
          <Link href="#projects">
            Projects
          </Link>
          <Link href="#links">
            Links
          </Link>
        </Menu>
        <HamburgerMenu>
          <span />
          <span />
          <span />
        </HamburgerMenu>
      </Header>
      <Main>
        <HomeSection>
          <Texts>
            <Title>
              Lucas Gomes
            </Title>
            <SubText>
              Front-end and Mobile Developer
            </SubText>
          </Texts>
          <Image src={profileImg} width={420} height={450} quality={100} alt="Lucas Gomes Photo" />
        </HomeSection>
        <AboutMe>
          <SubTitle>ABOUT ME</SubTitle>
          <AboutSection>
            <Image src={aboutMeImg} width={370} height={523} quality={100} alt="Photo Lucas Gomes reading Clean Code" />
            <TextSection>
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
                  <Image src="/assets/logo_unijuazeiro.png" width={152} height={69} alt="Unijuazeiro Logo" />
                  <TypeStudy>
                    Bachelor in Information Systems
                  </TypeStudy>
                  <Time>2019-2022</Time>
                </Type>
              </EducationalArea>
            </TextSection>
          </AboutSection>
        </AboutMe>
      </Main>
    </>
  );
}

export default Home;
