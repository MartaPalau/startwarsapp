import styled from "styled-components";
import { media } from "../../../styles/media";

export const Wrapper = styled.div`
  @media (min-width: ${media.mobile}) {
  }
`;

export const Header = styled.div`
  background-color: white;
  margin: 0;
  padding: 32px 24px;
  box-shadow: 0 8px 12px 0 darkgrey;
  text-align: center;

  h2 {
    margin: 0;
    text-transform: uppercase;
    color: black;
    letter-spacing: 4px;
    font-size: 18px;
    font-weight: 300;
  }

  @media (min-width: ${media.mobile}) {
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 24px;

  @media (min-width: ${media.mobile}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 32px 24px;
  margin: 16px 0;
  box-shadow: 0 8px 12px 0 darkgrey;
  border-radius: 5px;

  a {
    display: block;
    font-size: 18px;
    letter-spacing: 4px;
  }

  h3 {
    margin: 0;
    color: #888;
    letter-spacing: 4px;
    font-size: 18px;
    font-weight: 300;
  }

  @media (min-width: ${media.mobile}) {
  }
`;

export const LoadMore = styled.div`
  background-color: darkgrey;
  border: none;
  padding: 18px 0;
  text-align: center;
  color: white;
  letter-spacing: 4px;

  @media (min-width: ${media.mobile}) {
  }
`;
