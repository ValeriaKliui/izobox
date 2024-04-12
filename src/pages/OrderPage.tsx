import { OrderSuccess } from "@components/OrderSuccess";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
`;

export const OrderPage = () => (
  <Container>
    <OrderSuccess />
  </Container>
);
