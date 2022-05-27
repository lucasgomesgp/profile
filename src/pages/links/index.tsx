import Head from "next/head";
import Link from "next/link";
import { Header } from "../../components/Header";
import GlobalStyle from "../../../styles/global";
import { Container } from "./styles";

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
            </Container>
        </>
    );
}