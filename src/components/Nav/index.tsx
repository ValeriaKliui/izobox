import { NAV_LINKS } from "@constants/index";
import { Link } from "react-router-dom";

import { NavList } from "./styled";

export const Nav = () => (
  <nav>
    <NavList>
      {NAV_LINKS.map(({ title, link }) => (
        <li key={title}>
          <Link to={link}>{title}</Link>
        </li>
      ))}
    </NavList>
  </nav>
);
