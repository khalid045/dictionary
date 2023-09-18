import useDictionaryAPI from "./components/useDictionaryAPI";
import "./app.css";
import Search from "./components/Search";
import Header from "./components/Header";
import Dictionary from "./components/Dictionary";
import { useState, createContext } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [selsctfont, setSelectFont] = useState("Inter");
  const { dicData, searchWord } = useDictionaryAPI();
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };
  const handleFontChange = (e) => {
    // setSelectFont(e.target.value);
    if (e.target.value === "Inter") {
      setSelectFont(e.target.value);
    } else if (e.target.value === "Lora") {
      setSelectFont(e.target.value);
    } else if (e.target.value === "Inconsolata") {
      setSelectFont(e.target.value);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        id={theme}
        className={`App flex flex-col items-center justify-center  bg-white  `}
        style={{ fontFamily: selsctfont }}
      >
        <Header
          toggleTheme={toggleTheme}
          fontData={{ selsctfont, handleFontChange }}
        />
        <Search searchWord={searchWord} />
        <Dictionary search={dicData} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
