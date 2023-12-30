import { SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../../contexts";

function ThemeBtn() {
  const { themeMode, toggleTheme } = useTheme();
  return (
    <SunIcon
      className={`w-10 h-10 active:border active:shadow-lg rounded-full p-1 ${
        themeMode === "light" ? "text-yellow-400" : "text-gray-700"
      }`}
      onClick={toggleTheme}
    />
  );
}

export default ThemeBtn;
