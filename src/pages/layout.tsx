import { Outlet } from "react-router-dom";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import styled from "styled-components";

const FlexWrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap: 4em
`

export const PageLayout = () => (
    <>
        <Header />
        <FlexWrapper>
            <Outlet /></FlexWrapper>
        <Footer />
    </>
);