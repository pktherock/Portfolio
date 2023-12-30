import { RouterProvider } from "react-router-dom";
import "./App.css";
import appRoutes from "./app.routes";
import { SidenavContextProvider, ThemeContextProvider } from "./contexts";

function App() {
  return (
    <ThemeContextProvider>
      <SidenavContextProvider>
        <RouterProvider router={appRoutes} />
      </SidenavContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
