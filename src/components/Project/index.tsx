import Image from "next/image";
import {
  BtnText,
  Buttons,
  Container,
  Deploy,
  Github,
  Text,
  WrapperImg,
} from "./styles";
import { VscGithub, VscGlobe } from "react-icons/vsc";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { ProjectsQuery } from "../../graphql/generated";
interface Redirect {
  type: "github" | "deploy";
}
interface Props {
  id: string;
  deployUrl: string;
  githubUrl: string;
  photo: {
    url: string,
  },
  description: string;
}

export function Project({ deployUrl, githubUrl, photo, description }: Props) {
  const { t } = useTranslation();
  function handleRedirect({ type }: Redirect) {
    if (type === "github") {
      window.open(githubUrl, "_blank");
    } else {
      window.open(deployUrl, "_blank");
    }
  }
  return (
    <Container>
      <WrapperImg>
        <Image
          src={photo.url}
          alt={"Projeto"}
          width={500}
          height={300}
          layout="responsive"
          id="project"
        />
        <Buttons id="btns">
          <Github
            onClick={() => {
              handleRedirect({ type: "github" });
            }}
          >
            <BtnText>Github</BtnText>
            <VscGithub size={38} color="#FFFFFF" />
          </Github>
          <Deploy
            onClick={() => {
              handleRedirect({ type: "deploy" });
            }}
          >
            <BtnText>Deploy</BtnText>
            <VscGlobe size={40} color="#FFFFFF" />
          </Deploy>
        </Buttons>
      </WrapperImg>
      <Text>{description}</Text>
      {/* <Text>{t(nameTranslate)}</Text> */}
    </Container>
  );
}
