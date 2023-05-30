import Image from "next/image";
import { Container } from "./styles";

interface Props {
  altImg: string;
  src: string;
}

export function CircleIconHabilities({ src, altImg }: Props) {
  return (
    <Container>
      <svg
        width="231"
        height="231"
        viewBox="0 0 231 231"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="bgCircle"
      >
        <circle
          id="circle"
          opacity="0.5"
          cx="115.5"
          cy="115.5"
          r="114.5"
          stroke="url(#paint0_linear_32_75)"
          strokeWidth="2"
          strokeDasharray="20 20"
        />
        <defs>
          <linearGradient
            id="paint0_linear_32_75"
            x1="115.5"
            y1="2"
            x2="115.5"
            y2="229"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.00520833" stopColor="#BC7ADD" />
            <stop offset="0.328125" stopColor="#5C59DF" />
            <stop offset="0.494792" stopColor="#6F48DF" />
            <stop offset="0.666667" stopColor="#8A20DD" />
            <stop offset="0.927083" stopColor="#B00FFF" />
          </linearGradient>
        </defs>
      </svg>
      <Image
        src={src}
        width={100}
        height={100}
        alt={altImg}
        className="moveIcon"
      />
    </Container>
  );
}
