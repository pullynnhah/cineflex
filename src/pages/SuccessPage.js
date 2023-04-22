import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import BuyerInfo from "../components/BuyerInfo";
import MovieInfo from "../components/MovieInfo";
import SeatsInfo from "../components/SeatsInfo";
import { OrangeButton } from "../styles/OrangeButton";
import { Title } from "../styles/Title";

export default function SuccessPage({ buyers, setBuyers, movieInfo }) {
  const navigate = useNavigate();

  function goBack() {
    setBuyers([]);
    navigate("/");
  }

  return (
    <Page>
      <BoldTitle>
        Pedido feito
        <br />
        com sucesso!
      </BoldTitle>
      <MovieInfo title={movieInfo.title} date={movieInfo.date.success} />
      <SeatsInfo seats={buyers.map(b => b.nameSeat)} />
      {buyers.map(b => (
        <BuyerInfo key={b.idSeat} seat={b.nameSeat} name={b.name} cpf={b.cpf} />
      ))}

      <Wrapper>
        <OrangeButton onClick={goBack}>Voltar pra Home</OrangeButton>
      </Wrapper>
    </Page>
  );
}

const Page = styled.div`
  margin: 0 8vw;
`;

const BoldTitle = styled(Title)`
  font-weight: 700;
  color: #247a6b;
  margin-top: 27px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 62px 0 124px;
`;
