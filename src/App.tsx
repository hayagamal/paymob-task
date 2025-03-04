import { NavbarComponent } from "./components/navbar/NavbarComponent";
import { TableComponent } from "./components/table/TableComponent";
import data from "./utils/payments.json";
import { headersConfig } from "./utils/tableConfigs";
import styled from "styled-components";

export default function App() {
  return (
    <>
      <NavbarComponent />
      <Container>
        <Title>Payment Table</Title>
        <TableComponent headersConfig={headersConfig} data={data} />
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 20px;
  max-width: 84vw;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 1.5vw;
  margin-bottom: 20px;
  color: var(--primary-color);
  font-weight: normal;
`;
