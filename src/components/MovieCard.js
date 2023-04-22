import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MovieCard({ id, title, posterURL }) {
  return (
    <Link to={`/sessions/${id}`}>
      <Card>
        <img src={posterURL} alt={title} />
      </Card>
    </Link>
  );
}

const Card = styled.div`
  width: 145px;
  height: 209px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #fff;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  img {
    width: 129px;
    height: 193px;
  }
`;
