import styled from "styled-components";

import { COLORS } from "../constants/colors";

export default function Legend() {
  return (
    <Container>
      <div>
        <Bullet {...COLORS.green}></Bullet>
        <p>Selecionado</p>
      </div>
      <div>
        <Bullet {...COLORS.grey}></Bullet>
        <p>Disponível</p>
      </div>
      <div>
        <Bullet {...COLORS.yellow}></Bullet>
        <p>Indisponível</p>
      </div>
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
