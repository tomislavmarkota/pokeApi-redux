import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const NavLinkStyled = styled(Link)`
  display: block;
  font-size: ${({fontSize}) => fontSize};
  padding: 10px;
  background-color: ${({bgcolor}) => bgcolor };
  border-radius: 6px;
  border: 3px solid ${({bordercolor}) => bordercolor };
  text-align: center;
  color: black;
  text-decoration: none;
  &:hover {
    background-color: ${({theme}) => theme.colors.body};
  }
`;