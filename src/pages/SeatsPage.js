import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import BuyersForm from "../components/BuyersForm";
import Footer from "../components/Footer";
import Legend from "../components/Legend";
import Loader from "../components/Loader";
import Seat from "../components/Seat";
import { getSeats } from "../services/api";
import { Title } from "../styles/Title";

export default function SeatsPage({ buyers, setBuyers }) {
  const { idSession } = useParams();

  const [seats, setSeats] = useState([]);
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSeats(idSession)
      .then(res => {
        const { seats, name: time, day, movie } = res.data;
        setSeats(seats);
        setMovie({
          title: movie.title,
          posterURL: movie.posterURL,
          date: `${day.weekday} - ${time}`
        });
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
    <>
      <Page>
        <Title>Selecione o filme</Title>
        <ul>
          {seats.map(s => (
            <Seat key={s.id} {...s} buyers={buyers} setBuyers={setBuyers} />
          ))}
        </ul>
        <BuyersForm buyers={buyers} setBuyers={setBuyers} />
        <Legend />
      </Page>
      <Footer {...movie} />
    </>
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
