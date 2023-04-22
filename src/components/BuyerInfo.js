import { InfoContainer } from "../styles/InfoCard";
import { Subtitle } from "../styles/Subtitle";
import { Text } from "../styles/Text";
import { formatCPF } from "../utils/formatCPF";

export default function BuyerInfo({ seat, name, cpf }) {
  return (
    <>
      <Subtitle>Comprador ({seat})</Subtitle>

      <InfoContainer>
        <Text>Nome: {name}</Text>
        <Text>CPF: {formatCPF(cpf)}</Text>
      </InfoContainer>
    </>
  );
}
