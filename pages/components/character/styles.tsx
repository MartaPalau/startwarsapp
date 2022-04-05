import styled from "styled-components";
import { media } from "../../../styles/media";

export const Wrapper = styled.div`
  @media (min-width: ${media.mobile}) {
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  margin: 0;
  padding: 18px 24px;
  box-shadow: 0 8px 12px 0 darkgrey;

  h4,
  h2 {
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 12px;
    font-weight: 300;
  }

  h2 {
    display: flex;
    flex: 1;
    margin: 0 16px;
    color: black;
  }

  h4 {
    color: #888;
    text-align: right;
  }

  @media (min-width: ${media.mobile}) {
    display: flex;
    justify-content: start;
    align-items: center;

    h4,
    h2 {
      font-size: 16px;
    }
  }
`;

export const Cards = styled.div`
  padding-bottom: 70px;

  @media (min-width: ${media.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const InnerCards = styled.div`
  @media (min-width: ${media.mobile}) {
    width: auto;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 24px;
  margin: 16px 16px;
  border-radius: 5px;

  a {
    display: block;
    font-size: 18px;
    letter-spacing: 4px;
  }

  h4 {
    margin: 0;
    color: #888;
    letter-spacing: 2px;
    font-size: 14px;
    font-weight: 300;
    padding: 8px 0;
  }

  @media (min-width: ${media.mobile}) {
    width: 500px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;

  h4 {
    margin: 0 0 0 16px;
    color: black;
  }

  @media (min-width: ${media.mobile}) {
  }
`;

export const CardItem = styled.div`
  display: flex;

  h4 {
    margin-left: 16px;
  }
`;

export const Bottom = styled.div`
  background-color: darkgrey;
  border: none;
  padding: 18px 0;
  text-align: center;
  cursor: pointer;
  width: 100%;
  position: fixed;
  bottom: 0;

  &:hover {
    h4 {
      color: #444;
    }
  }

  h4 {
    color: white;
    letter-spacing: 4px;
    margin: 0;
    font-weight: 300;
  }

  @media (min-width: ${media.mobile}) {
  }
`;
