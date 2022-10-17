import Counter from "./counter";
import CounterHook from "./countHook";
import React, { useState } from "react";

export const ThemeContext = React.createContext();

function App() {
  console.log('app');
  const [theme, setTheme] = useState("red");
  return (
    <ThemeContext.Provider value={{ background: theme }}>
      <div>Class Couter:</div>
      <Counter Count={2}></Counter>
      <div>Function Counter:</div>
      <CounterHook Count={1}></CounterHook>

      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === "red" ? "blue" : "red";
          })
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
