import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import App from "./App";
import { NavigationProvider } from "./context/navigation";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>,
);
