import "./assets/reset.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Themes from "./components/Themes/Themes";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={Themes[theme]}>
      <Header theme={theme} setTheme={setTheme} />
      <Body theme={theme} />
    </ThemeProvider>
  );
}

export default App;
