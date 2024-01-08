import { styled } from "styled-components";

export const SwitchContainer = styled.div`
  width: max-content;
  height: max-content;
  cursor: pointer;
`;

export const SwitchBody = styled.div`
  width: 60px;
  height: 30px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.switchBody};
  transition: 0.4s all ease-in;
  @media screen and (min-width: 768px) {
    width: 65px;
    height: 35px;
  }
`;

export const SwitchBoton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  position: absolute;
  left: ${(props) => (props.$move ? "30px" : "5px")};
  background-color: ${({ theme }) => theme.switchBoton};
  transition: 0.4s all ease-in;
  @media screen and (min-width: 768px) {
    width: 27px;
    height: 27px;
  }
`;
