import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import "./theme.css";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  // FIX: apply data-theme to HTML root
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="light-dark-mode">
      <div className="container">
        <p>Hello World</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
