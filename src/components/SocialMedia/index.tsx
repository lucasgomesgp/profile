import Image from "next/image";
import Link from "next/link";
import { Container } from "./styles";

export function SocialMedia() {
  return (
    <Container>
      <Link href="https://twitter.com/lucas_gomesgp">
        <a target="_blank">
          <Image src={"/assets/icons/twitter.svg"} alt="" width={22} height={22} />
        </a>
      </Link>
      <Link href="https://www.instagram.com/lucas_gomesgp/">
        <a target="_blank">
          <Image src={"/assets/icons/instagram.svg"} alt="" width={22} height={22} />
        </a>
      </Link>
      <Link href="https://github.com/lucasgomesgp">
        <a target="_blank">
          <Image src={"/assets/icons/github.svg"} alt="" width={22} height={22} />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/lucas-gomes-aab356173/">
        <a target="_blank">
          <Image src={"/assets/icons/linkedin.svg"} alt="" width={22} height={22} />
        </a>
      </Link>
      <Link href="https://www.youtube.com/channel/UCbK1HocF7CCORYVVV0DnmPA">
        <a target="_blank">
          <Image src={"/assets/icons/youtube.svg"} alt="" width={22} height={22} />
        </a>
      </Link>
    </Container>
  );
};

