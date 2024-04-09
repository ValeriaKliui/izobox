import MontserratBoldWoff from "@assets/fonts/Montserrat-Bold.woff";
import MontserratBoldWoff2 from "@assets/fonts/Montserrat-Bold.woff2";
import MontserratMediumWoff from "@assets/fonts/Montserrat-Medium.woff";
import MontserratMediumWoff2 from "@assets/fonts/Montserrat-Medium.woff2";
import MontserratWoff from "@assets/fonts/Montserrat-Regular.woff";
import MontserratWoff2 from "@assets/fonts/Montserrat-Regular.woff2";
import MontserratSemiBoldWoff from "@assets/fonts/Montserrat-SemiBold.woff";
import MontserratSemiBoldWoff2 from "@assets/fonts/Montserrat-SemiBold.woff2";
import PoppinsTtf from "@assets/fonts/Poppinsregular.ttf";
import PoppinsWoff from "@assets/fonts/Poppinsregular.woff";
import PoppinsWoff2 from "@assets/fonts/Poppinsregular.woff2";
import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  @font-face {
    font-family: Montserrat-SemiBold;
    src:
      url(${MontserratSemiBoldWoff}) format("woff"),
      url(${MontserratSemiBoldWoff2}) format("woff2");
  }
  @font-face {
    font-family: Montserrat-Bold;
    src:
      url(${MontserratBoldWoff}) format("woff"),
      url(${MontserratBoldWoff2}) format("woff2");
  }
  @font-face {
    font-family: Montserrat-Medium;
    src:
      url(${MontserratMediumWoff}) format("woff"),
      url(${MontserratMediumWoff2}) format("woff2");
  }
  @font-face {
    font-family: Montserrat;
    src:
      url(${MontserratWoff}) format("woff"),
      url(${MontserratWoff2}) format("woff2");
  }
  @font-face {
    font-family: Poppins;
    src:
      url(${PoppinsWoff}) format("woff"),
      url(${PoppinsWoff2}) format("woff2"),
      url(${PoppinsTtf}) format("ttf");
  }
  html,
  body {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    font-size: 16px;
    font-family: Montserrat;
  }
  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  button {
    font-size: 16px;
    font-family: Montserrat-SemiBold;
  }
  ul {
    padding: 0 1.5em;
  }
  li {
    list-style-type: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  a {
    text-decoration: none;
    color: inherit;
    font-family: Montserrat-SemiBold;
    transition: ${({ theme }) => theme.transition};
    &:hover {
      color: ${({ theme: { colors } }) => colors.main};
    }
  }
  h2 {
    font-family: Montserrat-Bold;
    font-size: 3.1em;
  }
  h3 {
    font-family: Montserrat-SemiBold;
    font-size: 2.5em;
  }
  h4 {
    font-family: Montserrat-Bold;
    font-size: 1.8em;
  }
  h5 {
    font-family: Montserrat-Bold;
    font-size: 1.13em;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin: 0;
  }
  .wrapper {
    max-width: 1140px;
    margin: 0 auto;
    width: 100%;
  }
  .semibold {
    font-family: Montserrat-SemiBold;
  }
  .bold {
    font-family: Montserrat-Bold;
  }
  .primary-text {
    color: ${({ theme: { colors } }) => colors.main};
  }
  .underline {
    text-decoration: underline;
  }
  .pointer {
    cursor: pointer;
  }
`;
