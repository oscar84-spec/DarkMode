import { styled } from "styled-components";

export const BodyContainer = styled.section`
  width: 100%;
  height: calc(100vh - 70px);
  box-sizing: border-box;
  position: relative;
  background-color: ${({ theme }) => theme.body};
  transition: 0.4s all ease-in;
`;

export const CardContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 250px;
  height: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const IconContainer = styled.div`
  width: max-content;
  transition: 0.4s all ease-in;
  svg {
    width: 45px;
    height: 45px;
    fill: ${({ theme }) => theme.icon};
    transition: 0.4s all ease-in;
  }
  @media screen and (min-width: 768px) {
    svg {
      width: 60px;
      height: 60px;
    }
  }
`;

export const TextContainer = styled.div`
  width: max-content;
`;

export const Legend = styled.h2`
  font-size: 1rem;
  font-family: "Lemon";
  color: ${({ theme }) => theme.legend};
  transition: 0.4s all ease-in;
  @media screen and (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const Boton = styled.button`
  width: 120px;
  height: 35px;
  border-radius: 10px;
  border: none;
  font-family: "Oswald";
  font-size: 1rem;
  color: ${({ theme }) => theme.letra};
  background-color: ${({ theme }) => theme.boton};
  transition: 0.4s all ease-in;
  @media screen and (min-width: 768px) {
    width: 140px;
    height: 40px;
    font-size: 1.1rem;
  }
`;
