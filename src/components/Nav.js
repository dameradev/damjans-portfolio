import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "./Logo";

const NavStyles = styled.nav`
  /* margin-bottom: 3rem; */
  background: var(--primary);
  position: fixed;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 5%;
  ul {
    display: flex;
    list-style: none;
    text-transform: uppercase;
  }
  li {
    &:not(:last-of-type) {
      margin-right: 2rem;
    }
  }
  a {
    color: var(--white);
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <Logo />
      <ul>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/#portfolio">My work</Link>
        </li>
        {/* <li>
          <Link to="/slicemasters">Contact</Link>
        </li> */}
      </ul>
    </NavStyles>
  );
}
