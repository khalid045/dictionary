import useDictionaryAPI from "./components/useDictionaryAPI";
import "./app.css";
import Search from "./components/Search";
import Header from "./components/Header";
import Dictionary from "./components/Dictionary";
import { useState, createContext } from "react";

export const ThemeContext = createContext(null);
export const FontChange = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const { dicData, searchWord } = useDictionaryAPI();
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  // const [selsctfont, setSelectFont] = useState("San serif");
  // const handleFontChange = (e) => {
  //   setSelectFont(e.target.value);
  //   if (e.target.value === "all") {
  //     return;
  //   } else if (e.target.value === "asia") {
  //     searchdata.regionData(e.target.value);
  //   } else if (e.target.value === "europe") {
  //     searchdata.regionData(e.target.value);
  //   } else if (e.target.value === "africa") {
  //     searchdata.regionData(e.target.value);
  //   } else if (e.target.value === "americas") {
  //     searchdata.regionData(e.target.value);
  //   } else if (e.target.value === "oceania") {
  //     searchdata.regionData(e.target.value);
  //   }
  // };
  // const handleRegionChange = (e) => {
  //   if (e.target.value === "all") {
  //     return;
  //   } else if (e.target.value === "asia") {
  //     searchdata.regionData(e.target.value);
  //   } else if (e.target.value === "europe") {
  //     searchdata.regionData(e.target.value);
  //   } else if (e.target.value === "africa") {
  //     searchdata.regionData(e.target.value);
  //   } else if (e.target.value === "americas") {
  //     searchdata.regionData(e.target.value);
  //   } else if (e.target.value === "oceania") {
  //     searchdata.regionData(e.target.value);
  //   }
  // };

  return (
    // <FontChange.Provider value={{ selsctfont, handleFontChange }}>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        id={theme}
        className="App flex flex-col items-center justify-center  bg-white"
      >
        <Header toggleTheme={toggleTheme} />
        <Search searchWord={searchWord} />
        <Dictionary search={dicData} />
      </div>
    </ThemeContext.Provider>
    // </FontChange.Provider>
  );
}

export default App;
