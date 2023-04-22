import styled from "styled-components";

export default function Footer({ posterURL, title, date }) {
  return (
    <Container>
      <div>
        <img src={posterURL} alt={title} />
      </div>
      {date ? (
        <div>
          <p>{title}</p>
          <p>{date}</p>
        </div>
      ) : (
        <p>{title}</p>
      )}
    </Container>
  );
}

const Container = styled.footer`
  width: 100vw;
  height: 117px;

  padding: 0 5vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;

  background: #dfe6ed;
  border-top: 1px solid #9eadba;
  position: fixed;
  bottom: 0;
  left: 0;

  div:has(img) {
    width: 64px;
    height: 89px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    img {
      width: 48px;
      height: 72px;
    }
  }

  p {
    font-size: 26px;
    line-height: 30px;
    margin-bottom: 3px;
  }
`;
