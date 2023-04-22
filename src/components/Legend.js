import styled from "styled-components";

import { COLORS } from "../constants/colors";

export default function Legend() {
  const keys = [
    { color: "cyan", text: "Selecionado" },
    { color: "grey", text: "Disponível" },
    { color: "yellow", text: "Indisponível" }
  ];
  return (
    <Container>
      {keys.map(k => (
        <div key={k.color}>
          <Bullet {...COLORS[k.color]}></Bullet>
          <p>{k.text}</p>
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    p {
      color: #4e5a65;
      font-size: 13px;
      line-height: 15px;
      letter-spacing: -0.013em;
    }
  }
`;

const Bullet = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${props => props.fill};
  border: 1px solid ${props => props.border};
  margin: 16px 0 8px;
`;
