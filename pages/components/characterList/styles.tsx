import styled from "styled-components";
import { media } from "../../../styles/media";

export const Wrapper = styled.div`
  @media (min-width: ${media.mobile}) {
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: white;
  margin: 0;
  padding: 32px 24px;
  box-shadow: 0 8px 12px 0 darkgrey;
  text-align: center;

  h2 {
    margin: 0 0 0 16px;
    text-transform: uppercase;
    color: black;
    letter-spacing: 4px;
    font-size: 18px;
    font-weight: 300;
  }

  @media (min-width: ${media.mobile}) {
    justify-content: start;
    flex-wrap: wrap;
  }
`;

export const List = styled.div`
  display: grid;
  justify-content: center;
  margin: 13px 0 72px 0;

  @media (min-width: ${media.mobile}) {
    display: grid;
    grid-template-columns: repeat(auto-fill, 340px);
    grid-gap: 20px;
    margin-bottom: 72px;
  }
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 24px;
  box-shadow: 0 8px 12px 0 darkgrey;
  border-radius: 5px;
  justify-content: space-between;
  height: 130px;
  width: 340px;
  cursor: pointer;
  margin: 16px;

  &::nth-last-child() {
    margin-bottom: 32px;
  }

  &:hover {
    background-color: #eee;
  }

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
    width: 300px;
  }
`;

export const ListItemInfo = styled.div`
  display: flex;
  justify-content: space-between;

  h5 {
    margin: 0;
    letter-spacing: 2px;
    font-size: 12px;
    font-weight: 400;
  }

  @media (min-width: ${media.mobile}) {
  }
`;

export const ListItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: ${media.mobile}) {
  }
`;

export const Bottom = styled.div`
  background-color: darkgrey;
  border: none;
  padding: 18px 0;
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0;

  h4 {
    margin: 0;
    color: white;
    letter-spacing: 4px;
    margin: 0;
    font-weight: 300;
  }

  @media (min-width: ${media.mobile}) {
  }
`;

export const BottomLink = styled.div`
  color: white;
  letter-spacing: 4px;
  font-weight: 300;
  cursor: pointer;

  &:hover {
    color: #444;
  }
`;
