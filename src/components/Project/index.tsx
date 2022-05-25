import Image from "next/image";
import { BtnText, Buttons, Container, Deploy, Github, Text, WrapperImg } from "./styles";
import { VscGithub, VscGlobe } from "react-icons/vsc";
import { useRouter } from "next/router";

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
    const router = useRouter();

    function handleRedirect({ type }: Redirect) {
        if (type === "github") {
            router.push(link_github);
        } else {
            router.push(link_deploy);
        }
    }
    return (
        <Container>
            <WrapperImg>
                <Image src={image} alt={altImg} width={500} height={300} layout="fixed" id="project" />
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