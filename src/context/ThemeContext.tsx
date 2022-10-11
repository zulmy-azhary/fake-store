import React, { createContext, useCallback, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import type { ThemeType } from "../types";


interface ThemeCtx {
  theme: ThemeType;
  setTheme?: React.Dispatch<React.SetStateAction<ThemeType>>;
  colorMode: () => void;
}

const ThemeContext = createContext<ThemeCtx>({
  theme: "dark",
  colorMode: () => {},
});

export const useThemeMode = (): ThemeCtx => useContext(ThemeContext);

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<ThemeType>("Theme", "dark");

  const colorMode = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
