import { useEffect, useState } from "react";
import styled from "styled-components";

import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";
import { getMovies } from "../services/api";
import { Title } from "../styles/Title";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getMovies()
      .then(res => {
        setMovies(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err.response.data);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Page>
      <Title>Selecione o filme</Title>
      <ul>
        {movies.map(m => (
          <MovieCard key={m.id} id={m.id} title={m.title} posterURL={m.posterURL} />
        ))}
      </ul>
    </Page>
  );
}

const Page = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 11px 0;
    margin-top: 41px;
  }
`;
