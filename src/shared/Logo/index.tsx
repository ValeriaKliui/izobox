import LogoIcon from "@assets/icons/logo.svg?react";
import { PATHS } from "@constants/paths";
import { NavLink } from "react-router-dom";

export const Logo = () => (
  <NavLink to={PATHS.MAIN}>
    <h1>
      <LogoIcon />
    </h1>
  </NavLink>
);
