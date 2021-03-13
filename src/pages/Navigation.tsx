import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  background-color: #eeeeee;
  border-top: 1px solid #777777;
  width: 100%;
  box-sizing: border-box;

  /* padding: 0.5rem; */

  ul {
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style: none;

    li {
      margin: 0;
    }

    li:not(:last-child) {
      border-right: 1px solid black;
    }
  }
`;

const StyledLink = styled(Link)`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
`;

export const Navigation: React.FC = () => {
  return (
    <Nav>
      <ul>
        <li>
          <StyledLink to="/">Search</StyledLink>
        </li>
        <li>
          <StyledLink to="/starred">Starred</StyledLink>
        </li>
        <li>
          <StyledLink to="/meals">My Meals</StyledLink>
        </li>
      </ul>
    </Nav>
  );
};
