import Image from "next/image";
import Link from "next/link";
import { Container } from "./styles";

export function SocialMedia() {
  return (
    <Container>
      <Link href="https://twitter.com/lucas_gomesgp" target="_blank">
          <Image src={"/assets/icons/twitter.svg"} alt="Twitter" width={28} height={28}  />
      </Link>
      <Link href="https://www.instagram.com/lucas_gomesgp/" target="_blank">
          <Image src={"/assets/icons/instagram.svg"} alt="Instagram" width={28} height={28}  />
      </Link>
      <Link href="https://github.com/lucasgomesgp" target="_blank">
          <Image src={"/assets/icons/github.svg"} alt="Github" width={28} height={28}  />
      </Link>
      <Link href="https://www.linkedin.com/in/lucas-gomes-aab356173/" target="_blank">
          <Image src={"/assets/icons/linkedin.svg"} alt="Linkedin" width={28} height={28}  />
      </Link>
      <Link href="https://www.youtube.com/channel/UCbK1HocF7CCORYVVV0DnmPA" target="_blank">
          <Image src={"/assets/icons/youtube.svg"} alt="Youtube" width={28} height={28}  />
      </Link>
      <Link href="https://dev.to/lucas_gomesgp" target="_blank">
          <Image src={"/assets/icons/dev.svg"} alt="Dev.to" width={28} height={28}/>
      </Link>
    </Container>
  );
};

