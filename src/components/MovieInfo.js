import { InfoContainer } from "../styles/InfoCard";
import { Subtitle } from "../styles/Subtitle";
import { Text } from "../styles/Text";

export default function MovieInfo({ title, date }) {
  return (
    <>
      <Subtitle>Filme e sessão</Subtitle>

      <InfoContainer>
        <Text>{title}</Text>
        <Text>{date}</Text>
      </InfoContainer>
    </>
  );
}
