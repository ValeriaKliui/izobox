import LogoIcon from "@assets/icons/logo.svg?react";
import { NavLink } from "react-router-dom";

export const Logo = () => (
  <NavLink to="#">
    <h1>
      <LogoIcon />
    </h1>
  </NavLink>
);
