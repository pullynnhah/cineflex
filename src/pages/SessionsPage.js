import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Loader from "../components/Loader";
import Session from "../components/Session";
import { getShowtimes } from "../services/api";
import { Title } from "../styles/Title";

export default function SessionsPage() {
  const { idMovie } = useParams();

  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getShowtimes(idMovie)
      .then(res => {
        setSessions(res.data.days);
        setLoading(false);
      })
      .catch(err => {
        console.error(err.response.data);
        setLoading(false);
      });
  }, [idMovie]);

  return loading ? (
    <Loader />
  ) : (
    <Page>
      <Title>Selecione o filme</Title>
      <ul>
        {sessions.map(s => (
          <Session key={s.id} {...s} />
        ))}
      </ul>
    </Page>
  );
}

const Page = styled.div`
  margin: 41px 8vw 130px;
`;
