import { InfoContainer } from "../styles/InfoCard";
import { Subtitle } from "../styles/Subtitle";
import { Text } from "../styles/Text";

export default function SeatsInfo({ seats }) {
  return (
    <>
      <Subtitle>Ingressos</Subtitle>

      <InfoContainer>
        {seats.map(s => (
          <Text key={s}>Assento {s}</Text>
        ))}
      </InfoContainer>
    </>
  );
}
