import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Loader from "../components/Loader";
import Seat from "../components/Seat";
import { getSeats } from "../services/api";
import { Title } from "../styles/Title";

export default function SeatsPage() {
  const { idSession } = useParams();

  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSeats(idSession)
      .then(res => {
        setSeats(res.data.seats);
        setLoading(false);
      })
      .catch(err => {
        console.error(err.response.data);
        setLoading(false);
      });
  }, [idSession]);

  return loading ? (
    <Loader />
  ) : (
    <Page>
      <Title>Selecione o filme</Title>
      <ul>
        {seats.map(s => (
          <Seat key={s.id} {...s} />
        ))}
      </ul>
    </Page>
  );
}

const Page = styled.div`
  margin: 41px 8vw 130px;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 18px 7px;
    margin-top: 22px;
  }
`;
