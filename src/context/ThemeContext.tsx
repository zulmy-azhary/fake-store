import React, { createContext, useCallback, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface ThemeCtx {
  theme: "light" | "dark";
  setTheme?: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  colorMode: () => void;
}

const ThemeContext = createContext<ThemeCtx>({
  theme: "dark",
  colorMode: () => {},
});

export const useThemeMode = (): ThemeCtx => useContext(ThemeContext);

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("Theme", "dark");

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
