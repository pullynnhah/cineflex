import { useState } from "react";
import styled from "styled-components";

import { COLORS } from "../constants/colors";

export default function Seat({ id, name, isAvailable, buyers, setBuyers }) {
  const [isSelected, setIsSelected] = useState(false);

  function addBuyer(idSeat, nameSeat) {
    const newBuyers = [...buyers, { idSeat, nameSeat, name: "", cpf: "" }];
    newBuyers.sort((a, b) => a.idSeat - b.idSeat);
    setBuyers(newBuyers);
  }

  function removeBuyer(idSeat) {
    setBuyers(buyers.filter(b => b.idSeat !== idSeat));
  }

  let color;
  if (isSelected) color = "cyan";
  else if (isAvailable) color = "grey";
  else color = "yellow";

  function toggleSeat() {
    if (isAvailable) {
      if (isSelected) {
        if (window.confirm(`Deseja remover assento "${name}"?`)) {
          setIsSelected(false);
          removeBuyer(id);
        }
      } else {
        setIsSelected(true);
        addBuyer(id, name);
      }
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
