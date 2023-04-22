import { MagnifyingGlass } from "react-loader-spinner";
import styled from "styled-components";

export default function Loader() {
  return (
    <Page>
      <MagnifyingGlass
        visible={true}
        height="150"
        width="150"
        ariaLabel="MagnifyingGlass-loading"
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#E8833A"
      />
    </Page>
  );
}

const Page = styled.div`
  width: 100vw;
  height: calc(100vh - 67px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
