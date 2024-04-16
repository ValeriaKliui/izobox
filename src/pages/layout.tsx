import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { devices } from "@providers/Theme/constants";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4em;
  flex-basis: 100%;
  ${devices.lg} {
    gap: 3em;
  }
`;

export const PageLayout = () => (
  <>
    <Header />
    <FlexWrapper>
      <Outlet />
    </FlexWrapper>
    <Footer />
  </>
);
