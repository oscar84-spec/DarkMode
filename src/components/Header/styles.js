import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.body};
  transition: 0.4s all ease-in;
  @media screen and (min-width: 768px) {
    padding: 20px 50px;
  }
`;

export const LegendContainer = styled.div``;
export const LegendHeader = styled.h2`
  font-size: 1.1rem;
  font-family: "Oswald";
  color: ${({ theme }) => theme.letra};
  transition: 0.4s all ease-in;
  @media screen and (min-width: 768px) {
    font-size: 1.3rem;
  }
`;
