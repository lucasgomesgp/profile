import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Header } from "../../components/Header";
import GlobalStyle from "../../../styles/global";
import { Container, Icons, ImgArea, LinkIcon, Small, Text, Wrapper } from "../../../styles/links/styles";

export default function Links() {
    return (
        <>
            <GlobalStyle />
            <Head>
                <title>Links</title>
                <meta name="description" content="Links" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <Header>
                    <Link href="/" className="link">
                        Home
                    </Link>
                    <Link href="/setup" className="link">
                        Setup
                    </Link>
                </Header>
                <Wrapper>
                    <ImgArea>
                        <Image src="/assets/avatar.png" width={100} height={100} layout="fixed" quality={100} priority alt="Lucas Gomes" />
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" id="mouse">
                            <path d="M21.8369 1.16506L2.34719 10.1604C0.0985938 11.2099 0.848125 14.508 3.24672 14.508H11.4925V22.7538C11.4925 25.1524 14.7906 25.9024 15.8402 23.6533L24.8355 4.16365C25.585 2.36412 23.6359 0.415056 21.8369 1.16506V1.16506Z" fill="url(#paint0_linear_84_2440)" stroke="white" />
                            <defs>
                                <linearGradient id="paint0_linear_84_2440" x1="13.0003" y1="1.00012" x2="13.0003" y2="25.0004" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.00520833" stopColor="#BC7ADD" />
                                    <stop offset="0.328125" stopColor="#5C59DF" />
                                    <stop offset="0.494792" stopColor="#6F48DF" />
                                    <stop offset="0.666667" stopColor="#8A20DD" />
                                    <stop offset="0.927083" stopColor="#B00FFF" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg width="10" height="10" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg" id="afterClick">
                            <g id="click">
                                <rect id="second" x="1.05" y="1.05" width="2.9" height="2.9" rx="1.45" stroke="#8A20DD" strokeOpacity="1" strokeWidth="2" />
                                <rect id="one" x="0.05" y="0.05" width="4.9" height="4.9" rx="2.45" stroke="#8A20DD" strokeOpacity="1" strokeWidth="2" />
                            </g>
                        </svg>
                    </ImgArea>
                    <Text>
                        Follow Me
                    </Text>
                    <Icons>
                        <LinkIcon target="_blank" href="https://www.instagram.com/lucas_gomesgp/" id="link">
                            <Image src={"/assets/icons/links/instagram.svg"} alt="Instagram" width={28} height={28} layout="fixed" />
                            <Small>Instagram</Small>
                        </LinkIcon>
                        <LinkIcon target="_blank" href="https://twitter.com/lucas_gomesgp" id="link">
                            <Image src={"/assets/icons/links/twitter.svg"} alt="Twitter" width={28} height={28} layout="fixed" />
                            <Small>Twitter</Small>
                        </LinkIcon>
                        <LinkIcon target="_blank" href="https://github.com/lucasgomesgp" id="link">
                            <Image src={"/assets/icons/links/github.svg"} alt="Github" width={28} height={28} layout="fixed" />
                            <Small>Github</Small>
                        </LinkIcon>
                        <LinkIcon target="_blank" href="https://www.linkedin.com/in/lucas-gomes-aab356173/" id="link">
                            <Image src={"/assets/icons/links/linkedin.svg"} alt="Linkedin" width={28} height={28} layout="fixed" />
                            <Small>Linkedin</Small>
                        </LinkIcon>
                        <LinkIcon target="_blank" href="https://www.youtube.com/channel/UCbK1HocF7CCORYVVV0DnmPA" id="link">
                            <Image src={"/assets/icons/links/youtube.svg"} alt="Youtube" width={28} height={28} layout="fixed" />
                            <Small>Youtube</Small>
                        </LinkIcon>
                        <LinkIcon target="_blank" href="mailto:lucasgpdev@gmail.com" id="link">
                            <Image src={"/assets/icons/links/email.svg"} alt="Email" width={28} height={28} layout="fixed" />
                            <Small>Email</Small>
                        </LinkIcon>
                    </Icons>
                </Wrapper>
            </Container>
        </>
    );
}