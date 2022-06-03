import Image from "next/image";
import { useTranslation } from "react-i18next";
import { languageTypes } from "../../../utils/languageTypes";
import { Button, Container } from "./styles";

export function Countries() {
    const { i18n } = useTranslation();
    return (
        <>
            <Container>
                {
                    languageTypes.map(({ imageSrc, key, name }) => (
                        <Button key={key} onClick={() => {
                            i18n.changeLanguage(key)
                        }} nameLang={key} activeLang={i18n.language}>
                            <Image src={imageSrc} alt={name} layout="fixed" width={25} height={25} />
                        </Button>
                    ))
                }
            </Container>
        </>
    );
}