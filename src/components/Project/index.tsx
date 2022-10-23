import Image from "next/image";
import {
  BtnText,
  Buttons,
  Container,
  ContainerTags,
  Deploy,
  Github,
  Text,
  WrapperImg,
} from "./styles";
import { VscGithub, VscGlobe } from "react-icons/vsc";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { TagTech } from "../TagTech";
interface Redirect {
  type: "github" | "deploy";
}
interface Props {
  id: string;
  title: string;
  tagsTechnologies: string;
  deployUrl: string;
  githubUrl: string;
  photo: {
    url: string;
  };
  description?: string;
}

export function Project({
  id,
  title,
  deployUrl,
  githubUrl,
  photo,
  tagsTechnologies,
}: Props) {
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
          alt={title}
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
      <ContainerTags>
        {tagsTechnologies.split(",").map((tag) => (
          <TagTech key={id} name={tag} />
        ))}
      </ContainerTags>
    </Container>
  );
}
