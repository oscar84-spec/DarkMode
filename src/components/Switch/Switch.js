import { SwitchContainer, SwitchBody, SwitchBoton } from "./styles";
import { useState } from "react";

const Switch = ({ theme, setTheme }) => {
  const [move, setMove] = useState(false);

  const changeMode = () => {
    if (theme === "light") {
      changeMove();
      setTheme("dark");
    } else {
      changeMove();
      setTheme("light");
    }
  };

  const changeMove = () => {
    setMove(!move);
  };
  return (
    <SwitchContainer onClick={changeMode}>
      <SwitchBody>
        <SwitchBoton type='button' $move={move}></SwitchBoton>
      </SwitchBody>
    </SwitchContainer>
  );
};
export default Switch;
