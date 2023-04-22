import { useEffect, useState } from "react";
import styled from "styled-components";

import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";
import { getMovies } from "../services/api";

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
      <h2>Selecione o filme</h2>
      <ul>
        {movies.map(m => (
          <MovieCard key={m.id} id={m.id} title={m.title} posterURL={m.posterURL} />
        ))}
      </ul>
    </Page>
  );
}

const Page = styled.div`
  h2 {
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.04em;
    margin: 41px 0;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 11px 0;
  }
`;
