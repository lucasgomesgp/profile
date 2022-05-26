import Image from "next/image";
import { BtnText, Buttons, Container, Deploy, Github, Text, WrapperImg } from "./styles";
import { VscGithub, VscGlobe } from "react-icons/vsc";
interface Props {
    text: string;
    image: string;
    altImg: string;
    link_github: string;
    link_deploy: string;
}
interface Redirect {
    type: "github" | "deploy";
}
export function Project({ text, image, altImg, link_github, link_deploy }: Props) {

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
            <Text>{text}</Text>
        </Container>
    );
}