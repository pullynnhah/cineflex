import styled from "styled-components";

export default function BuyerInput({ index, buyer, updateBuyers }) {
  function handleForm(e) {
    const { name, value } = e.target;
    const newBuyer = { ...buyer, [name]: value };
    updateBuyers(index, newBuyer);
  }

  const keys = [
    { id: "name", title: "Nome" },
    { id: "cpf", title: "CPF" }
  ];
  return (
    <Container>
      <h3>Assento {buyer.nameSeat}</h3>
      {keys.map(k => (
        <div key={k.id}>
          <label htmlFor={`${k}-${buyer.idSeat}`}>{k.title} do comprador:</label>
          <input
            type="text"
            name={k.id}
            id={`${k.id}-${buyer.idSeat}`}
            value={buyer[k.id]}
            onChange={handleForm}
          />
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div``;
