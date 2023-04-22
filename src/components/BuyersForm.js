import styled from "styled-components";

import BuyerInput from "./BuyerInput";

export default function BuyersForm({ buyers, setBuyers }) {
  function updateBuyers(index, buyer) {
    setBuyers(buyers.toSpliced(index, 1, buyer));
  }

  return (
    <Form>
      {buyers.map((b, index) => (
        <BuyerInput key={b.idSeat} index={index} buyer={b} updateBuyers={updateBuyers} />
      ))}
    </Form>
  );
}

const Form = styled.form``;
