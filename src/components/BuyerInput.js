import styled from "styled-components";

export default function BuyerInput({ index, buyer, updateBuyers }) {
  function handleForm(e) {
    const { name, value } = e.target;
    const newBuyer = { ...buyer, [name]: value };
    updateBuyers(index, newBuyer);
  }

  return (
    <Container>
      <h3>Assento {buyer.nameSeat}</h3>

      <div>
        <label htmlFor={`name-${buyer.idSeat}`}>Nome do comprador:</label>
        <input
          type="text"
          name="name"
          id={`name-${buyer.idSeat}`}
          value={buyer.name}
          onChange={handleForm}
          placeholder="Digite seu nome..."
          required
        />
      </div>

      <div>
        <label htmlFor={`cpf-${buyer.idSeat}`}>CPF do comprador:</label>
        <input
          type="text"
          name="cpf"
          id={`cpf-${buyer.idSeat}`}
          value={buyer.cpf}
          onChange={handleForm}
          minLength={11}
          maxLength={11}
          placeholder="Digite seu CPF..."
          required
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  font-size: 18px;
  line-height: 21px;

  h3 {
    font-weight: 700;
    text-align: center;
    margin-top: 30px;
  }

  div {
    display: flex;
    flex-direction: column;

    label {
      margin: 12px 0 4px;
    }
    input {
      width: 100%;
      height: 51px;

      border: 1px solid #d5d5d5;
      border-radius: 3px;

      font-size: 18px;
      line-height: 21px;
      padding: 0 18px;

      &::placeholder {
        color: #afafaf;
        font-style: italic;
      }
    }
  }
`;
