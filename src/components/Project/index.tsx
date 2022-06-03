import Image from "next/image";
import { BtnText, Buttons, Container, Deploy, Github, Text, WrapperImg } from "./styles";
import { VscGithub, VscGlobe } from "react-icons/vsc";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
interface Props {
    image: string;
    altImg: string;
    link_github: string;
    link_deploy: string;
    nameTranslate: string;
}
interface Redirect {
    type: "github" | "deploy";
}
export function Project({ image, altImg, link_github, link_deploy, nameTranslate }: Props) {
    const { t } = useTranslation();
    function handleRedirect({ type }: Redirect) {
        if (type === "github") {
            window.open(link_github, "_blank");
        } else {
            window.open(link_deploy, "_blank");
        }
    }
    return (
        <Container>
            <WrapperImg>
                <Image src={image} alt={altImg} width={500} height={300} layout="responsive" id="project" />
                <Buttons id="btns">
                    <Github onClick={() => { handleRedirect({ type: "github" }) }}>
                        <BtnText>
                            Github
                        </BtnText>
                        <VscGithub size={38} color="#FFFFFF" />
                    </Github>
                    <Deploy onClick={() => { handleRedirect({ type: "deploy" }) }}>
                        <BtnText>
                            Deploy
                        </BtnText>
                        <VscGlobe size={40} color="#FFFFFF" />
                    </Deploy>
                </Buttons>
            </WrapperImg>
            <Text>{t(nameTranslate)}</Text>
        </Container>
    );
}