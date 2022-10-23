import { Tag } from "./styles";

interface Props {
  name: string;
}

export function TagTech({ name }: Props) {
  return <Tag>{name}</Tag>;
}
