import Head from "next/head";
import Link from "next/link";
import { Header } from "../../components/Header";
import GlobalStyle from "../../../styles/global";

export default function Setup() {
    return (
        <>
            <GlobalStyle />
            <Head>
                <title>Setup</title>
                <meta name="description" content="Setup" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header>
                <Link href="/" className="link">
                    Home
                </Link>
                <Link href="/links" className="link">
                    Links
                </Link>
            </Header>
        </>
    );
}