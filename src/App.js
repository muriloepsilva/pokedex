import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./routesConfig";

export default function App() {
  return (
    <>
      <Router>
        <RoutesConfig />
      </Router>
    </>
  );
}
