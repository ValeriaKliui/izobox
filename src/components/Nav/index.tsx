import { NAV_LINKS } from "@constants/index";
import { FC } from "react";
import { Link } from "react-router-dom";

import { NavProps } from "./interfaces";
import { NavList } from "./styled";

export const Nav: FC<NavProps> = ({ isVertical }) => (
  <nav>
    <NavList $isVertical={isVertical}>
      {NAV_LINKS.map(({ title, link }) => (
        <li key={title}>
          <Link to={link}>{title}</Link>
        </li>
      ))}
    </NavList>
  </nav>
);
