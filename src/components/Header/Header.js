import { HeaderContainer, LegendContainer, LegendHeader } from "./styles";
import Switch from "../Switch/Switch";

const Header = ({ theme, setTheme }) => {
  return (
    <HeaderContainer>
      <LegendContainer>
        <LegendHeader>Oscar Hernández</LegendHeader>
      </LegendContainer>
      <Switch theme={theme} setTheme={setTheme} />
    </HeaderContainer>
  );
};
export default Header;
