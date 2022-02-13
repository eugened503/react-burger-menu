import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

function useTheme() {
  const type = useContext(ThemeContext);
  return type;
}

export default useTheme;
