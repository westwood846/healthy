import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledTopBar = styled.nav`
  color: white;
  background-color: salmon;
  border-bottom: 1px solid violet;

  width: 100%;
  padding: 4px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: baseline;

  a {
    color: white;
  }
`;

export const TopBar: React.FC = (props) => {
  return (
    <StyledTopBar {...props}>
      <Link to="/">
        <h1>Healthy</h1>
      </Link>
      <div>
        <Link to="/settings">Settings</Link>
      </div>
    </StyledTopBar>
  );
};
