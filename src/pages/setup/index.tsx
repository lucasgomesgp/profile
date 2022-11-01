import Head from "next/head";
import Link from "next/link";
import { Header } from "../../components/Header";
import GlobalStyle from "../../../styles/global";
import { useSetupQuery } from "../../graphql/generated";
import { useTranslation } from "react-i18next";
import { Container, Item, Main, Title } from "../../../styles/setup/styles";

export default function Setup() {
  const { data } = useSetupQuery();
  const { t } = useTranslation();
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
      <Main>
        <Title>{t("setupTitle")}</Title>
        <Container>
          {data?.setups.map((item) => (
            <Item key={item.id}>
              <Link href={item.link} target="_blank">{item.title}</Link>
            </Item>
          ))}
        </Container>
      </Main>
    </>
  );
}
