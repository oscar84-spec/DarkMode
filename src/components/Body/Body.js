import {
  BodyContainer,
  CardContainer,
  IconContainer,
  TextContainer,
  Legend,
  Boton,
} from "./styles";
import { IoIosPartlySunny } from "react-icons/io";
import { RiMoonClearFill } from "react-icons/ri";

const Body = ({ theme }) => {
  const Icono = theme === "light" ? <IoIosPartlySunny /> : <RiMoonClearFill />;
  const Modo = theme === "light" ? "Claro" : "Oscuro";
  return (
    <BodyContainer>
      <CardContainer>
        <IconContainer>{Icono}</IconContainer>
        <TextContainer>
          <Legend>Hola, Estoy en Modo {Modo} </Legend>
        </TextContainer>
        <Boton type='button'>Empezar</Boton>
      </CardContainer>
    </BodyContainer>
  );
};
export default Body;
