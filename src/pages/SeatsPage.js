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

export default function SeatsPage({ buyers, setBuyers, movieInfo, setMovieInfo }) {
  const { idSession } = useParams();

  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSeats(idSession)
      .then(res => {
        const { seats, name: time, day, movie } = res.data;
        setSeats(seats);

        setMovieInfo({
          title: movie.title,
          posterURL: movie.posterURL,
          date: { footer: `${day.weekday} - ${time}`, success: `${day.date} ${time}` }
        });

        setLoading(false);
      })
      .catch(err => {
        console.error(err.response.data);
        setLoading(false);
      });
  }, [idSession, setMovieInfo]);

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
        <Legend />
        <BuyersForm buyers={buyers} setBuyers={setBuyers} />
      </Page>
      <Footer
        title={movieInfo.title}
        posterURL={movieInfo.posterURL}
        date={movieInfo.date.footer}
      />
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
