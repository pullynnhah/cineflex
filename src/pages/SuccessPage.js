import styled from "styled-components";

export default function SuccessPage({ buyers }) {
  return (
    <Page>
      <h2>
        Pedido feito
        <br />
        com sucesso!
      </h2>
    </Page>
  );
}

const Page = styled.div`
  margin: 27px 0;
`;
