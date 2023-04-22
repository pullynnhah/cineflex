import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { OrangeButton } from "../styles/OrangeButton";

export default function Session({ weekday, date, showtimes }) {
  const navigate = useNavigate();

  function gotoSession(id) {
    navigate(`/seats/${id}`);
  }

  return (
    <Container>
      <p>
        {weekday} - {date}
      </p>
      <ul>
        {showtimes.map(s => (
          <li key={s.id}>
            <OrangeButton onClick={() => gotoSession(s.id)}>{s.name}</OrangeButton>
          </li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  p {
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.02em;
    margin: 23px 0;
  }

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
  }
`;
