import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Header } from "../../components/Header";
import GlobalStyle from "../../../styles/global";
import { Container, Icons, ImgArea, LinkIcon, Small, Text, Wrapper } from "../../../styles/links/styles";

const socialLinks = [
    {
        href: "https://www.instagram.com/lucas_gomesgp/",
        src: "/assets/icons/links/instagram.svg",
        name: "Instagram",
    },
    {
        href: "https://twitter.com/lucas_gomesgp",
        src: "/assets/icons/links/twitter.svg",
        name: "Twitter",
    },
    {
        href: "https://github.com/lucasgomesgp",
        src: "/assets/icons/links/github.svg",
        name: "Github",
    },
    {
        href: "https://www.linkedin.com/in/lucas-gomes-aab356173/",
        src: "/assets/icons/links/linkedin.svg",
        name: "Linkedin",
    },
    {
        href: "https://www.youtube.com/channel/UCbK1HocF7CCORYVVV0DnmPA",
        src: "/assets/icons/links/youtube.svg",
        name: "Youtube",
    },
    {
        href: "mailto:lucasgpdev@gmail.com",
        src: "/assets/icons/links/instagram.svg",
        name: "Instagram",
    },
    {
        href: "https://www.instagram.com/lucas_gomesgp/",
        src: "/assets/icons/links/email.svg",
        name: "Email",
    },
    {
        href: "https://www.figma.com/@lucasgomesgp",
        src: "/assets/icons/links/figma.svg",
        name: "Figma",
    },
    {
        href: "https://dev.to/lucas_gomesgp",
        src: "/assets/icons/links/dev.svg",
        name: "DEV.to",
    }
];
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
                    </ImgArea>
                    <Text>
                        Follow Me
                    </Text>
                    <Icons>
                        {socialLinks.map(({ href, name, src }) => (
                            <>
                                <LinkIcon target="_blank" href={href}>
                                    <Image src={src} alt={name} width={28} height={28} layout="fixed" />
                                    <Small>{name}</Small>
                                </LinkIcon>
                            </>
                        ))}
                    </Icons>
                </Wrapper>
            </Container>
        </>
    );
}