import { useState } from "react";
import styled from "styled-components";

import { COLORS } from "../constants/colors";

export default function Seat({ id, name, isAvailable }) {
  const [isSelected, setIsSelected] = useState(false);

  let color;
  if (isSelected) color = "green";
  else if (isAvailable) color = "grey";
  else color = "yellow";

  function toggleSeat() {
    if (isAvailable) {
      if (isSelected) {
        if (window.confirm(`Deseja remover assento "${name}"?`)) {
          setIsSelected(false);
        }
      } else setIsSelected(true);
    } else {
      window.alert(`O assento "${name}" não está disponível!`);
    }
  }

  return (
    <Container onClick={toggleSeat} {...COLORS[color]}>
      {name.padStart(2, "0")}
    </Container>
  );
}

const Container = styled.div`
  width: 26px;
  height: 26px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${props => props.fill};
  border: 1px solid ${props => props.border};
  border-radius: 12px;
  font-size: 11px;
  line-height: 13px;

  text-align: center;
  letter-spacing: 0.04em;

  color: #000;
`;