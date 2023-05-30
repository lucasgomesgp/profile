import "../i18n/index";
import "../../styles/fonts.css";
import { ApolloWrapper } from "../components/ApolloWrapper";

export const metadata = {
  title: "Lucas Gomes",
  description: "Website with infos of my experiences and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <ApolloWrapper>
        <body>{children}</body>
      </ApolloWrapper>
    </html>
  );
}
